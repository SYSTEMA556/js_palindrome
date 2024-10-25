//reverceをすべてのストリングで
String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");

}
// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;
// 文字列を小文字に変換する
this.processor = function(string) {
  // ここにコードを書く
  return this.content.toLowerCase();
}

  // パリンドロームのテスト用に変換したcontentを返す
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // パリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// TranslatedPhraseオブジェクトを定義する
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  パリンドロームのテスト用に変換した訳文を返す
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}

  
// そのためには、まずリスト 7.2で定義されているPhraseオブジェクトをじっくり読み返してみましょう。このPhraseオブジェクトには、contentプロパティが1個と、palindrome()メソッドが1個あります（リスト 7.5）。


// // //文字列を小文字にして真偽を返す
// // function palindrome(string){
// //     let processedcontent = string.toLowerCase();
// //     return processedcontent === reverse(processedcontent);
// // }
// // //emailのアドレス部分を切り分けて、小文字にしてusernameを返す。
// // function emailParts(string){
// //     let mailArray = string.split("@");
// //     return mailArray[0].toLowerCase();
// // }
// // //     //@で前後に分けるe
// function emailParts(string) {  
//     // 関数の名前は emailParts（メールの部分を分けるという意味）
//     // string という名前のメールアドレスを入力としてもらうよ

//     let mailArray = string.split("@");
//     // まず、メールアドレスを "@" のところで半分に分けるよ
//     // 結果は「配列」という形にして保存するんだ
//     // 例えば "systema@yoy.com" なら ["systema", "yoy.com"] というふうになるよ

//     let username = mailArray[0].toLowerCase();
//     // 配列の最初の部分（[0]）はメールの前の部分、つまりユーザー名だよ
//     // これを小文字に変えて、username という名前の変数に入れるよ

//     let domain = mailArray[1].toLowerCase();
//     // 配列の二つ目の部分（[1]）は後ろの部分、つまりドメインだよ
//     // これも小文字に変えて、domain という名前の変数に入れるよ

//     return `Username:${username},domain:${domain}`;
//     // 最後に、"Username:" と "Domain:" というラベルをつけて
//     // それぞれの値（ユーザー名とドメイン）をくっつけて返すよ
// }
// function Phrase(content){
//   this.content = content;
// }

// this.louder = function() {
//   return this.content.toUpperCase()  ;  
// };





//   // function palindrome(string) {
//   //   let processedContent = string.toLowerCase();
//   //   return processedContent === reverse(processedContent);
//   // }


// this.louder = function() {
//   return this.content.toUpperCase() ;
// };

// // 文字列を逆順にする
// function reverse(string) {
//     return Array.from(string).reverse().join("");
//   }
  

  
//     // // パリンドロームのテスト用に変換したcontentを返す
//     // this.processedContent = function processedContent() {
//     //     return this.content.toLowerCase();
//     //   }
    
//     //   // パリンドロームならtrueを、違うならfalseを返す
    

//     // function palindrome(string) {
//     //   let processedContent =string.toLowerCase();
//     //   return processedContent === reverse(processedContent);
//      }





//     function reverse(string) {
//       return Array.from(string).reverse().join("");
//     }


//   // フレーズを全部大文字にする
//   this.louder = function() {
//   let processedContent = this.processedContent();// 関数を実行
//   return processedContent.toUpperCase();// 大文字に変換して返す
//   };
// }