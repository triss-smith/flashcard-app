import React, { useEffect,useState } from 'react';
import {listDecks,deleteDeck} from "../../utils/api/index.js"
import Deck from "./Deck.js";
import { Route,Switch,useRouteMatch,Link,useHistory } from "react-router-dom";
import CreateDeck from "../actions/CreateDeck.js"


function Decks({decks}) {

    let history = useHistory();

     function deleteHandler(deck) {
        const abortController = new AbortController();
        
        if(window.confirm("Delete this deck?")) {

           deleteDeck(deck.id,abortController.signal)
            history.push("/")
                }}
    let formattedDecks = decks.map((element,index) => {
        return (
        <div className="card" key={index}>
  
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">{element.description}</p>
    <Link to={`/decks/${element.id}`} className="btn btn-secondary mx-1">View</Link>
    <Link to={`/decks/${element.id}/study`} className="btn btn-primary mx-1">Study</Link>
    <button className="btn btn-danger mx-1" onClick={() => deleteHandler(element)}>Delete</button>
  </div>
</div>)})

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

export default Decks;