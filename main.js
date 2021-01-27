// 1

// let div1 = document.getElementsByTagName('h3')[0]
// console.log(div1);


// 2

// let div1 = document.getElementsByTagName('h3')[1]
// console.log(div1);

// 3

// let div1 = document.getElementById('textGeneral')
// console.log(div1);

// 4

// let div1 = document.getElementsByTagName('p')[1].nextElementSibling
// console.log(div1);

// 5

// let div1 = document.getElementsByTagName('important').parentElement
// console.log(div1);

// 6

// let div1 = document.getElementById('listElements').firstElementChild
// console.log(div1);

// 7


// CORRECTION 

//1 
let premierEnfant = document.getElementsByTagName('div')[0]
console.log(premierEnfant.firstElementChild);

//2
let titre2 = document.getElementById('titreNiv3')
console.log(titre2);

//3
let titre3 = titre2.previousElementSibling
console.log(titre3);

//4 
let exo4 = document.getElementsByClassName('petitParagraphe')[0]
console.log(exo4.nextElementSibling);

//5
let importantParent = document.getElementsByClassName('important')[0]
console.log(importantParent.parentElement);

//6
let myListElement = document.getElementById('listElements').parentElement
let premierEl = myListElement.firstElementChild
console.log(premierEl);

//7
let exo7 = document.getElementsByClassName('important')
console.log(exo7);
let exo7Longueur = exo7.length -1
let exo7Bis = exo7[exo7Longueur]
console.log(exo7Bis.nextElementSibling);

//8
let mytextGeneral = document.getElementById('textGeneral')
console.log(mytextGeneral.nextElementSibling.nextElementSibling);

// 9
let mySpan = document.getElementsByTagName("span")[1];
let spanParent = mySpan.parentElement;
let mySpanPrenom = spanParent.nextElementSibling;
console.log(mySpanPrenom);

//10
let nicolas = document.getElementsByTagName("b")[2];
let nicolas2 = nicolas.parentElement;
let nicolas3 = nicolas2.parentElement;
let nicolas4 = nicolas3.previousElementSibling;
let nicolas5 = nicolas4.firstElementChild;
let nicolas6 = nicolas5.firstElementChild;
console.log(nicolas6.innerText);
// méthode 2
console.log(document.getElementsByTagName('div')[1].getElementsByTagName('span')[1].firstElementChild.parentElement.parentElement.parentElement.getElementsByTagName('p')[0].firstElementChild.firstElementChild);


// 11 querySelector
let newMethode = document.querySelector('#textGeneral')

console.log(newMethode);


// 12
let newMethodeAll = document.querySelectorAll('li')
console.log(newMethode);
let listFinal = Array.from(newMethodeAll)
console.log(listFinal);

listFinal.forEach(el => {
    console.log(el);
});



