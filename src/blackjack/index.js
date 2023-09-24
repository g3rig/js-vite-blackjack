import _ from 'underscore';
import {
    createDeck,
    requestCard,
    cardValue,
    comTurn,
    createCardHTML,
} from './useCases/index';
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

deck = createDeck(tipos, especiales);

// requestCard();

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = requestCard(deck);

    puntosJugador = puntosJugador + cardValue(carta);
    puntosHTML[0].innerText = puntosJugador;

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = createCardHTML(carta);
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        comTurn(puntosJugador, puntosHTML, divCartasComputadora, deck);
    } else if (puntosJugador === 21) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        comTurn(puntosJugador, puntosHTML, divCartasComputadora, deck);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    comTurn(puntosJugador, puntosHTML, divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = createDeck(tipos, especiales);

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;
});
