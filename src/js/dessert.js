import request from './axios.js';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const filterContainer = document.querySelector('.dessert-filter');
const dessertContainer = document.querySelector('.dessert-list');
const loadMore = document.querySelector('.load-more');
let currentPage = 1;

filterContainer.innerHTML = `
    <label class="dessert-category-label">
        <input class="dessert-btn" type="radio" name="dessert-category" value="all" checked>
        <span class="dessert-name">Всі десерти</span>
    </label>
`;

async function categoryMarcup() {
    try {
        const filters = await request({ method: 'get', route: 'categories' });
        const categories = filters.data;

        filterContainer.insertAdjacentHTML('beforeend', createCategory(categories))
    } catch (error) {
        console.log("Error category load", error.message);
    }
};
function createCategory(categories) {
    return categories.map(({ name }) => `
        <label class="dessert-category-label">
            <input class="dessert-btn" type="radio" name="dessert-category" value="${name}">
            <span class="dessert-name">${name}</span>
        </label>
    
    `).join("");
};
categoryMarcup();

async function dessertMarcup() {
    try {
        const desserts = await request({ method: 'get', body: { page: currentPage, limit: 8 }, route: 'desserts' });
        const dessertsCard = desserts.data.desserts;
        
        dessertContainer.insertAdjacentHTML('beforeend', createDesserts(dessertsCard));
       
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

function createDesserts(dessertsCard) {
    return dessertsCard.map(({ _id, category: { name: categoryName }, description, image, name, price }) => `
        <li class="card-item" data-id="${_id}">
            <img class="card-img" src="${image}" alt="${name}" />
            <p class="card-category"> ${categoryName}</p>
            <h3 class="card-name"> ${name}</h3>
            <p class="crad-descr"> ${description}</p>
            <div class="card-footer">
                <p class="card-price"><span class="price-value">${price}</span>грн</p>
                <button class="card-btn" type="button"></button>
            </div>
            
        </li>
    `).join("");
    
}

dessertMarcup();

loadMore.addEventListener('click', () => {
    currentPage += 1;
    loadMore.style.display = "none";
    dessertMarcup();

})

