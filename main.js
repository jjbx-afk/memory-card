const container = document.querySelector("#memoryCards");
container.classList.add("container");

container.querySelector(".memoryCard").remove();

const input = document.getElementById("inputNbrOfCard");
const valueInput = input.value;

const btn = document.getElementById("btnRestart");
document.getElementById("btnRestart").innerHTML = "start"; 


btn.addEventListener("click", backCard());

function backCard() {

for (i = 0; i < 10; i++) {

        let cards = document.createElement("div");
        cards.textContent = "??";
        container.appendChild(cards);
        cards.classList.add("card");

 
}
}

function returnedCard() {

        cards.addEventListener("click", () => onClick);
        let rnd =  Math.floor(Math.random() * 10);
        console.log(rnd);
        if (cards.clicked == true) {
         cards.innerHTML = rnd;

}
}





// while (numbersArr.length > 0) { 
//     let cards = document.createElement("div");
//     cards.textContent = "??";
//     let numbersArr = Array.from({ length: 10 }, (_, i) => i + 1); 
//     const currentNumber = numbers.splice(10, rnd);
//     let rnd =  Math.floor(Math.random() * numbersArr);