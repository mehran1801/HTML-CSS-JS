

let messageEl = document.querySelector('#message-el')
let cardsEl = document.querySelector('#cards-el')
let sumEl = document.querySelector('#sum-el')
let playerEl = document.getElementById('player-el');

let player = {
    name:'Mehran',
    chips:145
}
playerEl.textContent = `${player.name}: $${player.chips}`
let hasBlackJack = false
let isAlive = false;
let message = ""


function getRandomCard(){
    let random = Math.floor(Math.random()*13)+1;
    if(random===1){
        return 11;
    }else if(random > 10){
        return 10;
    }else{
        return random;
    }
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    let card =  getRandomCard();
   
    if( hasBlackJack !==true && isAlive ===true){
    sum+=card;
    cards.push(card);
    renderGame();
    }
}