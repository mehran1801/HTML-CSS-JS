// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = "";
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }


// function newCard() {
//     let card = 6
//     sum += card
//     // Push the card to the cards array
    
    
//     renderGame()
// }


let messageEl = document.querySelector('#message-el')
let cardsEl = document.querySelector('#cards-el')
let sumEl = document.querySelector('#sum-el')

let firstCard = 4;
let secondCard = 5;
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""
let sum = firstCard+secondCard;

function startGame(){
    renderGame();
}
function renderGame(){
cardsEl.textContent = `Cards: `;
for (let el of cards){
    cardsEl.textContent +=el+",";
}
sumEl.textContent = `Sum: ${sum}`;
if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "You've got Blackjack!"
            hasBlackJack = true
        } else {
            message = "You're out of the game!"
            isAlive = false
        }
        messageEl.textContent = message;
}
function newCard(){
    let card = 8;
    sum+=card;
    cards.push(card);
    renderGame();
}