"use strict";

// let str1="Salom ";
// let str2="JavaScript";

// let a=10;
// let b=12;

// // str1=str1+str2
// // a=a+b

// a+=b;
// str1+=str2;

// console.log(a)
// console.log(str1)

//   | -120 |= 120

// Math object

/*

let num=-11.3;

console.log( Math.floor(num) ) // kichik tomonga yaxlitlaydi.
console.log( Math.ceil(num) ) // kotta  tomonga yaxlitlaydi
console.log( Math.round(num) ) // haqiqiy yaxlitlaydi,
console.log( Math.abs(num)) // sonning musbat holatda qaytaradi
console.log(Math.min(1,2,3,4,5,-12,-88)) // -88
console.log(Math.max(1,2,3,4,5,-12,-88)) // 5
console.log(Math.pow(2,3)) // sonning darajasini aniqlaydi.
console.log(Math.sqrt(625)) // kvadrat ildiz
console.log(Math.random()*100) // sonlarni random holatda beradi.
console.log(Math.trunc(  Math.random()*1000  )) // sonning butun qismini qaytaradi.

*/



// Object literals


/*

let person={
    name: "Jahongir",
    age: 23,
    address: "Uzbekistan , Tashkent , Mirabad 72",
    isMarried: false,
    height:175,
    weight:78,
    phone:998990149898,
    family: {
        father: {
            name: "Murod",
            age: 48,
            isMarried: true,
            hobby: "Painting"
        },
        mother: {
            name: "Halima",
            age: 38,
            isMarried: true,
            hobby: "Reading"
        },
        brother:{
            name: "Islom",
            age: 18,
            isMarried: false,
            hobby: "Cooking"
        }
    },


    greeting: function(){
         console.log("Assalamau alaykum!")
    }

}

delete person.family

person.greeting()

person.isStudent=true;
person.unversity="TATU"
person['hobby']="Sleeping"
console.table(person)

// console.log(person.family.brother.hobby)
// console.log(person['family']['brother']['hobby'])


// console.log(person['name'])
// console.log(person.name)
// console.log(person['address'])
// console.log(person.phone)






// Object  Class constructor

const person=new Object({
    name: "Jahongir",
    age: 23,
    address: "Uzbekistan , Tashkent , Mirabad 72",
    isMarried: false,
    height:175,
    weight:78,
    phone:998990149898,
    family: {
        father: {
            name: "Murod",
            age: 48,
            isMarried: true,
            hobby: "Painting"
        },
        mother: {
            name: "Halima",
            age: 38,
            isMarried: true,
            hobby: "Reading"
        },
        brother:{
            name: "Islom",
            age: 18,
            isMarried: false,
            hobby: "Cooking"
        }
    },


    greeting: function(){
         console.log("Assalamau alaykum!")
    }

})


console.log(person)

*/

// array literals

// let fruits=['apple', 'banana', 'limon', 'orange', 'kiwi'];
// let data=[true , false , null , undefined , 11, "salom array"];

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(data[5])

// new Array() constructor

// const numbers=new Array(1,2,3,4,5,6,7,8,9);
// console.log(numbers)

// let languages=[];

/*

languages[0]="JavaScript"
languages[1]="Python"
languages[2]="C++"
languages[3]="Ruby"
languages[7]="Java"

delete languages[6]

console.log(languages)
console.log(languages.length)

*/