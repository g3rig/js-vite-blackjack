/**
 * Pide una carta de la baraja
 * @param {Array<String>} deck
 * @returns {String} Retorna una carta de la baraja
 */

export const requestCard = (deck) => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
};
