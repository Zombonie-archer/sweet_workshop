import{r as e}from"./assets/rolldown-runtime-hePW80VL.js";import{n as t,t as n}from"./assets/vendor-DLaoNbSX.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function r(){document.querySelector(`.global-loader-overlay`).classList.remove(`hidden`)}function i(){document.querySelector(`.global-loader-overlay`).classList.add(`hidden`)}var a=`https://deserts-store.b.goit.study/api/`;async function o({method:e=`get`,body:n={},route:o=``}){r();let s=a+o,c={};return e.toLowerCase()===`get`?c=await t.get(s,{params:n}):e.toLowerCase()===`post`&&(c=await t.post(s,n)),i(),c}var s=e(n(),1),c=`/sweet_workshop/assets/icons-BmBPcrae.svg`,l=document.querySelector(`.dessert-filter`),u=document.querySelector(`.dessert-filter-select`),d=document.querySelector(`.dessert-select-trigger`),f=document.querySelector(`.dessert-select-title`),p=document.querySelector(`.dessert-custom-options`),m=document.querySelector(`.dessert-list`),h=document.querySelector(`.load-more`),g=`all`,_=1;l.innerHTML=`
    <label class="dessert-category-label">
        <input class="dessert-btn" type="radio" name="dessert-category" value="all" checked>
        <span class="dessert-name">Всі десерти</span>
    </label>
`,u.innerHTML=`
    <option class="select-item active" value="all">Всі десерти</option>
`,p.innerHTML=`
    <li class="custom-option active" data-value="all"><span>Всі десерти</span>  </li>
`;async function v(){try{let e=(await o({method:`get`,route:`categories`})).data;l.insertAdjacentHTML(`beforeend`,y(e)),u.insertAdjacentHTML(`beforeend`,b(e)),p.insertAdjacentHTML(`beforeend`,x(e))}catch{s.default.error({title:`Увага`,titleSize:`16`,message:`Помилка завантаження категорій`,messageSize:`16`,position:`topRight`,timeout:5e3})}}function y(e){return e.map(({_id:e,name:t})=>`
        <label class="dessert-category-label">
            <input class="dessert-btn" type="radio" name="dessert-category" value="${e}">
            <span class="dessert-name">${t}</span>
        </label>    
    `).join(``)}function b(e){return e.map(({_id:e,name:t})=>`
        <option class="select-item" value="${e}">${t}</option>
    `).join(``)}function x(e){return e.map(({_id:e,name:t})=>`
        <li class="custom-option" data-value="${e}"><span>${t}</span></li>
    `).join(``)}v();function S(){_=1,m.innerHTML=``,C()}async function C(){try{let e={page:_,limit:8};g!==`all`&&(e.category=g);let t=await o({method:`get`,body:e,route:`desserts`}),n=t.data.desserts;return m.insertAdjacentHTML(`beforeend`,w(n)),m.children.length>=t.data.totalItems||n.length<8?h.style.display=`none`:h.style.display=`block`,n}catch{return s.default.error({title:`Увага`,titleSize:`16`,message:`Помилка завантаження десертів`,messageSize:`16`,position:`topRight`,timeout:5e3}),h.style.display=`block`,[]}}function w(e){return e.map(({_id:e,category:{name:t},description:n,image:r,name:i,price:a})=>`
        <li class="card-item" data-id="${e}">
            <img class="card-img" src="${r}" alt="${i}" />
            <p class="card-category"> ${t}</p>
            <h3 class="card-name"> ${i}</h3>
            <p class="card-descr"> ${n}</p>
            <div class="card-footer">
                <p class="card-price"><span class="price-value">${a}</span>грн</p>
                <button class="card-btn" type="button">
                    <svg width="24" height="24">
                        <use href="${c}#icon-arrow_outward"></use>
                    </svg>
                </button>
            </div>         
        </li>
    `).join(``)}C();function T(){if(g===`all`)return`десерти`;let e=p.querySelector(`[data-value="${g}"]`);if(e)return e.textContent.trim().toLowerCase()}h.addEventListener(`click`,async()=>{if(_+=1,h.style.display=`none`,(await C()).length<8){let e=T();s.default.warning({title:`Увага`,titleSize:`16`,message:`Ви завантажили всі ${e}`,messageSize:`16`,position:`topRight`,timeout:5e3})}}),u.addEventListener(`change`,e=>{g=e.target.value;let t=l.querySelector(`input[value="${g}"]`);t&&(t.checked=!0);let n=p.querySelector(`[data-value="${g}"]`);n&&(f.textContent=n.textContent,p.querySelectorAll(`.custom-option`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`)),S()}),l.addEventListener(`change`,e=>{if(e.target.classList.contains(`dessert-btn`)){g=e.target.value,u.value=g;let t=p.querySelector(`[data-value="${g}"]`);t&&(f.textContent=t.textContent,p.querySelectorAll(`.custom-option`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`)),S()}}),d.addEventListener(`click`,e=>{e.stopPropagation(),p.classList.toggle(`visually-hidden`),d.classList.toggle(`is-open`)}),p.addEventListener(`click`,e=>{let t=e.target.closest(`.custom-option`);if(!t)return;g=t.dataset.value,f.textContent=t.textContent,p.querySelectorAll(`.custom-option`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),u.value=g;let n=l.querySelector(`input[value="${g}"]`);n&&(n.checked=!0),S(),p.classList.add(`visually-hidden`)}),document.addEventListener(`click`,()=>{p.classList.add(`visually-hidden`),d.classList.remove(`is-open`)});
//# sourceMappingURL=index.js.map