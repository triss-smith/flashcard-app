import React from 'react';
import { useParams } from "react-router-dom";
function Deck({decks}) {
    let deckId = useParams();

    let deck = decks.find(item => item.id == deckId)
    return (
        <div>
            <p>{deck.name}</p>
        </div>
    );
}

export default Deck;