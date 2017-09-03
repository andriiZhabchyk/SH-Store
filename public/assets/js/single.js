'use strict';

let itemBox = document.querySelectorAll('.page_single'), // блок каждого товара
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

// Открываем корзину со списком добавленных товаров
function openCart(e){
      var cartData = getCartData(),
          items,// вытаскиваем все данные корзины
       totalItems = '';

    function minusCartData() {
        cartData[items][2] -= 1;
    }

    function plusCartData() {
        cartData[items][2] += 1;
    }

    function deleteCartData(){
        localStorage.removeItem('cart');
        cartCont.innerHTML = 'Корзина очищена';
    }

    // если что-то в корзине уже есть, начинаем формировать данные для вывода
    if(cartData !== null){
        totalItems = '<table class="shopping_list"><tr><th>Description</th><th>Price</th><th>Count</th><th>Ammount</th><th>Remove</th></tr>';
        for(items in cartData){
            totalItems += '<tr>';

            for(var i = 0; i < cartData[items].length; i++){
                totalItems += '<td>' + cartData[items][0] + '</td>';
                totalItems += '<td>' + cartData[items][1] + '</td>';
                totalItems += '<td>' + '<button class="minusItem" id="minusItem" onclick="minusCartData()">-</button>'
                    + cartData[items][2] + '<button class="plusItem" id="plusItem" onclick="plusCartData()">+</button>' + '</td>';
                totalItems += '<td>' + '<div class="ammount"></div>' + '</td>';
                totalItems += '<td><button class="deleteItem" id="deleteItem" onclick="deleteCartData()">X</button></td>';
                break;
            }

            console.log(cartData[items][2]);
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


function showDelivery() {
    var orderData = document.getElementById('data_order');// блок вывода формы подтверждения заказа
    orderData.style.display = 'block';
}

/* Оформить заказ */
addEvent(document.getElementById('checkout'), 'click', showDelivery);
/* Очистить корзину */
addEvent(document.getElementById('deleteItem'), 'click', function(e){
    localStorage.removeItem('cart');
    cartCont.innerHTML = 'Корзина очищена';
});





