
// Problem 1

// function stringReverse (str){
    // Creating an empty string that will host the new string
    // var newString = "";
    // for(var i = str.length - 1; i >= 0; i--){
    // For loop that corresponds to the last letter in "hello"
    // Loop will continue to run as long as i is greater than or egual to "0"
//         newString += str[i];
//         console.log(newString);
//     }

// }

// stringReverse("hello");

// Problem 2

// for(var i=1; i < 101; i++){

// var sizzle = "";

//     if(i % 3 === 0 && i % 5 === 0)
//         sizzle = "FizzBuzz!"

//     if(i % 3 === 0 && i % 5 != 0)
//         sizzle = "Fizz!"

//     if(i % 5 === 0 && i % 3 != 0)
//         sizzle = "Buzz!"

//     console.log(sizzle||i);
// }

// Problem 3
// Script is not working. Unsure what is wrong

var oinkLatin = function(str){
    var pig = "";
    var array = ["a", "e" ,"i" ,"o" ,"u"];
    var split = str.split("");

    for(var i = 0; i < array.length - 1; i++){
        for(var y = 0; y < str.length - 1; y++){
            if(str[y] === array[i]){
                for(var x = y; x < str.length; x++){
                    pig = pig + str[x];
                }
                for(var n = 0; n < y; n++){
                    pig = pig + str[n];
                }
                    return pig + "ay";
                    console.log(str);
            }
        }
    }

}

oinkLatin("apple");