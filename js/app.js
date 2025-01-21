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
let countDown = 30;
cardId = 0;

/*------------------------ Cached Element References ------------------------*/

const timerElement = document.getElementById('time')
const totalScore = document.querySelector('#score')
const gameBoard = document.querySelector('#board')
const cards = document.querySelectorAll('.sqr')
const resetButton = document.querySelector('#resetter')

/*-------------------------------- Functions --------------------------------*/

// Game state initalizer

function render() {
    console.log('I am watching.')
}


// Game status when time limit is reached


function countDwn() {
    const countDownTimer = setInterval(() => {
        countDown--;
        timerElement.textContent = countDown;

        if(countDown === 0) {
            clearInterval(countDownTimer);
            restartGame()
        }

    }, 1000);
}

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


// Restart whenever

function restartAny() {
    resetButton.addEventListener('click', () => {
        location.reload();
    });
}

// Restart game after completing the game with a visual indicator

function restartGame(){
    // reset all the cards -> loop thru each card and set the text content back to ''
    resetButton.classList.remove('btn-danger')
    resetButton.classList.add('btn-success')
    // Event listener fot the reset button when it is clicked
    resetButton.addEventListener('click', () => {
        location.reload();
    });
}

// Check if the cards match

function checkIfMatch() {
    if (firstCard.textContent === secondCard.textContent) {

        // testing purposes
        console.log('It is a match');

        // Adding a class to emphasize matched cards
        firstCard.classList.add('active');
        secondCard.classList.add('active');

        // Checks whether if all cards do not contain an empty string > run restartGame function or nextTurn
        isAnyEmpty = Array.from(cards).some(c => c.textContent === '')
        
        if( !isAnyEmpty ) {
            restartGame()
            return
        }
        nextTurn(true)
        
    } else {
        console.log('It is not a match')
        setTimeout(nextTurn, 1000)
    }

}


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
    restartAny()
}

init()


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


// Codes that did not work - For future reference

// This code did not work because .classList cannot be used against the cached const cards. cards by default doesn't contain any class when cached and cannot be then manipulated to see if it contains the class '.active'. This also causes an error because cards is not an element, it simply retrieves all elements with (.sqr) class from the HTML. The better alternative was just to see if event.target.textContent is true, i.e. its not an empty string, then it returns and doesnt compare itself with already active cards because other conditions include if firstCard and secondCard are true etc. 

// firstCard.classList.add('active');
// secondCard.classList.add('active');

// function checkIfAlrMatched() {
//     [].classList
//     if (cards.classList.contains('active')) {
//         cards.removeEventListener()
//     }
// }
