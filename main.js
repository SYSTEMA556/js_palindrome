let Phrase = require("mhartl-palindrome");
let string = prompt("パリンドロームかテストしたい文字列を入れてください");
let phrase = new Phrase(string);
if (phrase.palindrome()) {
    alert (`"${phrase.content}"はパリンドロームです`);
}else{
    alert (`"${phrase.content}"はパリンドロームではないです`);
}