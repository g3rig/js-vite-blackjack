import { requestCard, cardValue, createCardHTML } from './';

/**
 *
 * @param {Number} puntosMinimos puntos minimos que a com necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck baraja de cartas
 */

export const comTurn = (
    puntosMinimos,
    puntosHTML,
    divCartasComputadora,
    deck = []
) => {
    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = requestCard(deck);

        puntosComputadora = puntosComputadora + cardValue(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = createCardHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana');
        }
    }, 100);
};
