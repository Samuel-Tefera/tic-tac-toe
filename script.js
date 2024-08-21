'use strict';

const valueBoxs = document.querySelectorAll( '.value-box' );
const values = document.querySelectorAll( '.value' );
const turnBox = document.querySelector( '.turn-box' );
const turnX = document.querySelector( '.turn-x' );
const turnO = document.querySelector( '.turn-o' )
const resultBoard = document.querySelector( '.result-board' );
const resultMsg = resultBoard.querySelector( 'p' );
const scoreXEL = document.querySelector( '.score-x' ).querySelector('span');
const scoreOEl = document.querySelector( '.score-o' ).querySelector( 'span' );

let scoreX = 0;
let scoreO = 0;

let x_turn = true;
let chance = 9;

const gameBoardInit = ( values ) => {
    chance = 9
    for ( let i = 0; i < values.length; i++ ){
        turnBox.classList.remove( 'hidden' );
        resultBoard.classList.add( 'disable' );
        valueBoxs[ i ].classList.remove( 'dark-bg' );
        values[ i ].textContent = i;
        values[ i ].classList.remove( 'hold__value-box' );
        values[ i ].classList.add( 'hidden' );
    }
}

const gameEnd = ( values ) => {
    for ( let i = 0; i < values.length; i++ ){
        values[i].classList.add('hold__value-box')
    }
}

// Intialize a game => make a gameboard avilable
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

// check if a game got a winner
const isThereWinner = (values, i, k, j ) => {
    if ( ( values[ i ].textContent === values[ j ].textContent )
        && values[ i ].textContent === values[ k ].textContent ) {
        changeBoardBG( values, i, j, k );
        return true;
    }
}

// select winner from X and O
const selectWinner = ( values, i ) => {
    if ( values[ i ].textContent === 'X' ) {
        return 'x';
    }
    else {
        return 'o';
    }
}

// Find if ther a game winner
const getWinner = ( values, chance ) => {
    if ( isThereWinner( values, 0, 1, 2 ) ) {
        return selectWinner(values, 0)
    }
    else if ( isThereWinner(values, 3, 4, 5) ) {
        return selectWinner(values, 3)
    }
    else if ( isThereWinner(values, 6, 7, 8)) {
        return selectWinner(values, 6)
    }
    else if ( isThereWinner(values, 0, 3, 6)) {
        return selectWinner(values, 0)
    }
    else if (isThereWinner(values, 1, 4, 7) ) {
        return selectWinner(values, 1)
    }
    else if ( isThereWinner(values, 2, 5, 8) ) {
        return selectWinner(values, 2)
    }
    else if ( isThereWinner(values, 0, 4, 8)) {
        return selectWinner(values, 0)
    }
    else if ( isThereWinner(values, 2, 4, 6) ) {
        return selectWinner(values, 2)
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
        scoreXEL.textContent = scoreX;
        gameEnd( values );
    }
    else if ( result === 'o' ) {
        manageBoard( turnBox, resultBoard );
        resultMsg.textContent = 'Player O Win 🏆';
        scoreO++;
        scoreOEl.textContent = scoreO;
        gameEnd( values );
    }
    else if ( result === 'draw' ) {
        manageBoard( turnBox, resultBoard );
        resultMsg.textContent = 'Draw 🤝';
        gameEnd( values );
    }
}

const manageGame = (valueBox, value) => {
    valueBox.classList.add( 'hold__value-box' );
    value.classList.remove( 'hidden' );
    handleTurn()
    handleResultMsg()
}

const startGame = () => {
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
}

// Start a new game
startGame()

// start a game after updating score
playAgainBtn.addEventListener( 'click', () => {
    gameBoardInit( values );
    startGame()
} )
