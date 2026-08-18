import{r as e}from"./assets/rolldown-runtime-hePW80VL.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./assets/vendor-D4pMnDuT.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=document.getElementById(`mobileMenu`),c=document.getElementById(`mobileMenuClose`),l=s.querySelectorAll(`a[href^='#'], a[data-scroll-top]`),u=768;function d(){s.classList.add(`is-open`),document.body.classList.add(`no-scroll`);let e=document.getElementById(`hamburger`);e&&e.setAttribute(`aria-expanded`,`true`),c.focus()}function f(){s.classList.remove(`is-open`),document.body.classList.remove(`no-scroll`);let e=document.getElementById(`hamburger`);e&&(e.setAttribute(`aria-expanded`,`false`),e.focus())}function p(){return s.classList.contains(`is-open`)}document.addEventListener(`click`,e=>{e.target.closest(`#hamburger`)&&(p()?f():d())}),c.addEventListener(`click`,f),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&p()&&f()}),l.forEach(e=>{e.addEventListener(`click`,()=>{p()&&f()})}),s.querySelectorAll(`a[href^='#']:not([data-scroll-top])`).forEach(e=>{let t=e.getAttribute(`href`);t===`#`||t.length<=1||e.addEventListener(`click`,e=>{let n=document.querySelector(t);n&&(e.preventDefault(),n.scrollIntoView({behavior:`smooth`,block:`start`}))})}),s.querySelectorAll(`[data-scroll-top]`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),window.scrollTo({top:0,behavior:`smooth`}),f()})}),window.addEventListener(`resize`,()=>{window.innerWidth>=u&&p()&&f()});var m=document.querySelector(`.hero-button`),h=document.querySelector(`#feedback`);m.addEventListener(`click`,()=>{h.scrollIntoView({behavior:`smooth`}),m.blur()});function g(){document.querySelector(`.global-loader-overlay`).classList.remove(`hidden`)}function _(){document.querySelector(`.global-loader-overlay`).classList.add(`hidden`)}var ee=`https://deserts-store.b.goit.study/api/`;async function v({method:e=`get`,body:t={},route:n=``}){g();let r=ee+n,a={};return e.toLowerCase()===`get`?a=await i.get(r,{params:t}):e.toLowerCase()===`post`&&(a=await i.post(r,t)),_(),a}var y=e(t(),1),b=`/sweet_workshop/assets/icons-Cqnh3VUO.svg`,x=document.querySelector(`.backdrop`),S=document.querySelector(`.modal-btn`),C=document.querySelector(`.order-form`),w=document.querySelector(`.order-form input[name="name"]`),T=document.querySelector(`.order-form input[name="phone"]`),E=document.querySelector(`.order-form textarea[name="comment"]`),D=null;function te(e){D=e,x&&x.classList.add(`is-open`)}function O(){x&&(x.classList.remove(`is-open`),k())}function k(){C&&C.querySelectorAll(`.order-wrapper.is-error`).forEach(e=>{e.classList.remove(`is-error`)})}function A(e){e.code===`Escape`&&x&&x.classList.contains(`is-open`)&&O()}function j(e){e.target===e.currentTarget&&O()}function M(e){e.preventDefault(),k();let t=w?w.value.trim():``,n=T?T.value.trim():``,r=E?E.value.trim():``,i=!0;if(t===``&&(w&&w.closest(`.order-wrapper`)?.classList.add(`is-error`),i=!1),n===``&&(T&&T.closest(`.order-wrapper`)?.classList.add(`is-error`),i=!1),!i){y.default.warning({title:`Увага!`,message:`Будь ласка, заповніть усі обов’язкові поля.`,position:`topRight`});return}fetch(`https://your-api-domain.com/orders`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:t,phone:n,comment:r,dessertId:D})}).then(e=>{if(!e.ok)throw Error(e.statusText);return e.json()}).then(e=>{y.default.success({title:`Успішно!`,message:`Ваше замовлення прийнято!`,position:`topRight`}),C.reset(),O()}).catch(e=>{y.default.error({title:`Помилка!`,message:`Не вдалося відправити замовлення. Перевірте введені дані.`,position:`topRight`})})}S&&S.addEventListener(`click`,O),x&&x.addEventListener(`click`,j),document.addEventListener(`keydown`,A),C&&C.addEventListener(`submit`,M);var N=document.querySelector(`.dessert-modal`),P=document.querySelector(`.desser-modal-wrapper`);async function F(e){try{let t=(await v({method:`get`,route:`desserts/${e}`})).data;return P.innerHTML=I(t),t}catch(e){console.log(e.message)}}function I(e){let{_id:t,rate:n,price:r,name:i,image:a,description:o,composition:s,category:{name:c}}=e,l=Number(n)||0,u=Math.floor(l),d=l%1>=.5,f=`
    <div class="star">
      <!-- Пустая звезда: контур черный, внутри прозрачно -->
      <svg class="star-empty" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <!-- Половинка звезды: с обводкой того же размера -->
      <svg class="star-half" viewBox="0 0 24 24" width="20" height="20">
        <defs>
          <linearGradient id="half-star-grad">
            <stop offset="50%" stop-color="currentColor"/>
            <stop offset="50%" stop-color="transparent"/>
          </linearGradient>
        </defs>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half-star-grad)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <!-- Закрашенная звезда: с ТОЙ ЖЕ ОБВОДКОЙ для одинакового размера -->
      <svg class="star-filled" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </div>
  `;return`
    <button class="modal-close-btn" type="button">
      <svg width="24" height="24">
        <use href="${b}#icon-close"></use>
      </svg>
    </button>
    <div class="dessert-modal-content" data-id="${t}">
      <div class="dessert-modal-item dessert-modal-image">
        <img class="dessert-modal-img" src="${a}" alt="${i}" />
      </div>
      <div class="dessert-modal-item dessert-modal-info">
        <h2 class="dessert-modal-title">${i}</h2>
        <p class="dessert-modal-price"><span class="modal-price-value">${r}</span> грн</p>
        <div class="rating medium star-svg value-${u} ${d?`half`:``} label-right">
          <div class="star-container">
            ${f}
            ${f}
            ${f}
            ${f}
            ${f}
          </div>
          <span class="label-value"></span>
        </div>
        <p class="dessert-modal-descr">${o}</p>
        <p class="dessert-modal-compos"><span>Склад:</span> ${s}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    </div>
  `}N.addEventListener(`click`,e=>{let t=e.target.closest(`.modal-close-btn`),n=e.target===e.currentTarget,r=e.target.closest(`.order-btn`);if((t||n)&&(document.body.classList.remove(`no-scroll`),N.classList.remove(`modal-open`)),r){N.classList.remove(`modal-open`),document.body.classList.remove(`no-scroll`);let e=r.closest(`.dessert-modal-content`).dataset.id;te(e)}});var L=document.querySelector(`.dessert-filter`),R=document.querySelector(`.dessert-filter-select`),z=document.querySelector(`.dessert-select-trigger`),B=document.querySelector(`.dessert-select-title`),V=document.querySelector(`.dessert-custom-options`),H=document.querySelector(`.dessert-list`),U=document.querySelector(`.load-more`),W=`all`,G=1;L.innerHTML=`
    <label class="dessert-category-label">
        <input class="dessert-btn" type="radio" name="dessert-category" value="all" checked>
        <span class="dessert-name">Всі десерти</span>
    </label>
`,R.innerHTML=`
    <option class="select-item active" value="all">Всі десерти</option>
`,V.innerHTML=`
    <li class="custom-option active" data-value="all"><span>Всі десерти</span>  </li>
`;async function K(){try{let e=(await v({method:`get`,route:`categories`})).data;L.insertAdjacentHTML(`beforeend`,q(e)),R.insertAdjacentHTML(`beforeend`,J(e)),V.insertAdjacentHTML(`beforeend`,Y(e))}catch{_(),y.default.error({title:`Увага`,titleSize:`16`,message:`Помилка завантаження категорій`,messageSize:`16`,position:`topRight`,timeout:5e3})}}function q(e){return e.map(({_id:e,name:t})=>`
        <label class="dessert-category-label">
            <input class="dessert-btn" type="radio" name="dessert-category" value="${e}">
            <span class="dessert-name">${t}</span>
        </label>    
    `).join(``)}function J(e){return e.map(({_id:e,name:t})=>`
        <option class="select-item" value="${e}">${t}</option>
    `).join(``)}function Y(e){return e.map(({_id:e,name:t})=>`
        <li class="custom-option" data-value="${e}"><span>${t}</span></li>
    `).join(``)}K();function X(){G=1,H.innerHTML=``,Z()}async function Z(){try{let e={page:G,limit:8};W!==`all`&&(e.category=W);let t=await v({method:`get`,body:e,route:`desserts`}),n=t.data.desserts;return H.insertAdjacentHTML(`beforeend`,ne(n)),H.children.length>=t.data.totalItems||n.length<8?U.style.display=`none`:U.style.display=`block`,n}catch{return _(),y.default.error({title:`Увага`,titleSize:`16`,message:`Помилка завантаження десертів`,messageSize:`16`,position:`topRight`,timeout:5e3}),U.style.display=`block`,[]}}function ne(e){return e.map(({_id:e,category:{name:t},description:n,image:r,name:i,price:a})=>`
        <li class="card-item" data-id="${e}">
            <img class="card-img" src="${r}" alt="${i}" />
            <p class="card-category"> ${t}</p>
            <h3 class="card-name"> ${i}</h3>
            <p class="card-descr"> ${n}</p>
            <div class="card-footer">
                <p class="card-price"><span class="price-value">${a}</span> грн</p>
                <button class="card-btn" type="button">
                    <svg width="24" height="24">
                        <use href="${b}#icon-arrow_outward"></use>
                    </svg>
                </button>
            </div>         
        </li>
    `).join(``)}Z();function re(){if(W===`all`)return`десерти`;let e=V.querySelector(`[data-value="${W}"]`);if(e)return e.textContent.trim().toLowerCase()}U.addEventListener(`click`,async()=>{if(G+=1,U.style.display=`none`,(await Z()).length<8){let e=re();y.default.warning({title:`Увага`,titleSize:`16`,message:`Ви завантажили всі ${e}`,messageSize:`16`,position:`topRight`,timeout:5e3})}}),R.addEventListener(`change`,e=>{W=e.target.value;let t=L.querySelector(`input[value="${W}"]`);t&&(t.checked=!0);let n=V.querySelector(`[data-value="${W}"]`);n&&(B.textContent=n.textContent,V.querySelectorAll(`.custom-option`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`)),X()}),L.addEventListener(`change`,e=>{if(e.target.classList.contains(`dessert-btn`)){W=e.target.value,R.value=W;let t=V.querySelector(`[data-value="${W}"]`);t&&(B.textContent=t.textContent,V.querySelectorAll(`.custom-option`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`)),X()}}),z.addEventListener(`click`,e=>{e.stopPropagation(),V.classList.toggle(`visually-hidden`),z.classList.toggle(`is-open`)}),V.addEventListener(`click`,e=>{let t=e.target.closest(`.custom-option`);if(!t)return;W=t.dataset.value,B.textContent=t.textContent,V.querySelectorAll(`.custom-option`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),R.value=W;let n=L.querySelector(`input[value="${W}"]`);n&&(n.checked=!0),X(),V.classList.add(`visually-hidden`)}),document.addEventListener(`click`,()=>{V.classList.add(`visually-hidden`),z.classList.remove(`is-open`)}),H.addEventListener(`click`,e=>{let t=e.target.closest(`.card-btn`),n=document.querySelector(`.dessert-modal`);if(t&&n){document.body.classList.add(`no-scroll`),n.classList.add(`modal-open`);let e=t.closest(`.card-item`).dataset.id;F(e)}});var Q=null;function $(){window.innerWidth>=768&&!Q&&(Q=new n(`.aboutSwiper`,{modules:[a,r],slidesPerView:2,spaceBetween:24,loop:!1,pagination:{el:`.about-pagination`,clickable:!0},navigation:{nextEl:`.about-button-next`,prevEl:`.about-button-prev`}})),window.innerWidth<768&&Q&&(Q.destroy(!0,!0),Q=null)}$(),window.addEventListener(`resize`,$),new(e(o(),1)).default(`.accordion-container`,{showMultiple:!1});
//# sourceMappingURL=index.js.map