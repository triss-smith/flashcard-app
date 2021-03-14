import React,{ useState,useEffect } from 'react';
import { useParams,Link,useRouteMatch,Route,Switch } from "react-router-dom";
import {listCards, readDeck} from "../../utils/api/index.js";
import Cards from "../cards/Cards.js";
import EditDeck from "../actions/EditDeck.js"
import CreateCard from "../actions/CreateCard.js"
import DeckHeader from "./DeckHeader.js"

function Deck({decks}) {
    const [deck,setDeck] = useState({});
    const [cards,setCards] = useState([]);
    let {deckId} = useParams();

    useEffect(() => {
        setDeck({});
        const abortController = new AbortController();
        async function loadDeck() {
            try{
                let deckResponse = await readDeck(deckId,abortController.signal);
                let cardsResponse = await listCards(deckId,abortController.signal)
                setDeck(deckResponse);
                setCards(cardsResponse);
            }
            catch (error) {
                console.log(error,"what")
            }
        }
        loadDeck();
        return () => {
            abortController.abort();
        }
    },[])
    let {url} = useRouteMatch();
    /*let deck = decks.find((item) => 
    {
        console.log(item.id == deckId)
        return item.id == deckId})
        console.log(deck)*/
    console.log(url);
    

    return (
        <div>
            <Switch>
            <Route path={`${url}/editDeck`}>
                <EditDeck deck={deck}/>
            </Route>
            <Route path={`${url}/cards/new`}>
                <CreateCard deck={deck}/>
            </Route>
            <Route>
            <DeckHeader deck={deck} url={url} cards={cards}/>
             
            </Route>             
            </Switch>
        </div>
    );
    
}

export default Deck;