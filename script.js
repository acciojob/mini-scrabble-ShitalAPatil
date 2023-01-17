//your code here
// let evaluatedText = document.getElementById("evaluatedText");
// let letterCount = document.getElementById("letterCount");
// evaluatedText.addEventListener("input",calculateLength)

// function calculateLength(){
// 	let wordLength = word.length;
// 	letterCount.innerHTML=wordLength;
// }

function countChars(obj){
    document.getElementById("letterCount").innerHTML = obj.value.length;
}
