

const container = document.querySelector("#memoryCards");
container.classList.add("container");

container.querySelector(".memoryCard").remove();

let input = document.getElementById("inputNbrOfCard");
let valueInput = input.value;
console.log(valueInput);

// store the value when typed and start clicked

const btn = document.getElementById("btnRestart");
document.getElementById("btnRestart").innerHTML = "start";
btn.addEventListener("click", backOfCards());


// function updateInput(){
//  if new value change the var 

// }


// generate random numbers    

function generateCards(count) {
        let allCards = [];

        for (let i = 1; i <= count / 2; i++) {
                allCards.push(i, i);
        }

        // [1, 1, 2, 2, 3, 3 ...]

        for (let i = allCards.length - 1; i >= 0; i--) {
                const j = Math.floor(Math.random() * i);

                [allCards[i], allCards[j]] = [allCards[j], allCards[i]]
        }

        // [2, 3, 1, 2, 1, 3]
        return allCards;
}


// give an index to each card and match it with a number 

function backOfCards() {

        const allCards = generateCards(valueInput);

        for (i = 0; i < allCards.length ; i++) {

                let cards = document.createElement("div");
                cards.textContent = "??";
                container.appendChild(cards);
                cards.classList.add("card");
                cards.dataset.number = allCards[i];
                console.log(cards.dataset.number);
        }
}
 

// when car clicked show the data number for 3 sec 
// if 1 card is clicked wait for another to be clicked
// if 2 cards clicked compare them 
// if the cards are the same make them disappear and add + 1 to the score 
// Else put a message that says wrong and move on 
