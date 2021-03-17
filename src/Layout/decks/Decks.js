import React, { useEffect,useState } from 'react';
import {listDecks,deleteDeck,listCards} from "../../utils/api/index.js"
import Deck from "./Deck.js";
import { Route,Switch,useRouteMatch,Link,useHistory } from "react-router-dom";
import CreateDeck from "../actions/CreateDeck.js"


function Decks({decks}) {
     
    /*useEffect(() => {
      const abortController = new AbortController();
      async function loadCards() {
        try{
          let response = await listCards()
        }
      }
    })*/
    let history = useHistory();
  
     function deleteHandler(deck) {
        const abortController = new AbortController();
        
        if(window.confirm("Delete this deck?")) {

           deleteDeck(deck.id,abortController.signal)
            history.push("/")
                }}
    let formattedDecks = decks.map((element,index) => {
      return (<DeckItem deck={element} key={index}/>)
    })

    return (        
        <div>            
            <div>
            {formattedDecks}
            </div>
           <div>
               </div> 
            <Switch>
                
            </Switch>
        </div>
    );
}
function DeckItem({deck}) {   
        return (
        <div className="card" key={deck.id}>
  
  <div className="card-body">
    <h5 className="card-title">{deck.name}</h5>
    <p className="card-text">{deck.description}</p>  
    <p className="card-length">{`${deck.cards.length} cards`} </p>
    <Link to={`/decks/${deck.id}`} className="btn btn-secondary mx-1">View</Link>
    <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mx-1">Study</Link>
    <button className="btn btn-danger mx-1" onClick={() => deleteHandler(element)}>Delete</button>
  </div>
</div>)}

export default Decks;