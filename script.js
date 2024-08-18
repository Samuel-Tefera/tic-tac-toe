'use strict';

const valueBoxs = document.querySelectorAll( '.value-box' )
const values = document.querySelectorAll( '.value' )
const turnMsg = document.querySelector( '.turn-msg' )
const turn = turnMsg.querySelector('span')


const game_init = ( values ) => {
    for ( let i = 0; i < values.length; i++ ){
        values[i].classList.add('hidden')
    }
}

// Intialize a game => make a gameboard empty
game_init( values )

// Determine game result
const getWinner = (values) => {
    if ( ( values[ 0 ].textContent === values[ 1 ].textContent )
        && values[ 1 ].textContent === values[ 2 ].textContent ) {
        if ( values[ 0 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 3 ].textContent === values[ 4 ].textContent )
        && values[ 3 ].textContent === values[ 5 ].textContent ) {
        if ( values[ 3 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 6 ].textContent === values[ 7 ].textContent )
        && values[ 6 ].textContent === values[ 8 ].textContent ) {
        if ( values[ 6 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 0 ].textContent === values[ 3 ].textContent )
        && values[ 0 ].textContent === values[ 6 ].textContent ) {
        if ( values[ 0 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 1 ].textContent === values[ 4 ].textContent )
        && values[ 1 ].textContent === values[ 7 ].textContent ) {
        if ( values[ 1 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 2 ].textContent === values[ 5 ].textContent )
        && values[ 2 ].textContent === values[ 8 ].textContent ) {
        if ( values[ 2 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 0 ].textContent === values[ 4 ].textContent )
        && values[ 0 ].textContent === values[ 8 ].textContent ) {
        if ( values[ 0 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }
    else if ( ( values[ 2 ].textContent === values[ 4 ].textContent )
        && values[ 2 ].textContent === values[ 6 ].textContent ) {
        if ( values[ 2 ].textContent === 'X' ) {
            return 'x';
        }
        else {
            return 'o'
        }
    }

}

let x_turn = true;
valueBoxs.forEach( valueBox => {
    valueBox.addEventListener( 'click', () => {
        const value = valueBox.querySelector( '.value' )
        if ( value.classList.contains( 'hidden' ) ) {
            if ( x_turn ) {
                value.textContent = 'X';
                value.classList.add( 'x-value' );
                value.classList.remove( 'hidden' );
                x_turn = false;
                console.log(getWinner(values));
                turnMsg.classList.replace('turn-x', 'turn-o');
                turn.textContent = 'O';
            }
            else {
                value.textContent = 'O';
                value.classList.add( 'o-value' );
                value.classList.remove( 'hidden' );
                x_turn = true;
                console.log(getWinner(values));
                turnMsg.classList.replace( 'turn-o', 'turn-x' )
                turn.textContent = 'X'
            }
        }
    })
} )
