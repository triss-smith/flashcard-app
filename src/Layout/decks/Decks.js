import React, { useEffect,useState } from 'react';
import {listDecks} from "../../utils/api/index.js"
import Deck from "./Deck.js";
import { Route,Switch,useRouteMatch,Link } from "react-router-dom"

function Decks() {
    const [decks,setDecks] = useState([]);
    const {url} = useRouteMatch();
    useEffect(() => {
        setDecks([])
        const abortController = new AbortController();
        async function loadDecks() {
        try {            
                
                 listDecks(abortController.signal).then(data => {setDecks(data)})
                
            }        
        catch (error) {
            console.log(error)
        }
    }
    loadDecks();
    },[])
    let formattedDecks = decks.map(element => {
        return (
        <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">{element.name}</h5>
    <p class="card-text">{element.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>)
    })
    console.log(formattedDecks)
    return (
        <div>
            {formattedDecks}
           <div>
               </div> 
            <Link to={`/decks/:deckId`}>n</Link>

            <Route path={`/decks/:deckID`}>
                <Deck decks={decks} />
            </Route>
        </div>
    );
}

export default Decks;