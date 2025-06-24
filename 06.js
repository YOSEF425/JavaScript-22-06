// Q1   
function doubleValues(arr){
    const newArr = arr.map(n => n * 2);
    return newArr;
}

// Q2
function onlyEvenValues(arr){
    const newArr = arr.filter((n) => {
        return n % 2 === 0
    });
    return newArr
}

// Q3
function showFirstAndLast(arr){
    const newArr = arr.filter((n) => {
        return (arr.indexOf(n) === 0 || arr.indexOf(n) == arr.length - 1) && typeof n === "string";
    });
    return newArr
}

// Q4
function vowelCount(word){
    obj = {};
    word.split('').forEach(letter => {
        if(letter === "a" || letter === "e" || letter === "i" || letter === "u" || letter === "o"){


            if (letter in obj){
              obj[letter] += 1;
            }
            else{
              obj[letter] = 1;
            }
        }
    });
    return obj;
}

// Q5
function capitalize(word){
    let result = "";
    for(let index = 0; index < word.length; index ++){
       result +=  word[index].toUpperCase();
    }
    return result;
}
    
// Q6
function shiftLetters(word){

    const letters = "abcdefghijklmnopqrstuvwxyz";
    wordArr = word.split('');
    newWordArr = wordArr.map((letter,i) => {
        const letterLocation = 
        

    })
}
