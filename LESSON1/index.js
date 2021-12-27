'use strict';

const itemsLists = document.querySelectorAll('.item');
console.log('itemsLists', itemsLists);


const oneli = itemsLists[1];
const twoli = itemsLists[2];
const threeli = itemsLists[3];
const fourli = itemsLists[0];
const fiveli = itemsLists[4];
const sixli = itemsLists[5];



// ПОСТАВИЛИ li наместо
threeli.after(fourli);


const h2 = document.querySelectorAll('h2');


console.log(h2[0]);  // Познакометесь, JavaScript
console.log(h2[1]);  // ES и нетолько
console.log(h2[2]); // Замыкания и объекты
console.log(h2[3]); // Типы и грамматические конструкицц
console.log(h2[4]); // Область видимости и замыкание
console.log(h2[5]);// асинхронная обработка и оптимизация


const one = h2[0];
const two = h2[1];
const three = h2[2];
const four = h2[3];
const five = h2[4];
const six = h2[5];



console.log(two.innerText); // ES6 и не только
console.log(six.innerText); //  асинхронная обработка и оптимизация
two.replaceWith(five);
six.replaceWith(two);

const newh2 = document.createElement('h2');
const dom = document.createTextNode('Асинхронная обработка и оптимизация')
newh2.append(dom);

const new1 = document.createElement('h3');
const om1 = document.createTextNode(`This и прототипы объектов`);
new1.append(om1);

const itemImage = document.querySelectorAll('.item__image');

console.log(itemImage[4]);

// ПОЯВИЛЯСЯ H2
itemImage[4].after(h2[5]);
// появился h2
h2[2].remove();
itemImage[2].after(new1);

console.log('/*************** */');
const itemspRrops = document.querySelectorAll('.props__list');


itemspRrops[4].replaceWith(itemspRrops[2]);

new1.after(itemspRrops[4]);

const propsItems = document.querySelectorAll('.props__item');


const propListfour = document.querySelectorAll('.props__item_four');
console.log('propListfour: ', propListfour);

propListfour[3].append(propsItems[9])



const propListtwo = document.querySelectorAll('.props__item_two');
console.log('propListtwo: ', propListtwo);

propListtwo[7].append(propsItems[43]);
propListtwo[8].append(propsItems[44]);

