// function declarations

funName();

function funName() {
    console.log("Hello World");
}

funName();

// function expressions

// app(); x
// https://www.khodieff.uz/posts/015-javascriptda-tdz-hoisting-va-blocklar

const app = function (a) {
    return a * 2;
};

console.log(app(2));

const application = app;

console.log(application(4));

// function arrow

// console.log(calculate(13, 10)); x

const calculate = (a, b) => a + b;

console.log(calculate(13, 10));

// Pure functions

function sayHello(userName) {
    console.log(`Hello ${userName}`);
}

sayHello("Muhammadnur");

// Impure functions

let counter = 0;

function incrementCounter() {
    counter++;
}

incrementCounter();
incrementCounter();
incrementCounter();
console.log(counter);

// function Currying

function step0(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (f) {
                    return a + b + c + d + f;
                };
            };
        };
    };
}

const res = step0("Qozonga qaradim, ")(" Suvni soldim")("Guruch soldim")("Sabzi soldim")("yedim");

// console.log(res);

// const result1 = step1("Qozonga qaradim");
// const result2 = result1("Suv soldim , ");
// const result3 = result2("Guruchni soldim , ");
// const result4 = result3("Sabzini solidim , ");
// const result5 = result4("Ovqat tayyor");

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

// Pipe function

// const step1 = (a) => a;
// const step2 = (b) => b + "tayyor";
// const step3 = (c) => "marhamat:" + c;

// const salat = step1(step2(step3("Salat ")));

// console.log(salat);

function car(name, color, model, power, price) {
    return {
        name,
        color,
        model,
        power,
        price,
    };
}

const nexia = car("Nexia", "white", "1 , 1.6 DONC", "120", "10000$");
const spark = car("Spark", "red", "Chevrolet", "89", "8800$");

console.log(nexia);
console.log(spark);
