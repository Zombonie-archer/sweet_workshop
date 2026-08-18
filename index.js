import{r as e}from"./assets/rolldown-runtime-hePW80VL.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./assets/vendor-D4pMnDuT.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=document.getElementById(`mobileMenu`),c=document.getElementById(`mobileMenuClose`),l=s.querySelectorAll(`a[href^='#'], a[data-scroll-top]`),u=768;function d(){s.classList.add(`is-open`),document.body.classList.add(`no-scroll`);let e=document.getElementById(`hamburger`);e&&e.setAttribute(`aria-expanded`,`true`),c.focus()}function f(){s.classList.remove(`is-open`),document.body.classList.remove(`no-scroll`);let e=document.getElementById(`hamburger`);e&&(e.setAttribute(`aria-expanded`,`false`),e.focus())}function p(){return s.classList.contains(`is-open`)}document.addEventListener(`click`,e=>{e.target.closest(`#hamburger`)&&(p()?f():d())}),c.addEventListener(`click`,f),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&p()&&f()}),l.forEach(e=>{e.addEventListener(`click`,()=>{p()&&f()})}),s.querySelectorAll(`a[href^='#']:not([data-scroll-top])`).forEach(e=>{let t=e.getAttribute(`href`);t===`#`||t.length<=1||e.addEventListener(`click`,e=>{let n=document.querySelector(t);n&&(e.preventDefault(),n.scrollIntoView({behavior:`smooth`,block:`start`}))})}),s.querySelectorAll(`[data-scroll-top]`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),window.scrollTo({top:0,behavior:`smooth`}),f()})}),window.addEventListener(`resize`,()=>{window.innerWidth>=u&&p()&&f()});var m=document.querySelector(`.hero-button`),ee=document.querySelector(`#feedback`);m.addEventListener(`click`,()=>{ee.scrollIntoView({behavior:`smooth`}),m.blur()});function h(){document.querySelector(`.global-loader-overlay`).classList.remove(`hidden`)}function g(){document.querySelector(`.global-loader-overlay`).classList.add(`hidden`)}var te=`https://deserts-store.b.goit.study/api/`;async function _({method:e=`get`,body:t={},route:n=``}){h();let r=te+n,a={};return e.toLowerCase()===`get`?a=await i.get(r,{params:t}):e.toLowerCase()===`post`&&(a=await i.post(r,t)),g(),a}var v=e(t(),1),y=`/sweet_workshop/assets/icons-Cqnh3VUO.svg`,b=document.querySelector(`.contact-backdrop`),x=b?b.querySelector(`.modal-btn`):document.querySelector(`.modal-btn`),S=document.querySelector(`.order-form`),C=document.querySelector(`.order-form input[name="name"]`),w=document.querySelector(`.order-form input[name="phone"]`),T=document.querySelector(`.order-form textarea[name="comment"]`),E=null;function D(e=null){E=e,b&&(b.classList.add(`is-open`),document.body.style.overflow=`hidden`)}function O(){b&&(b.classList.remove(`is-open`),document.body.style.overflow=``,k())}function k(){S&&S.querySelectorAll(`.order-wrapper.is-error`).forEach(e=>{e.classList.remove(`is-error`)})}function ne(e){e.code===`Escape`&&b&&b.classList.contains(`is-open`)&&O()}function re(e){e.target===e.currentTarget&&O()}async function A(e){e.preventDefault(),k();let t=C?C.value.trim():``,n=w?w.value.trim():``,r=T?T.value.trim():``,i=!0;if(t===``&&(C&&C.closest(`.order-wrapper`)?.classList.add(`is-error`),i=!1),n===``&&(w&&w.closest(`.order-wrapper`)?.classList.add(`is-error`),i=!1),r===``&&(T&&T.closest(`.order-wrapper`)?.classList.add(`is-error`),i=!1),!i){v.default.warning({title:`Увага!`,message:`Будь ласка, заповніть усі обов’язкові поля.`,position:`topRight`});return}let a={name:t,phone:n,comment:r,dessertId:E};try{await _({method:`post`,body:a,route:`orders`}),v.default.success({title:`Успішно!`,message:`Ваше замовлення прийнято!`,position:`topRight`}),S.reset(),O()}catch{g(),v.default.error({title:`Помилка!`,message:`Не вдалося надіслати замовлення. Спробуйте ще раз пізніше.`,position:`topRight`})}}x&&x.addEventListener(`click`,O),b&&b.addEventListener(`click`,re),document.addEventListener(`keydown`,ne),S&&S.addEventListener(`submit`,A);var j=document.querySelector(`.dessert-modal`),M=document.querySelector(`.desser-modal-wrapper`);async function N(e){try{let t=(await _({method:`get`,route:`desserts/${e}`})).data;return M.innerHTML=P(t),t}catch(e){console.log(e.message)}}function P(e){let{_id:t,rate:n,price:r,name:i,image:a,description:o,composition:s,category:{name:c}}=e,l=Number(n)||0,u=Math.floor(l),d=l%1>=.5,f=`
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
        <use href="${y}#icon-close"></use>
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
  `}j.addEventListener(`click`,e=>{let t=e.target.closest(`.modal-close-btn`),n=e.target===e.currentTarget,r=e.target.closest(`.order-btn`);if((t||n)&&(document.body.classList.remove(`no-scroll`),j.classList.remove(`modal-open`)),r){j.classList.remove(`modal-open`),document.body.classList.remove(`no-scroll`);let e=r.closest(`.dessert-modal-content`).dataset.id;D(e)}});var F=document.querySelector(`.dessert-filter`),I=document.querySelector(`.dessert-filter-select`),L=document.querySelector(`.dessert-select-trigger`),R=document.querySelector(`.dessert-select-title`),z=document.querySelector(`.dessert-custom-options`),B=document.querySelector(`.dessert-list`),V=document.querySelector(`.load-more`),H=`all`,U=1;F.innerHTML=`
    <label class="dessert-category-label">
        <input class="dessert-btn" type="radio" name="dessert-category" value="all" checked>
        <span class="dessert-name">Всі десерти</span>
    </label>
`,I.innerHTML=`
    <option class="select-item active" value="all">Всі десерти</option>
`,z.innerHTML=`
    <li class="custom-option active" data-value="all"><span>Всі десерти</span>  </li>
`;async function W(){try{let e=(await _({method:`get`,route:`categories`})).data;F.insertAdjacentHTML(`beforeend`,G(e)),I.insertAdjacentHTML(`beforeend`,K(e)),z.insertAdjacentHTML(`beforeend`,q(e))}catch{g(),v.default.error({title:`Увага`,titleSize:`16`,message:`Помилка завантаження категорій`,messageSize:`16`,position:`topRight`,timeout:5e3})}}function G(e){return e.map(({_id:e,name:t})=>`
        <label class="dessert-category-label">
            <input class="dessert-btn" type="radio" name="dessert-category" value="${e}">
            <span class="dessert-name">${t}</span>
        </label>    
    `).join(``)}function K(e){return e.map(({_id:e,name:t})=>`
        <option class="select-item" value="${e}">${t}</option>
    `).join(``)}function q(e){return e.map(({_id:e,name:t})=>`
        <li class="custom-option" data-value="${e}"><span>${t}</span></li>
    `).join(``)}W();function J(){U=1,B.innerHTML=``,Y()}async function Y(){try{let e={page:U,limit:8};H!==`all`&&(e.category=H);let t=await _({method:`get`,body:e,route:`desserts`}),n=t.data.desserts;return B.insertAdjacentHTML(`beforeend`,ie(n)),B.children.length>=t.data.totalItems||n.length<8?V.style.display=`none`:V.style.display=`block`,n}catch{return g(),v.default.error({title:`Увага`,titleSize:`16`,message:`Помилка завантаження десертів`,messageSize:`16`,position:`topRight`,timeout:5e3}),V.style.display=`block`,[]}}function ie(e){return e.map(({_id:e,category:{name:t},description:n,image:r,name:i,price:a})=>`
        <li class="card-item" data-id="${e}">
            <img class="card-img" src="${r}" alt="${i}" />
            <p class="card-category"> ${t}</p>
            <h3 class="card-name"> ${i}</h3>
            <p class="card-descr"> ${n}</p>
            <div class="card-footer">
                <p class="card-price"><span class="price-value">${a}</span> грн</p>
                <button class="card-btn" type="button">
                    <svg width="24" height="24">
                        <use href="${y}#icon-arrow_outward"></use>
                    </svg>
                </button>
            </div>         
        </li>
    `).join(``)}Y();function ae(){if(H===`all`)return`десерти`;let e=z.querySelector(`[data-value="${H}"]`);if(e)return e.textContent.trim().toLowerCase()}V.addEventListener(`click`,async()=>{if(U+=1,V.style.display=`none`,(await Y()).length<8){let e=ae();v.default.warning({title:`Увага`,titleSize:`16`,message:`Ви завантажили всі ${e}`,messageSize:`16`,position:`topRight`,timeout:5e3})}}),I.addEventListener(`change`,e=>{H=e.target.value;let t=F.querySelector(`input[value="${H}"]`);t&&(t.checked=!0);let n=z.querySelector(`[data-value="${H}"]`);n&&(R.textContent=n.textContent,z.querySelectorAll(`.custom-option`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`)),J()}),F.addEventListener(`change`,e=>{if(e.target.classList.contains(`dessert-btn`)){H=e.target.value,I.value=H;let t=z.querySelector(`[data-value="${H}"]`);t&&(R.textContent=t.textContent,z.querySelectorAll(`.custom-option`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`)),J()}}),L.addEventListener(`click`,e=>{e.stopPropagation(),z.classList.toggle(`visually-hidden`),L.classList.toggle(`is-open`)}),z.addEventListener(`click`,e=>{let t=e.target.closest(`.custom-option`);if(!t)return;H=t.dataset.value,R.textContent=t.textContent,z.querySelectorAll(`.custom-option`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),I.value=H;let n=F.querySelector(`input[value="${H}"]`);n&&(n.checked=!0),J(),z.classList.add(`visually-hidden`)}),document.addEventListener(`click`,()=>{z.classList.add(`visually-hidden`),L.classList.remove(`is-open`)}),B.addEventListener(`click`,e=>{let t=e.target.closest(`.card-btn`),n=document.querySelector(`.dessert-modal`);if(t&&n){document.body.classList.add(`no-scroll`),n.classList.add(`modal-open`);let e=t.closest(`.card-item`).dataset.id;N(e)}});var X=null;function Z(){window.innerWidth>=768&&!X&&(X=new n(`.aboutSwiper`,{modules:[a,r],slidesPerView:2,spaceBetween:24,loop:!1,pagination:{el:`.about-pagination`,clickable:!0},navigation:{nextEl:`.about-button-next`,prevEl:`.about-button-prev`}})),window.innerWidth<768&&X&&(X.destroy(!0,!0),X=null)}Z(),window.addEventListener(`resize`,Z),new(e(o(),1)).default(`.accordion-container`,{showMultiple:!1});var Q=document.querySelector(`#swiper-container`),oe=document.querySelector(`#feedbacks-wrapper`),se=document.querySelector(`.feedback-button-next`),ce=document.querySelector(`.feedback-button-prev`),le=document.querySelector(`#feedback-pagination`);function $(e){oe.innerHTML=e.slice(0,10).map(e=>`
        <div class="swiper-slide">
          <div class="feedback-card">
            <div class="custom-star-rating" style="--rating-percent: ${e.rate/5*100}%" aria-label="Оцінка: ${e.rate} з 5"></div>
            <p class="review-text">"${e.description||`Відгук відсутній`}"</p>
            <p class="reviewer-name"><b>${e.author||`Анонім`}</b></p>
          </div>          
        </div>
      `).join(``)}function ue(){return new n(`.feedback-swiper`,{modules:[a,r],slidesPerView:1,spaceBetween:24,speed:450,grabCursor:!0,breakpoints:{768:{slidesPerView:3},1100:{slidesPerView:3}},pagination:{el:le,clickable:!0},navigation:{prevEl:ce,nextEl:se}})}function de(){Q.style.display=`none`}function fe(){Q.style.display=`block`}async function pe(){try{de();let e=(await _({method:`get`,body:{},route:`feedbacks`})).data.feedbacks;$(e),fe(),ue()}catch(e){g(),v.default.show({title:`Не вдалося завантажити відгуки. Спробуйте пізніше.`,color:`white`,position:`topCenter`}),console.error(`Помилка завантаження відгуків:`,e)}}pe();
//# sourceMappingURL=index.js.map