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
let timeLeft = 45;
let timeInterval = null;
cardId = 0;

/*------------------------ Cached Element References ------------------------*/

const timerElement = document.getElementById('time')
const totalScore = document.querySelector('#score')
const gameBoard = document.querySelector('#board')
const cards = document.querySelectorAll('.sqr')
const resetButton = document.querySelector('#resetter')
const timeText = document.getElementById('time-left')

/*-------------------------------- Functions --------------------------------*/


function render() {
    console.log('I am watching.')
}

function countDown() {
    if(!timeInterval){
        timeInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft + ' Seconds';
            if (timeLeft <= 45 && timeLeft > 35) {
                timerElement.classList.add('safe')
            } else if (timeLeft <= 35 && timeLeft > 15) {
                timerElement.classList.remove('safe')
                timerElement.classList.add('caution')
            } else if (timeLeft <= 15 && timeLeft > 0) {
                timerElement.classList.remove('caution')
                timerElement.classList.add('danger')
            } else {                
                timerElement.textContent = 'Time is up!' 
                stopClock()
                restartGame()
            }
        }, 1000);
    }
}

function flipCards() {
    firstCard.textContent = '';
    secondCard.textContent = '';
}


function nextTurn(match = false) {

    firstCard.classList.remove('checker', 'animate__headShake')
    secondCard.classList.remove('checker', 'animate__headShake')

    if (!match) {
        flipCards()
    }

    firstCard = null
    secondCard = null
}


function stopClock() {
    if (timeInterval) {
        clearInterval(timeInterval)
        timeInterval = null;
        timerElement.style.color = 'red';
    }
}

function restartAny() {
    resetButton.addEventListener('click', () => {
        location.reload();
    });
}

function restartGame() {

    resetButton.classList.remove('btn-danger')
    resetButton.classList.add('btn-success')
    clearInterval(timeInterval)

    resetButton.addEventListener('click', () => {
        location.reload();
    });
}


function checkIfMatch() {

    if (firstCard.textContent === secondCard.textContent) {
        console.log('It is a match');

        firstCard.classList.add('active');
        secondCard.classList.add('active');

        firstCard.classList.add('animate__rubberBand')
        secondCard.classList.add('animate__rubberBand')

        const allCards = [...cards]
        const boardIsComplete = allCards.every((card) => {
            return card.classList.contains('active')
        })

        if (boardIsComplete) {
            firstCard.classList.remove('checker')
            secondCard.classList.remove('checker')

            confetti.start(5000);
            onWin();
            timeText.textContent = `🎉 You win! You beat the timer at: `;

            if (typeof confetti !== 'undefined') {
                confetti.start(5000);
            } else {
                console.error('Confetti library not loaded');
            }
            
            restartGame()
            return
        }
        nextTurn(true)
    } else {
        console.log('It is not a match')
        firstCard.classList.add('animate__headShake');
        secondCard.classList.add('animate__headShake');
        setTimeout(nextTurn, 1000)
    }

}

function cardHandle(event) {

    if (( firstCard && secondCard ) || (  firstCard && firstCard.id === event.target.id ) || event.target.textContent || timeLeft === 0) {
        return
    }
    
    cardId = event.target.id;
    const cardElement = event.target;
    cardElement.textContent = symbols[cardId].icon;

    
    if (firstCard === null) {
        countDown()
        firstCard = cardElement;
        cardElement.classList.add('checker')
        console.log(firstCard)
    } else {
        secondCard = cardElement;
        cardElement.classList.add('checker')
        console.log(secondCard)
        checkIfMatch()
    }

}


function shuffleCards(symbols) {
    let currentIdx = symbols.length;
    while (currentIdx != 0) {
        let randomIdx = Math.floor(Math.random() * currentIdx);
        currentIdx--;
        [symbols[currentIdx], symbols[randomIdx]] = [
            symbols[randomIdx], symbols[currentIdx]];
    }
}

function onWin() {
  const audio = document.getElementById('winAudio');
  if (audio) {
    audio.play();
  }
}


/*----------------------------- Event Listeners -----------------------------*/

cards.forEach(card => {
    card.addEventListener('click', cardHandle);
});

/*--------------------------------- Function Calling--------------------------------------*/

function init() {
    render()
    shuffleCards(symbols)
    restartAny()
}

init()

