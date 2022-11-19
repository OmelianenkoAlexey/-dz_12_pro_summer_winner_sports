// ! ДЗ 12. Print right arrays

// Задача:
sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
];

console.log(sports);

// 1. С массива sports с помощью метода.slice() скопировать в новый массив summer_sports массивы, которые относятся к летним видам спорта.
summerSports = sports.slice(5, 11);
console.log(summerSports);
// 2. С массива sports с помощью метода.slice() скопировать в новый массив winter_sports массивы, которые относятся к зимним видам спорта.
winterSports = sports.slice(0, 5);
console.log(winterSports);
// 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.
fruits = [];

fruits = fruits.concat(winterSports.splice(2, 1));
fruits = fruits.concat(summerSports.splice(2, 2));
console.log(fruits);

// 4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде, который изображен на рисунке console.png.
newWinterSports = [];
for (i = 0; i < winterSports.length; i++) {
    newWinterSports.push(`${winterSports[i].join(": ")}\n`)
}

newSummerSports = [];
for (i = 0; i < summerSports.length; i++) {
    newSummerSports.push(`${summerSports[i].join(": ")}\n`)
}

newFruits = [];
for (i = 0; i < fruits.length; i++) {
    newFruits.push(`${fruits[i].join(": ")}\n`)
}


console.log(`
*** Winter Sports ***
${newWinterSports.join("")}
    
*** Summer Sports *** 
${newSummerSports.join("")}
    
*** Fruits ***  
${newFruits.join("")}
`);

// newWinterSports = [];
// for (i = 0; i < winterSports.length; i++) {
//     newWinterSports.push(`<p class="descriptiondz11">${winterSports[i].join(": ")}</p>`)
// }

// newSummerSports = [];
// for (i = 0; i < summerSports.length; i++) {
//     newSummerSports.push(`<p class="descriptiondz11">${summerSports[i].join(": ")}</p>`)
// }

// newFruits = [];
// for (i = 0; i < fruits.length; i++) {
//     newFruits.push(`<p class="descriptiondz11">${fruits[i].join(": ")}</p>`)
// }

// document.write(`
// <div class="itemdz11">
// <h1 class="titledz11">*** Winter Sports ***</h1>
// ${newWinterSports.join("")}
// </div>

// <div class="itemdz11">
// <h1 class="titledz11">*** Summer Sports ***</h1>
// ${newSummerSports.join("")}
// </div>

// <div class="itemdz11">
// <h1 class="titledz11">*** Fruits ***</h1>
// ${newFruits.join("")}
// </div>
// `);



