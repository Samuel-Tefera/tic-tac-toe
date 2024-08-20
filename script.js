'use strict';

const valueBoxs = document.querySelectorAll( '.value-box' );
const values = document.querySelectorAll( '.value' );
const turnBox = document.querySelector( '.turn-box' );
const turnX = document.querySelector( '.turn-x' );
const turnO = document.querySelector( '.turn-o' )
const resultBoard = document.querySelector( '.result-board' );
const resultMsg = resultBoard.querySelector( 'p' );
const scoreXEL = document.querySelector( '.score-x' ).querySelector('span');
const scoreOEl = document.querySelector( '.score-o' ).querySelector('span');

let scoreX = 0;
let scoreO = 0;

let x_turn = true;
let chance = 9;

const gameBoardInit = ( values ) => {
    scoreXEL.textContent = scoreX;
    scoreOEl.textContent = scoreO;
    for ( let i = 0; i < values.length; i++ ){
        values[i].classList.add('hidden')
    }
}

const gameEnd = ( values ) => {
    for ( let i = 0; i < values.length; i++ ){
        values[i].classList.add('hold__value-box')
    }
}

// Intialize a game => make a gameboard empty
gameBoardInit( values )

// Manage which player turn
const handleTurn = () => {
    turnO.classList.toggle('dark-bg')
    turnX.classList.toggle('dark-bg')
}

// Change background color on winned row and column
const changeBoardBG = ( values, i, j, k ) => {
    values[i].parentElement.classList.add('dark-bg')
    values[j].parentElement.classList.add('dark-bg')
    values[k].parentElement.classList.add('dark-bg')
}

// Find if ther a game winner
const getWinner = ( values, chance ) => {
    if ( ( values[ 0 ].textContent === values[ 1 ].textContent )
        && values[ 1 ].textContent === values[ 2 ].textContent ) {
        changeBoardBG(values, 0, 1, 2)
        if ( values[ 0 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 3 ].textContent === values[ 4 ].textContent )
        && values[ 3 ].textContent === values[ 5 ].textContent ) {
        changeBoardBG(values, 3, 4, 5)
        if ( values[ 3 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 6 ].textContent === values[ 7 ].textContent )
        && values[ 6 ].textContent === values[ 8 ].textContent ) {
        changeBoardBG(values, 6, 7, 8)
        if ( values[ 6 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 0 ].textContent === values[ 3 ].textContent )
        && values[ 0 ].textContent === values[ 6 ].textContent ) {
        changeBoardBG(values, 0, 3, 6)
        if ( values[ 0 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 1 ].textContent === values[ 4 ].textContent )
        && values[ 1 ].textContent === values[ 7 ].textContent ) {
        changeBoardBG(values, 1, 4, 7)
        if ( values[ 1 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 2 ].textContent === values[ 5 ].textContent )
        && values[ 2 ].textContent === values[ 8 ].textContent ) {
        changeBoardBG(values, 2, 5, 8)
        if ( values[ 2 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 0 ].textContent === values[ 4 ].textContent )
        && values[ 0 ].textContent === values[ 8 ].textContent ) {
        changeBoardBG(values, 0, 4, 8)
        if ( values[ 0 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 2 ].textContent === values[ 4 ].textContent )
        && values[ 2 ].textContent === values[ 6 ].textContent ) {
        changeBoardBG(values, 2, 4, 6)
        if ( values[ 2 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( chance === 0 ) {
        return 'draw'
    }
}

const manageBoard = ( turnBox, resultBoard ) => {
    turnBox.classList.add( 'hidden' );
    resultBoard.classList.remove( 'disable' );
}

// Dispaly result message
const handleResultMsg = () => {
    chance--; // Decrease player chance by 1
    const result = getWinner(values, chance)
    if ( result === 'x' ) {
        manageBoard( turnBox, resultBoard );
        resultMsg.textContent = 'Player X Win 🏆';
        scoreX++;
        gameEnd( values );
    }
    else if ( result === 'o' ) {
        manageBoard( turnBox, resultBoard );
        resultMsg.textContent = 'Player O Win 🏆';
        scoreO++;
        gameEnd( values );
    }
    else if ( result === 'draw' ) {
        manageBoard( turnBox, resultBoard );
        resultMsg.textContent = 'Draw 🤝';
        gameEnd( values );
    }
}

const manageGame = (valueBox, value) => {
    valueBox.classList.add( 'hold__value-box' )
    value.classList.remove( 'hidden' );
    handleTurn()
    handleResultMsg()
}

valueBoxs.forEach( valueBox => {
    valueBox.addEventListener( 'click', () => {
        const value = valueBox.querySelector( '.value' )
        if ( value.classList.contains( 'hidden' ) &&
             !value.classList.contains('hold__value-box') ) {
            if ( x_turn ) {
                value.textContent = 'X';
                manageGame(valueBox, value)
                x_turn = false;
            }
            else {
                value.textContent = 'O';
                manageGame(valueBox, value)
                x_turn = true;
            }
        }
    })
} )
