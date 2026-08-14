import request from './axios.js';

const filterContainer = document.querySelector('.dessert-filter');
const dessertContainer = document.querySelector('.dessert-list');
let currentPage = 1;

filterContainer.innerHTML = `
    <label class="dessert-category-label">
        <input class="dessert-btn" type="radio" name="dessert-category" value="all" checked>
        <span class="dessert-name">Всі десерти</span>
    </label>
`;

async function dessertMarcup() {
    try {
        const filters = await request({ method: 'get', route: 'categories' });
        const categories = filters.data;

        const desserts = await request({ method: 'get', body: { page: currentPage, limit: 8 }, route: 'desserts' });
        const dessertsCard = desserts.data.desserts;
        console.log(dessertsCard);
        
        filterContainer.insertAdjacentHTML('beforeend', createCategory(categories))
        dessertContainer.insertAdjacentHTML('beforeend', createDesserts(dessertsCard))
    } catch (error) {
        console.log(error.message);
        
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

function createDesserts(dessertsCard) {
    return dessertsCard.map(({ _id, category: { name: categoryName }, description, image, name, price }) => `
        <li class="card-item" data-id="${_id}">
            <img class="card-img" src="${image}" alt="${name}" />
            <p class="card-category"> ${categoryName}</p>
            <h3 class="card-name"> ${name}</h3>
            <p class="crad-descr"> ${description}</p>
            <div class="card-footer">
                <p class="card-price"><span class="price-value">${price}</span>грн</p>
                <button class="card-btn" type="button">кнопка</button>
            </div>
            
        </li>
    `).join("");
    
}

dessertMarcup();

