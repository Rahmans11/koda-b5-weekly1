let word = "kayak";
let firstString = word[0];
let lastString = word[word.length - 1];
if(firstString == lastString){
    let wordArray =  word.split('');
    let reverseArray = wordArray.reverse();
    let reverseWord = reverseArray.join('');
    if(reverseWord == word){
        console.log("String adalah palindrome");
    }else{
        console.log("String bukan palindrome");
    }
}else{
    console.log("String bukan palindrome");
}