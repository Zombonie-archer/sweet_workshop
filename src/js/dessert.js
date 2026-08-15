import request from './axios.js';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const filterContainer = document.querySelector('.dessert-filter');
const selectContainer = document.querySelector('.dessert-filter-select');

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
    <option class="select-item" value="all">Всі десерти</option>
`;


async function createCategory() {
    try {
        const filters = await request({ method: 'get', route: 'categories' });
        const categories = filters.data;

        filterContainer.insertAdjacentHTML('beforeend', categoryMarcup(categories))
        selectContainer.insertAdjacentHTML('beforeend',selectorMarcup(categories));
    } catch (error) {
        console.log("Error category load", error.message);
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
}
createCategory();


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
            iziToast.warning({
                title: 'Увага',
                titleSize: '16',
                message: 'Ви завантажили всі тістечка',
                messageSize: '16',
                position: 'topRight',
                timeout: 5000
            })
        }else {
            loadMore.style.display = "block";
        }
    } catch (error) {
        console.log(error.message);
        loadMore.style.display = "block";
        
    }
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
                <button class="card-btn" type="button"></button>
            </div>
            
        </li>
    `).join("");
    
}

createDesserts();

loadMore.addEventListener('click', () => {
    currentPage += 1;
    loadMore.style.display = "none";
    createDesserts();

});

selectContainer.addEventListener('change', (event) => {
    currentCategory = event.target.value;
    currentPage = 1;                      
    dessertContainer.innerHTML = '';  

    const targetCategory = filterContainer.querySelector(`input[value="${currentCategory}"]`);
    if (targetCategory) {
        targetCategory.checked = true;
    }

    createDesserts(); 
});

filterContainer.addEventListener('change', (event) => {
    if (event.target.classList.contains('dessert-btn')) {
        currentCategory = event.target.value; 
        currentPage = 1;                      
        dessertContainer.innerHTML = '';      
        selectContainer.value = currentCategory; 
        createDesserts();
    }
});

