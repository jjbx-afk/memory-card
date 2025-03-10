
// remove div 
// loop show ?? cards as the input is 
// if card is clicked use randomiser for half of the card 
// show the card for 3 sec 
// another if, if cards are the same number 
// make them disappear
// add + 2 score  
// when cards are matched replace the background color 



const container = document.querySelector("#memoryCards");
container.classList.add("container");
container.querySelector(".memoryCard").remove();

document.getElementById("inputNbrOfCard").value;
const input = document.getElementById("inputNbrOfCard");

const btn = document.getElementById("btnRestart");
btn.addEventListener('click', onClick);

const valueInput = input.value;
function onClick() {

    for (i = 0; i < valueInput; i++) {

        let cards = document.createElement("div");
        cards.textContent = "??"
        container.appendChild(cards);
        cards.classList.add("card");
    }

}

