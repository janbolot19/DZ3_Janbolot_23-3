// 1 vунарные -> +, -, !
// 2 бинарные -> математич. действия
// 3 тернарные операторы

// false - черный цвет

// var playerColor = false

// underfined null boolean number bigint string object symbol primitive

/*
if(playerColor){
console.log('you start');
}else
{
    console.log('wait your enemy');
}
var playerColor = false

console.log(playerColor ? "you start" : "wait your enamy");
*/


// var number = 90n
// console.log("typeof number");


// 7-8 symbol, bigint.
// truthy and falsy - выражение
// falsy -> false 0, "", "", underfined, null, NaN, -0, 0n


// var isReady = 1
// console.log(isReady ? "true" : "false");

// let ageUser = +prompt("enter your age")
// console.log(ageUser >= 18 ? 'Dostup razreshen' : 'dostup ne razr.'); 



// array - массив 

// var numbers = [4, 5, 6, 7, 8, 9] 
// console.log(numbers.sort());


// var others = [
//     true, 
//     false, 
//     {
//         name: 'Aidana'
//     },
//     null, undefined, '', 45, 56n
// ]

// //индексация в массивах
// console.log(others[5] [3])
// console.log(others.length - 1);


// методы масива
var fruits = ['banana', 'apple', 'orange'];
fruits.push('cherry'); // добавляет новый элемет в конце
console.log(fruits);
var fruitAdd = fruits.unshift('strawberry') //добавляет новый элемент в начало
console.log(fruits);

fruits.splice(1, 3) // добавление по индексу
console.log(fruits);

var lastFruit = fruits.pop() // удаление по индексу
console.log(lastFruit);

var joinFruit = fruits.join() // склеивает массив в стринг
console.log(joinFruit.toUpperCase()); // делает все буквы строчными

// joinFruit.toLowerCase() // делает ысе буквы

var matrix = [
    [1,2,3,],
    [4,5,6,],
    [7,8,9,]
 
]
console.log(matrix[2] [0]);

var fruits2 = ['banana', 'orange', 'apple'];
var fruit = 'orange'
var i = 0
while(i < 3){
   if(fruits2[i] === fruit) console.log('fruit found on index ' + i)
   i++ //i = i + 1, i += 1
}


var names = ['aidar', 'anna', 'john', 'jack', 'olivia', 'ilya'];
var blackList = ['ilya', 'anaa']

console.log(names.includes('a'));

for(var i = 0; i < names.length; i++){
    if(blackList.includes(names[i].toLowerCase())){
        console.warn(`${names[i]} ${i} in blackList`);
        continue;
    }
    console.log(`Welcome, dear guest ${names[i]}`);
}