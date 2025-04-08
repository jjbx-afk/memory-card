
const container = document.querySelector("#memoryCards");
container.classList.add("container");
container.querySelector(".memoryCard").remove();

let input = document.getElementById("inputNbrOfCard");

// store the value when typed and start clicked

const btn = document.getElementById("btnRestart");
document.getElementById("btnRestart").innerHTML = "start";
btn.addEventListener("click", backOfCards);


// first clicked card 

let firstCard = null;

// score id 

let scoreObject = document.getElementById("currentScore"); 
let score = scoreObject.innerHTML = 0;
typeof score;
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

function backOfCards() {

        container.innerHTML = "";
        const allCards = generateCards(input.value);

        for (i = 0; i < allCards.length; i++) {

                let card = document.createElement("div");
                card.textContent = "??";
                container.appendChild(card);
                card.classList.add("card");

                card.dataset.number = allCards[i];
               
                // setTimeout(showNumber, 3000);
                card.addEventListener("click", () => showNumber(card) );
        } 
}

function showNumber(card) {

        card.innerHTML = card.dataset.number;

        if (firstCard === null) {
                firstCard = card;
        }
        else if (firstCard.dataset.number === card.dataset.number){
                let score = scoreObject.innerHTML = 0;
                newScore= score.innerHTML = ++score;
                // supp 2 cartes (pointer event none,opacité 0)
                firstCard = null;
        }
        else {
                setTimeout(() => {
                card.textContent = "??";
                firstCard.textContent = "??"; 
                firstCard = null;
                }, 1000);
        }

}

