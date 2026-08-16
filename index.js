import{r as e}from"./assets/rolldown-runtime-hePW80VL.js";import{n as t,t as n}from"./assets/vendor-DLaoNbSX.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function r(){document.querySelector(`.global-loader-overlay`).classList.remove(`hidden`)}function i(){document.querySelector(`.global-loader-overlay`).classList.add(`hidden`)}var a=`https://deserts-store.b.goit.study/api/`;async function o({method:e=`get`,body:n={},route:o=``}){r();let s=a+o,c={};return e.toLowerCase()===`get`?c=await t.get(s,{params:n}):e.toLowerCase()===`post`&&(c=await t.post(s,n)),i(),c}var s=e(n(),1),c=document.querySelector(`.dessert-filter`),l=document.querySelector(`.dessert-filter-select`),u=document.querySelector(`.dessert-select-trigger`),d=document.querySelector(`.dessert-select-title`),f=document.querySelector(`.dessert-custom-options`),p=document.querySelector(`.dessert-list`),m=document.querySelector(`.load-more`),h=`all`,g=1;c.innerHTML=`
    <label class="dessert-category-label">
        <input class="dessert-btn" type="radio" name="dessert-category" value="all" checked>
        <span class="dessert-name">Всі десерти</span>
    </label>
`,l.innerHTML=`
    <option class="select-item active" value="all">Всі десерти</option>
`,f.innerHTML=`
    <li class="custom-option active" data-value="all"><span>Всі десерти</span>  </li>
`;async function _(){try{let e=(await o({method:`get`,route:`categories`})).data;c.insertAdjacentHTML(`beforeend`,v(e)),l.insertAdjacentHTML(`beforeend`,y(e)),f.insertAdjacentHTML(`beforeend`,b(e))}catch{s.default.error({title:`Увага`,titleSize:`16`,message:`Помилка завантаження категорій`,messageSize:`16`,position:`topRight`,timeout:5e3})}}function v(e){return e.map(({_id:e,name:t})=>`
        <label class="dessert-category-label">
            <input class="dessert-btn" type="radio" name="dessert-category" value="${e}">
            <span class="dessert-name">${t}</span>
        </label>    
    `).join(``)}function y(e){return e.map(({_id:e,name:t})=>`
        <option class="select-item" value="${e}">${t}</option>
    `).join(``)}function b(e){return e.map(({_id:e,name:t})=>`
        <li class="custom-option" data-value="${e}"><span>${t}</span></li>
    `).join(``)}_();function x(){g=1,p.innerHTML=``,S()}async function S(){try{let e={page:g,limit:8};h!==`all`&&(e.category=h);let t=await o({method:`get`,body:e,route:`desserts`}),n=t.data.desserts;return p.insertAdjacentHTML(`beforeend`,C(n)),p.children.length>=t.data.totalItems||n.length<8?m.style.display=`none`:m.style.display=`block`,n}catch{return s.default.error({title:`Увага`,titleSize:`16`,message:`Помилка завантаження десертів`,messageSize:`16`,position:`topRight`,timeout:5e3}),m.style.display=`block`,[]}}function C(e){return e.map(({_id:e,category:{name:t},description:n,image:r,name:i,price:a})=>`
        <li class="card-item" data-id="${e}">
            <img class="card-img" src="${r}" alt="${i}" />
            <p class="card-category"> ${t}</p>
            <h3 class="card-name"> ${i}</h3>
            <p class="card-descr"> ${n}</p>
            <div class="card-footer">
                <p class="card-price"><span class="price-value">${a}</span>грн</p>
                <button class="card-btn" type="button">
                    <svg width="24" height="24">
                        <use href="images/icons.svg#icon-arrow_outward"></use>
                    </svg>
                </button>
            </div>         
        </li>
    `).join(``)}S();function w(){if(h===`all`)return`десерти`;let e=f.querySelector(`[data-value="${h}"]`);if(e)return e.textContent.trim().toLowerCase()}m.addEventListener(`click`,async()=>{if(g+=1,m.style.display=`none`,(await S()).length<8){let e=w();s.default.warning({title:`Увага`,titleSize:`16`,message:`Ви завантажили всі ${e}`,messageSize:`16`,position:`topRight`,timeout:5e3})}}),l.addEventListener(`change`,e=>{h=e.target.value;let t=c.querySelector(`input[value="${h}"]`);t&&(t.checked=!0);let n=f.querySelector(`[data-value="${h}"]`);n&&(d.textContent=n.textContent,f.querySelectorAll(`.custom-option`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`)),x()}),c.addEventListener(`change`,e=>{if(e.target.classList.contains(`dessert-btn`)){h=e.target.value,l.value=h;let t=f.querySelector(`[data-value="${h}"]`);t&&(d.textContent=t.textContent,f.querySelectorAll(`.custom-option`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`)),x()}}),u.addEventListener(`click`,e=>{e.stopPropagation(),f.classList.toggle(`visually-hidden`),u.classList.toggle(`is-open`)}),f.addEventListener(`click`,e=>{let t=e.target.closest(`.custom-option`);if(!t)return;h=t.dataset.value,d.textContent=t.textContent,f.querySelectorAll(`.custom-option`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),l.value=h;let n=c.querySelector(`input[value="${h}"]`);n&&(n.checked=!0),x(),f.classList.add(`visually-hidden`)}),document.addEventListener(`click`,()=>{f.classList.add(`visually-hidden`),u.classList.remove(`is-open`)});
//# sourceMappingURL=index.js.map