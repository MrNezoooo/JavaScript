console.log('=================homework 2.2======================================');
/*------TASK---------------------------------------------------------------*/
console.log('1. Три різних числа вводяться через prompt(). \n' +
    'За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)');
/*-----ANSWER---------------------------------------------------------------*/
let a = +prompt(message='Введіть перше чесло');
let b = +prompt(message='Введіть друге чесло');
let c = +prompt(message='Введіть третє чесло');
/*let min = null;
let middle = null;
let max = null;*/
if((a < b) && (a < c) && (b < c)) {
    console.log(a, ' ', b, ' ', c)
}else  if((b < a) && (b < c) && (a < c)){
    console.log(b, ' ', a, ' ', c)
}else  if((c < a) && (c < b) && (a < b)){
    console.log(c, ' ', a, ' ', b)
}else  if((b < a) && (b < c) && (c < a)){
    console.log(b, ' ', c, ' ', a)
}else  if((a < b) && (a < c) && (b < c)){
    console.log(b, ' ', c, ' ', a)
} else{console.log(c, ' ', b, ' ', a)}

/*------TASK---------------------------------------------------------------*/
console.log('2. \n' +
    'Все параматры получаем с клавиатуры!!!!\n' +
    'Имитируем поведение пешехода на перекстке.\n' +
    'Если светофор зеленый - вывести "иди".\n' +
    'Если светофор желтый - вывести "подожди".\n' +
    'Если светофор красный - вывести "стой".\n' +
    'Если светофор в аварийном режиме вывести "делай что хочешь"!');
/*-----ANSWER---------------------------------------------------------------*/
let trafficLights = prompt('Введіть зелений, жовтий, червоинй  або аварійни режим ', '');
let green = 'зелений';
let yellow = 'жовтий';
let red = 'червоний';
if (trafficLights === green) {
    console.log('ІДИ');
 }else if (trafficLights ===  yellow){
    console.log('ПОЧЕКАЙ');
 }else if (trafficLights ===  red){
     console.log('СТІЙ');
 }else {
     console.log('Роби що хочеш');}
/*------TASK---------------------------------------------------------------*/
console.log('Все параметры получаем с клавиатуры!!!!(prompt , confirm)\n' +
    'Создать переменную isRoadClear которая характеризирует наличие на дороге машин.\n' +
    'Улучшаем предыдущее задание.\n' +
    'Если светофор зеленый и машин нет - вывести "иди".\n' +
    'Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".\n' +
    'Если светофор желтый и машины есть - вывести "жди".\n' +
    'Если светофор желтый и машин нет - вывести "все рано жди".\n' +
    'Если светофор красный и машин нет- вывести "стой все рано".\n' +
    'Если светофор красный - и машины есть вывести "стой и жди".\n' +
    'Если светофор в аварийном режиме вывести "делай что хочешь"!');
/*-----ANSWER---------------------------------------------------------------*/
const trafficLight = prompt('Cвітофор: введіть "зелений", "жовтий" або "червоиний"', '');
const isRoadClear = confirm('Чи є машина? OK-"ТАК" CENCEL-"НІ"');  //true false

if (isRoadClear) {
    if(trafficLight === 'зелений'){
        alert('светофор зеленый и машины есть - подожди пока нарушители проедут');
    }else if(trafficLight === 'жовтий'){
        alert('светофор желтый и машины есть - жди');
    }else if(trafficLight === 'червоний'){
        alert('красный - и машины есть вывести "стой и жди');
    }else {
        alert('Роби що хочеш');
    }
} else {
    if(trafficLight === 'зелений'){
        alert('светофор зеленый и машин нет - иди');
    }else if(trafficLight === 'жовтий'){
        alert('желтый и машин нет - все рано жди');
    }else if(trafficLight === 'червоний'){
        alert('светофор красный и машин нет - стой все рано');
    }else {
        alert('Роби що хочеш222');
    }
}
