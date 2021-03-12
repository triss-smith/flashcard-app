import React,{ useState,useEffect } from 'react';
import { useParams,Link,useRouteMatch,Route,Switch } from "react-router-dom";
import {listCards, readDeck} from "../../utils/api/index.js";
import Cards from "../cards/Cards.js"
function Deck({decks}) {
    const [deck,setDeck] = useState({});
    const [cards,setCards] = useState([]);
    let {deckId} = useParams();

    useEffect(() => {
        setDeck({});
        const abortController = new AbortController();
        readDeck(deckId,abortController.signal).then(setDeck);
        listCards(deckId,abortController.signal).then(setCards)
    },[])
    let {url} = useRouteMatch();
    /*let deck = decks.find((item) => 
    {
        console.log(item.id == deckId)
        return item.id == deckId})
        console.log(deck)*/
    return (
        <div>         
            <Cards cards={cards} />               
            
        </div>
    );
}

export default Deck;