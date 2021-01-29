/* Урок 5 Домашнее задание

1.	Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами
от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

/*2.	Сделать генерацию корзины динамической: верстка корзины не должна находиться в
HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная
на базе JS:
a.	Пустая корзина должна выводить строку «Корзина пуста»;
b.	Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/

// function my_initiation() {
// 
// const $basket = document.querySelector('#basket');
// 
// const basket = [
// 
// ];
// 
// function product(title, price, quantity = 1) {
// this.title = title;
// this.price = price;
// this.quantity = quantity;
// }
// 
// function basketValue(arrayOfProducts) {
// return arrayOfProducts.reduce(function (acc, product) {
// return acc + (product.price * product.quantity);
// }, 0);
// }
// 
// function basketQuantity(arrayOfProducts) {
// return arrayOfProducts.reduce(function (acc, product) {
// return acc + product.quantity;
// }, 0);
// }
// 
// function drawBasket() {
// const p = document.createElement('p');
// p.className = 'basketText';
// if (basket.length !== 0) {
// p.textContent = 'в корзине ' + basketQuantity(basket) + ' товаров, на сумму ' +
// basketValue(basket) + ' рублей';
// } else {
// p.textContent = 'корзина пуста';
// }
// 
// $basket.appendChild(p);
// }
// 
// basket.push(new product('nokia', 100, 4));
// basket.push(new product('samsung', 50, 2));
// basket.push(new product('htc', 30));
// 
// drawBasket();
// }
// 
// window.onload = my_initiation;

/*3.	* Сделать так, чтобы товары в каталоге выводились при помощи JS:
a.	Создать массив товаров (сущность Product);
b.	При загрузке страницы на базе данного массива генерировать вывод из него.
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога
генерируется JS.*/

// const $catalog = document.querySelector('#catalog');

let idElement = 0;

const catalog = {
    productList: [],

    createOrder() {
        this.productList.push(new Order())
    },

    add(idElement, product) {
        const order = this.productList.find(function (order) {
            return order.id == idElement
        });

        order.add(product);
    },

    getPrice() {
        return this.productList.reduce(function (acc, order) {
            return acc + order.getPrice();
        }, 0);

    }
}
function product(title, price, quantity = 1) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
}

function Order(products = []) {
    this.productList = products;
    this.id = idElement++;

    this.add = function (product) {
        this.productList.push(product);
    }

    this.getPrice = function () {
        return this.productList.reduce(function (acc, product) {
            return acc + (product.price * product.quantity);
        }, 0);
    }
}

catalog.createOrder();
catalog.createOrder();

catalog.add(1, new product('nokian', 20));
catalog.add(2, new product('htc', 15));





