'use strict';

const valueBoxs = document.querySelectorAll( '.value-box' )
const values = document.querySelectorAll( '.value' )
const turnBox = document.querySelector('.turn-box')
const turnX = document.querySelector('.turn-x')
const turnO = document.querySelector( '.turn-o' )
const resultBoard = document.querySelector( '.result-board' )
const resultMsg = resultBoard.querySelector( 'p' )
const scoreX = document.querySelector('.score-x')
const scoreO = document.querySelector( '.score-o' )

let x_turn = true;
let chance = 9;

const gameInit = ( values ) => {
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
gameInit( values )

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

// Dispaly result message
const handleResultMsg = () => {
    chance--;
    const result = getWinner(values, chance)
    if ( result === 'x' ) {
        turnBox.classList.add( 'hidden' );
        resultBoard.classList.remove( 'disable' );
        resultMsg.textContent = 'Player X Win 🏆';
        gameEnd( values );
    }
    else if ( result === 'o' ) {
        turnBox.classList.add( 'hidden' );
        resultBoard.classList.remove( 'disable' );
        resultMsg.textContent = 'Player O Win 🏆';
        gameEnd( values );
    }
    else if ( result === 'draw' ) {
        turnBox.classList.add( 'hidden' );
        resultBoard.classList.remove( 'disable' );
        resultMsg.textContent = 'Draw 🤝';
        gameEnd( values );
    }
}

valueBoxs.forEach( valueBox => {
    valueBox.addEventListener( 'click', () => {
        const value = valueBox.querySelector( '.value' )
        if ( value.classList.contains( 'hidden' ) &&
             !value.classList.contains('hold__value-box') ) {
            if ( x_turn ) {
                valueBox.classList.add('hold__value-box')
                value.textContent = 'X';
                value.classList.remove( 'hidden' );
                handleTurn()
                handleResultMsg()
                x_turn = false;
            }
            else {
                valueBox.classList.add('hold__value-box')
                value.textContent = 'O';
                value.classList.remove( 'hidden' );
                handleTurn()
                handleResultMsg()
                x_turn = true;
            }
        }
    })
} )
