import request from './axios.js';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const filterContainer = document.querySelector('.dessert-filter');
const selectContainer = document.querySelector('.dessert-filter-select');
const selectTrigger = document.querySelector('.dessert-select-trigger');
const selectTriggerTitle = document.querySelector('.dessert-select-title');
const customOptionsContainer = document.querySelector('.dessert-custom-options');
const dessertContainer = document.querySelector('.dessert-list');
const loadMore = document.querySelector('.load-more');
let currentCategory = 'all';
let currentPage = 1;

filterContainer.innerHTML = `
    <label class="dessert-category-label">
        <input class="dessert-btn" type="radio" name="dessert-category" value="all" checked>
        <span class="dessert-name">Всі десерти</span>
    </label>
`;
selectContainer.innerHTML = `
    <option class="select-item active" value="all">Всі десерти</option>
`;
customOptionsContainer.innerHTML = `
    <li class="custom-option active" data-value="all"><span>Всі десерти</span>  </li>
`;

async function createCategory() {
    try {
        const filters = await request({ method: 'get', route: 'categories' });
        const categories = filters.data;
        filterContainer.insertAdjacentHTML('beforeend', categoryMarcup(categories))
        selectContainer.insertAdjacentHTML('beforeend', selectorMarcup(categories));
        customOptionsContainer.insertAdjacentHTML('beforeend', customSelectorMarcup(categories));        
    } catch (error) {
        iziToast.error({
            title: 'Увага',
            titleSize: '16',
            message: 'Помилка завантаження категорій',
            messageSize: '16',
            position: 'topRight',
            timeout: 5000
        });
    }
};

function categoryMarcup(categories) {
    return categories.map(({ _id, name }) => `
        <label class="dessert-category-label">
            <input class="dessert-btn" type="radio" name="dessert-category" value="${_id}">
            <span class="dessert-name">${name}</span>
        </label>    
    `).join("");
};

function selectorMarcup(categories) {
    return categories.map(({ _id, name }) => `
        <option class="select-item" value="${_id}">${name}</option>
    `).join("");
};

function customSelectorMarcup(categories) {
    return categories.map(({ _id, name }) => `
        <li class="custom-option" data-value="${_id}"><span>${name}</span></li>
    `).join("");
};

createCategory();

function resetAndReload() {
    currentPage = 1;
    dessertContainer.innerHTML = '';
    createDesserts();
};

async function createDesserts() {
    try {
        const requestParams = { page: currentPage, limit: 8 };
        if (currentCategory !== 'all') {
            requestParams.category = currentCategory; 
        }
        const desserts = await request({ method: 'get', body: requestParams, route: 'desserts' });
        const dessertsCard = desserts.data.desserts;        
        dessertContainer.insertAdjacentHTML('beforeend', dessertMarcup(dessertsCard));       
        const dessertsCount = dessertContainer.children.length;
        const totalItems = desserts.data.totalItems;
        if (dessertsCount >= totalItems || dessertsCard.length < 8) {
            loadMore.style.display = "none";            
        } else {
            loadMore.style.display = "block";
        };
        return dessertsCard;
    } catch (error) {
        iziToast.error({
            title: 'Увага',
            titleSize: '16',
            message: 'Помилка завантаження десертів',
            messageSize: '16',
            position: 'topRight',
            timeout: 5000
        });
        loadMore.style.display = "block";  
        return [];
    };
    
};

function dessertMarcup(dessertsCard) {
    return dessertsCard.map(({ _id, category: { name: categoryName }, description, image, name, price }) => `
        <li class="card-item" data-id="${_id}">
            <img class="card-img" src="${image}" alt="${name}" />
            <p class="card-category"> ${categoryName}</p>
            <h3 class="card-name"> ${name}</h3>
            <p class="card-descr"> ${description}</p>
            <div class="card-footer">
                <p class="card-price"><span class="price-value">${price}</span>грн</p>
                <button class="card-btn" type="button">
                    <svg width="24" height="24">
                        <use href="/images/icons.svg#icon-arrow_outward"></use>
                    </svg>
                </button>
            </div>         
        </li>
    `).join("");    
};

createDesserts();

function getCategoryName() {
    if (currentCategory === "all") {
        return 'десерти';
    };
    const currentOption = customOptionsContainer.querySelector(`[data-value="${currentCategory}"]`);
    if (currentOption) {
        return currentOption.textContent.trim().toLowerCase();
    };
};

loadMore.addEventListener('click', async() => {
    currentPage += 1;
    loadMore.style.display = "none";
    const dessertsCard = await createDesserts();
    if (dessertsCard.length < 8) {
        const categoryName = getCategoryName();
        iziToast.warning({
            title: 'Увага',
            titleSize: '16',
            message: `Ви завантажили всі ${categoryName}`,
            messageSize: '16',
            position: 'topRight',
            timeout: 5000
        });
    };
});

selectContainer.addEventListener('change', (event) => {
    currentCategory = event.target.value;
    const targetCategory = filterContainer.querySelector(`input[value="${currentCategory}"]`);
    if (targetCategory) {
        targetCategory.checked = true;
    }   
    const activeOption = customOptionsContainer.querySelector(`[data-value="${currentCategory}"]`);
    if (activeOption) {
        selectTriggerTitle.textContent = activeOption.textContent;
        customOptionsContainer.querySelectorAll('.custom-option').forEach(el => el.classList.remove('active'));
        activeOption.classList.add('active');
    }
    resetAndReload();
});

filterContainer.addEventListener('change', (event) => {
    if (event.target.classList.contains('dessert-btn')) {
        currentCategory = event.target.value;
        selectContainer.value = currentCategory;
        const activeOption = customOptionsContainer.querySelector(`[data-value="${currentCategory}"]`);
        if (activeOption) {
            selectTriggerTitle.textContent = activeOption.textContent;
            customOptionsContainer.querySelectorAll('.custom-option').forEach(el => el.classList.remove('active'));
            activeOption.classList.add('active');
        };
        resetAndReload();
    };
});

selectTrigger.addEventListener('click', (e) => {
    e.stopPropagation(); 
    customOptionsContainer.classList.toggle('visually-hidden');
    selectTrigger.classList.toggle('is-open');
});

customOptionsContainer.addEventListener('click', (event) => {
    const option = event.target.closest('.custom-option');
    if (!option) return;
    currentCategory = option.dataset.value;
    selectTriggerTitle.textContent = option.textContent;
    customOptionsContainer.querySelectorAll('.custom-option').forEach(el => el.classList.remove('active'));
    option.classList.add('active');
    selectContainer.value = currentCategory;
        const targetCategory = filterContainer.querySelector(`input[value="${currentCategory}"]`);
    if (targetCategory) {
        targetCategory.checked = true;
    }
        resetAndReload();
        customOptionsContainer.classList.add('visually-hidden');
});

document.addEventListener('click', () => {
    customOptionsContainer.classList.add('visually-hidden');
    selectTrigger.classList.remove('is-open');
});