/*Урок 4. Объекты в JavaScript

1. Написать функцию, преобразующую число в объект.Передавая на вход число от 0 до 999, 
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
десятки и сотни.Например, для числа 245 мы должны получить следующий объект: 
{ ‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2 }.Если число превышает 999, необходимо выдать 
соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

// 1. Вариант (не рабочийб выдает не расчетное значение, а функцию как объект. Почему?)

// let num = 999;
// function converter(num) {
// if (num <= 999 && num > 0) {
// let x = {
// hundred() {
// let h = Math.floor(num / 100);
// return h;
// },
// dozens() {
// let d = Math.floor((num - (hundred * 100)) / 10);
// return d;
// },
// units() {
// let u = num - ((hundred * 100) + (dozen * 10))
// return u;
// }
// };
// let numObjeck = {
// 'сотни': x.hundred,
// 'десятки': x.dozens,
// 'единицы': x.units
// };
// console.log(numObjeck);
// } else {
// console.log('Число больше чем 999');
// let p = {};
// console.log(p);
// }
// };
// 
// console.log(converter(num));


// 2. Вариант (рабочий)

let num = 256;
function converter(num) {
    if (num <= 999 && num > 0) {
        let h = Math.floor(num / 100);
        let d = Math.floor((num - (h * 100)) / 10);
        let u = num - ((h * 100) + (d * 10))
        let numObjeck = {
            'сотни': h,
            'десятки': d,
            'единицы': u
        };
        console.log(numObjeck);
    } else {
        console.log('Число больше чем 999');
        let p = {};
        console.log(p);
    }
};

console.log(converter(num));

/*2. 2.	Продолжить работу с интернет-магазином:
a.	В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно
заменить их элементы?
b.	Реализуйте такие объекты.
c.	Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

const $basket = document.querySelector('#basket');

const basket = [

];

function product(title, price, quantity = 1) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
}

function basketValue(arrayOfProducts) {
    return arrayOfProducts.reduce(function (acc, product) {
        return acc + (product.price * product.quantity);
    }, 0);
}

function basketQuantity(arrayOfProducts) {
    return arrayOfProducts.reduce(function (acc, product) {
        return acc + product.quantity;
    }, 0);
}

function drawBasket() {
    const p = document.createElement('p');
    if (basket.length !== 0) {
        p.textContent = 'в корзине ' + basketQuantity(basket) + ' товаров, на сумму ' + basketValue(basket) + ' рублей';
    } else {
        p.textContent = 'корзина пуста';
    }

    $basket.appendChild(p);
}

basket.push(new product('nokia', 100, 3));
basket.push(new product('samsung', 50, 2));
basket.push(new product('htc', 30));

drawBasket();


/*3.	* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине
актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект
«Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал
возможность вызывать разные методы.*/


