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

let firstCard;
let secondCard;
let checkBoard = false;
let chances = 10;

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


// Card Toggler - When clicked

function cardToggle(event) {
    const cardId = event.target.id;
    event.target.textContent = symbols[cardId].icon;
    console.log(symbols[cardId].name)
    
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

// Check if the cards match


function checkIfMatch(firstCard) {
    if (firstCard === secondCard) {
        return;
    } 
}

/*----------------------------- Event Listeners -----------------------------*/

// Event listener that registers a click and runs the cardToggle function

cards.forEach(card => {
    card.addEventListener('click', cardToggle);
});


/*--------------------------------- Function Calling--------------------------------------*/

render()
shuffleCards(symbols)

/*----------------------------- Psuedo Code -----------------------------*/

/* 

The cards should be initalized randomly and should be different after reseting.
The cards should contain event listeners that register a click event.
The cards should be able to display the icon it represents underneath.
The first selected card must be differentiated against the second selected card.
If the cards do not match, then both should return back to their inital stage and reduce chances by 1.



*/