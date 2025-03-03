
// try to reach the memory card class to put in a for loop 
// loop show ?? cards as the input is 
// if card is clicked use randomiser for half of the card 
// show the card for 3 sec 
// another if, if cards are the same number 
// make them disappear
// add + 2 score  
// when cards are matched replace the background color 




let repeatDiv = document.getElementsByClassName("memoryCard");


for (let i = 0; i < 10; i++) {

    repeatDiv.appendChild(repeatDiv);


};



function randomCard(min, max) {
    const minNumber = Math.ceil(min);
    const maxNumber = Math.ceil(max);
    let randomNum = console.log(Math.floor(Math.random() * (maxNumber - minNumber)));
    let card =  document.createElement("div");
    document.body.appendChild(card);
    card.textContent = 
}
randomCard