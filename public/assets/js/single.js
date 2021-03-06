'use strict';

var itemBox = document.querySelectorAll('.page_single'), // блок каждого товара
    cartCont = document.getElementById('cart_content');// блок вывода данных корзины
// Функция кроссбраузерной установка обработчика событий
function addEvent(elem, type, handler){
    if(!elem) {
        return;
    }
    if(elem.addEventListener){
        elem.addEventListener(type, handler, false);
    } else {
        elem.attachEvent('on'+type, function(){ handler.call( elem ); });
    }
    return false;
}
// Получаем данные из LocalStorage
function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}

// Записываем данные в LocalStorage
function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}

// Добавляем товар в корзину
function addToCart(e){
    this.disabled = true; // блокируем кнопку на время операции с корзиной
    var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
     parentBox = itemBox[0], // родительский элемент кнопки "Добавить в корзину"
        itemId = this.getAttribute('data-id'), // ID товара
        // itemImg = parentBox.querySelectorAll('.demo')[0],
        itemTitle = parentBox.querySelectorAll('.item_name')[0].innerText,// название товара
        itemPrice = parentBox.querySelectorAll('.item_price')[0].innerText;// стоимость товара

    if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
        cartData[itemId][2] += 1;
    } else { // если товара в корзине еще нет, то добавляем в объект
        cartData[itemId] = [itemTitle, itemPrice, 1];
    }
    if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
        this.disabled = false; // разблокируем кнопку после обновления LS
    }
    return false;
}

// Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
for(var i = 0; i < itemBox.length; i++){
    addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}

function minusCartData() {
    const target = this.event.currentTarget;
    let minus = target.nextSibling;

    minus.innerHTML = minus.innerHTML - 1;

    if (minus.innerHTML == 0) {
        deleteCartData()
    }
    localStorage.setItem('cart', JSON.stringify());
}

function plusCartData() {
    const target = this.event.currentTarget;
    let plus = target.previousSibling;

    plus.innerHTML = +(plus.innerHTML) + 1;
    localStorage.setItem('cart', JSON.stringify());
}

function deleteCartData(){
    const target = this.event.currentTarget;
    const parent = target.parentNode;
    const itemElem = parent.parentNode;
    itemElem.style.display = 'none';

    console.log('OK');
    localStorage.setItem('cart', JSON.stringify());
}

// Открываем корзину со списком добавленных товаров
function openCart(){
      var cartData = getCartData(),
          items,// вытаскиваем все данные корзины
       totalItems = '';

    // если что-то в корзине уже есть, начинаем формировать данные для вывода
    if(cartData !== null){
        totalItems = '<table class="shopping_list"><tr><th>Description</th><th>Price</th><th>Count</th><th>Ammount</th><th>Remove</th></tr>';
        for(items in cartData){
            totalItems += '<tr>';
            for(var i = 0; i < cartData[items].length; i++){
                totalItems += '<td>' + cartData[items][0] + '</td>';
                var newPrice = cartData[items][1].split(' ');
                totalItems += '<td>'  + cartData[items][1] + '</td>';
                totalItems += '<td>' + '<button class="minusItem" id="minusItem" data-art = "' + items + '" onclick="minusCartData()">-</button>'
                    + '<div class="count">' + cartData[items][2] + '</div>' + '<button class="plusItem" id="plusItem" data-art = "' + items + '"  onclick="plusCartData()">+</button>' + '</td>';
                totalItems += '<td>'  + '<div class="ammount">' + (newPrice[1] * cartData[items][2]) + newPrice[0] + '</div>' + '</td>';
                totalItems += '<td><button class="deleteItem" id="deleteItem" data-art = "' + items + '"  onclick="deleteCartData()">X</button></td>';
                break;
            }
            console.log(newPrice);
            console.log(newPrice[1]);
            // totalItems += '<td>' + ' ' + '</td>';
            // totalItems += '<td><button class="deleteItem">X</button></td>';
            totalItems += '</tr>';}
        totalItems += '</table>';
        cartCont.innerHTML = totalItems;
    } else {
        // если в корзине пусто, то сигнализируем об этом
        cartCont.innerHTML = 'В корзине пусто!';
    }

    return false;
}

// addEvent(document.getElementById('plusItem'), 'click', function (e) {
//     var articul = $(this).attr('data-art');
//     cartData[articul] += 1;// cartData[articul]++;
//     // openCart();
//     saveCartToLS();// сохранение корзины в LocalStorage
// });
//
//
// addEvent(document.getElementById('minusItem'), 'click', function (e) {
//     var articul = $(this).attr('data-art');
//     cartData[articul] -= 1;//
//     if(cartData[articul] > 1) {
//         cartData[articul]--;
//     } else {
//         delete cartData[articul];
//     }
//     saveCartToLS();//сохранение корзины в LocalStorage
// });
//
// addEvent(document.getElementById('deleteItem'), 'click', function (e) {
//     var articul = $(this).attr('data-art');
//     delete cartData[articul];
//     saveCartToLS();//сохранение корзины в LocalStorage
// });

function showDelivery() {
    var orderData = document.getElementById('data_order');// блок вывода формы подтверждения заказа
    orderData.style.display = 'block';
}

/* Оформить заказ */
addEvent(document.getElementById('checkout'), 'click', showDelivery);
/* Очистить корзину */
addEvent(document.getElementById('clear_cart'), 'click', function(e){
    localStorage.removeItem('cart');
    cartCont.innerHTML = 'Корзина очищена';
});





