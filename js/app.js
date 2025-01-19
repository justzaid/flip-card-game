/*-------------------------------- Constants --------------------------------*/

const symbols = ['🦅','🦍','🦔','🦜','🦑','🦚','🐢','🐎','🐈','🐕','🦘','🐄','🐓','🦆','🐳','🐬']

/*---------------------------- Variables (state) ----------------------------*/

let firstCard;
let secondCard;
let chances = 10;

/*------------------------ Cached Element References ------------------------*/

const chanceLeft = document.querySelector('#chance')
const totalScore = document.querySelector('#score')
const gameBoard = document.querySelector('#board')
const cards = document.querySelectorAll('.sqr')

/*-------------------------------- Functions --------------------------------*/

function cardToggle(event) {
    console.log('I am clicked')
}


/*----------------------------- Event Listeners -----------------------------*/

cards.forEach(card => {
    card.addEventListener('click', cardToggle)
});

/*----------------------------- Psuedo Code -----------------------------*/

/* 

The cards should be initalized randomly and should be different after reseting.
The cards should contain event listeners that register a click event.
The cards should be able to display the icon it represents underneath.
The first selected card must be differentiated against the second selected card.
If the cards do not match, then both should return back to their inital stage and reduce chances by 1.






*/