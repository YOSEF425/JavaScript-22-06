function nameUpper(name){
    return(name.toUpperCase());

}


function yearBirth(age){
    const birthYear = 2025 - age
    return birthYear
    
}

const add = (x,y) => {
    return x + y;
}

const sub = (x,y) => {
    return x - y;
}

const times = (x,y) => {
    return x * y;
}

const div = (x,y) => {
    return x / y;
}


// EXERCISE


// function multiply(num){
//     const res = num * 2;
//     return res;
// }

// function subtract5(num){
//     return num - 5;
// }

// function divideBy10(num){
//     return num / 10;
// }

// function start(num){
//     return divideBy10(subtract5(multiply(num)));
// }

// const result = start(5);
// console.log(result);

// function start(num,fn){
//    return fn(num);
// }

// function multi(num,func){
//     sub5(num * 2);
// }

// function sub5(num){
//     return num - 5;
// }

// console.log(start(5,multi));

// function hello(callback){
//     console.log("hello");
//     callback();
// }

// function bye(){
//     console.log("bye");
// }

// hello(bye);

// function mult(num){
//     return num * 2;
// }

// function sub2(fun,num){
//     return fun(num) - 5;
// }

// function divide(num,f1){

//     const a = f1(num)
//     return a / 10

// }

// console.log(divide(5,sub2))

// names = ["avi","eli","ben"]
// const newNames = names.map(v => v.toUpperCase());
// console.log(newNames);

// names.forEach(name => {
//     console.log(name.toUpperCase());
// });

// numbers = [1,2,3,4,5]
// // numbers2 = numbers.map(n => n * 2)
// // console.log(numbers2);

// let sum = 0;
// numbers.forEach(n => {
//     sum += n
// });
// console.log(sum);




// function done(){
//     console.log("done");
// }

// function decorator(fn){
//     console.log("before function");
//     fn();
//     console.log("after function");
// }

// decorator(done);

function spellFactory(spellName){
    return () => {}
}
