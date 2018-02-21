//depends on word.js
var word = require("./word.js");
//randomly selects a word and uses word constructor to store it

var words = ['one', 'two', 'three']


const chooseWord = function(){
    var randWord = words[Math.floor(Math.random()* words.length)];
    console.log(randWord);
}

//prompts the user for each guess and keeps track of number of guesses

chooseWord();
