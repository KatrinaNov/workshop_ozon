'use strict';
//чекбокс
const checkbox = document.querySelectorAll('filter-check_checkbox');
checkbox.forEach((elem)=>{
    elem.addEventListener('change', function(){
        if (this.checked){
           this.nextElementSibling.classList.add('checked');
          
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});
//end checkbox
// корзина
const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');

//показать корзину
btnCart.addEventListener('click', ()=>{
    modalCart.style.display='flex';
    document.body.style.overflow = 'hidden';
});

//скрыть корзину
closeBtn.addEventListener('click', ()=>{
    modalCart.style.display='none';
    document.body.style.overflow = '';
});
//end корзина

// работа с товаром
const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty =document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter'); 
cards.forEach((card)=>{
    const btn = card.querySelector('button');
    btn.addEventListener('click', ()=>{
        //копируем содержимое карточки
        const cardClone = card.cloneNode(true);
        //вставляем в корзину
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
    });
});
// показываем количество товаров в корзине
function showData(){
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
    console.log(cardsCart.length);
}
// end работы с товаром