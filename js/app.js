/*-------------------------------- Constants --------------------------------*/

const symbols = [
    {   icon: '🦅',
        name: 'eagle'
    },
    {   icon: '🦅',
        name: 'eagle'
    },
    {   icon: '🦜',
        name: 'parrot'
    },     
    {   icon: '🦜',
        name: 'parrot'
    },
    {   icon: '🦑',
        name: 'octopus'
    },
    {   icon: '🦑',
        name: 'octopus'
    },
    {   icon: '🐢',
        name: 'turtle'
    },
    {   icon: '🐢',
        name: 'turtle'
    },
    {   icon: '🐎',
        name: 'horse'
    },
    {   icon: '🐎',
        name: 'horse'
    },
    {   icon: '🦍',
        name: 'gorilla'
    },
    {   icon: '🦍',
        name: 'gorilla'
    },
    {   icon: '🦆',
        name: 'duck'
    },
    {   icon: '🦆',
        name: 'duck'
    },
    {   icon: '🐳',
        name: 'whale'
    }, 
    {   icon: '🐳',
        name: 'whale'
    }

]


/*---------------------------- Variables (state) ----------------------------*/

let firstCard = null;
let secondCard = null;
let chances = 10;
cardId = 0;
let winCount = 0;
/*------------------------ Cached Element References ------------------------*/

const chanceLeft = document.querySelector('#chance')
const totalScore = document.querySelector('#score')
const gameBoard = document.querySelector('#board')
const cards = document.querySelectorAll('.sqr')

/*-------------------------------- Functions --------------------------------*/

// Game state initalizer

function render() {
    console.log('Game is loading')
}


// Game counter

// function gameStatus() {
//    for (let counter = 0; counter <= 16; counter+2) {
    
//     }
// }

// Reset Values if they do not match

function flipCards(){
    firstCard.textContent = '';
    secondCard.textContent = '';
}

function nextTurn(match = false) {


    if(!match){
        flipCards()
    }
    firstCard = null
    secondCard = null
}


function resetGame(){
    winCount++
    // set all the vvariables back to the way they were in the begining as if the game was never played except wincount
    // reset all the cards -> loop thru each card and set the text content back to ''
    init()
}

// Check if the cards match

function checkIfMatch() {
    if (firstCard.textContent === secondCard.textContent) {
        // firstCard.classList.add('active');
        // secondCard.classList.add('active');
        console.log('It is a match');
        isAnyEmpty = Array.from(cards).some(c => c.textContent === '')

        if(!isAnyEmpty){
          resetGame()
            return
        }

        nextTurn(true)
    } else {
        console.log('It is not a match')
        setTimeout(nextTurn, 1000)
    }

}

// function checkIfAlrMatched() {
//     [].classList
//     if (cards.classList.contains('active')) {
//         cards.removeEventListener()
//     }
// }


// Card handler - When clicked

function cardHandle(event) {

    if (( firstCard && secondCard ) || (  firstCard && firstCard.id === event.target.id ) || event.target.textContent) {
        return
    }
    
    cardId = event.target.id;
    const cardElement = event.target;
    cardElement.textContent = symbols[cardId].icon;
    
    if (firstCard === null) {
        firstCard = cardElement;
        console.log(firstCard)
    } else {
        secondCard = cardElement;
        console.log(secondCard)
        checkIfMatch()
    }

}


// Card shuffling / Card Randomizer Function

function shuffleCards(symbols) {
    let currentIdx = symbols.length;
    while (currentIdx != 0) {
        let randomIdx = Math.floor(Math.random() * currentIdx);
        currentIdx--;
        [symbols[currentIdx], symbols[randomIdx]] = [
            symbols[randomIdx], symbols[currentIdx]];
    }
}


/*----------------------------- Event Listeners -----------------------------*/

// Event listener that registers a click and runs the cardToggle function

cards.forEach(card => {
    card.addEventListener('click', cardHandle);
});


/*--------------------------------- Function Calling--------------------------------------*/

function init(){
    render()
    shuffleCards(symbols)
}

init()
// checkIfAlrMatched()
// gameStatus()


/*----------------------------- Psuedo Code -----------------------------*/

/* 

The cards should be initalized randomly and should be different after reseting.
The cards should contain event listeners that register a click event.
The cards should be able to display the icon it represents underneath.
The first selected card must be differentiated against the second selected card.
If the cards do not match, then both should return back to their inital stage and reduce chances by 1.

* What I'm trying to do now *

Since each object inside the element has a name,
I want to save the first clicked card's information in a variable.

I want to then compare the first variable class to the class of the second card.

How though



*/