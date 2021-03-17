import React,{ useState,useEffect } from 'react';
import { useParams,Link,useRouteMatch,Route,Switch } from "react-router-dom";
import {listCards, readDeck} from "../../utils/api/index.js";
import Cards from "../cards/Cards.js";
import EditDeck from "../actions/EditDeck.js"
import CreateCard from "../actions/CreateCard.js"
import EditCard from "../actions/EditCard.js"
import Study from "../actions/Study.js"
import DeckHeader from "./DeckHeader.js";
import NotFound from "../NotFound.js"
function Deck({decks}) {
    const [deck,setDeck] = useState({});
    let {deckId} = useParams();
    
    useEffect(() => {
        
        const abortController = new AbortController();
        
        async function loadDeck() {
            try{
                let deckResponse = await readDeck(deckId,abortController.signal);
                
                
                setDeck(deckResponse);
                
            }
            catch (error) {
                console.log(error,"what")
            }
        }
        loadDeck();
        return () => {
            abortController.abort();
        }
    },[decks])
    let {url} = useRouteMatch();
     if(!deck.cards) {
       return (
       <div> <NotFound/></div>
       )
     }
    
    return (
        <div>
            <Switch>
              <Route path={`${url}/study`}>
                
                <Study deck={deck} url={url}/>
              </Route>
            <Route path={`${url}/edit`}>
                <EditDeck deck={deck}/>
            </Route>
              
              <Route exact={true} path={`${url}/cards/new`}>
                <CreateCard deck={deck} />
              </Route>
              <Route exact={true} path={`${url}/cards/:cardId/edit`}>
                <EditCard deck={deck.cards}/>
              </Route>
              
            <Route>
            <DeckHeader deck={deck} url={url}/>
            <Cards cards={deck.cards} />  
            </Route>             
            </Switch>
        </div>
    );
    
}

export default Deck;