// Q1
let a = "first";
let b = "second";

a , b = b ,a ;
console.log(a);
console.log(b);

// Q2
const arr = [["w","f","x","x","q"],["g","x","l","w","x"],
["o","p","y","t","x"]];
let count = 0;
for(let i = 0; i < arr.length ; i++){

    for(let j = 0; j <arr[i].length ; j++){
        if(arr[i][j] == "x"){
            count ++;
        }
    }
}
console.log(count);

// Q3
let family = {parents:{},children:[{name:"Ali"},{name:"Lea"},{name:"Mona"}]};
console.log(family.children[2].name);

// Q4
const arr2 = [1,2,3];
for(const i = arr.length -1; i <= 0 ; i--){
    console.log(arr2[i]);
}


Q5
const arr3 = [1,2,"eli",false,"moshe"];
let number,string,object,boolean;
number = string = object = boolean = 0;
for(let i = 0; i < arr3.length; i++){
    switch(typeof arr3[i]){

        case "number":
            number ++;
            break;
        
        case "string":
            string ++;
            break;

        case "object":
            object ++;
            break;

        case "boolean":
            boolean ++;
            break;
        
    }
}
console.log(`numbers : ${number}\nstrings : ${string}\nobjects : ${object}
boolean : ${boolean}`);