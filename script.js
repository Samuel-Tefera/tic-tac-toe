'use strict';

const valueBoxs = document.querySelectorAll( '.value-box' )
const values = document.querySelectorAll( '.value' )

const game_init = ( values ) => {
    for ( let i = 0; i < values.length; i++ ){
        values[i].classList.add('hidden')
    }
}

// Intialize a game => make a gameboard empty
game_init( values )

let x_turn = true;
valueBoxs.forEach( valueBox => {
    valueBox.addEventListener( 'click', () => {
        let value = valueBox.querySelector( '.value' )
        console.log(value);
        if ( x_turn ) {
            value.textContent = 'X';
            value.classList.add( 'x-value' );
            value.classList.remove( 'hidden' );
            x_turn = false;
        }
        else {
            value.textContent = 'O'
            value.classList.add( 'o-value' )
            value.classList.remove( 'hidden' );
            x_turn = true;
        }
    })
})