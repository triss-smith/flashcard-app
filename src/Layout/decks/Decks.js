import React, { useEffect,useState } from 'react';
import {listDecks} from "../../utils/api/index.js"
import Deck from "./Deck.js";
import { Route,Switch,useRouteMatch,Link } from "react-router-dom"

function Decks({decks}) {
    let formattedDecks = decks.map((element,index) => {
        return (
        <div class="card" key={index}>
  
  <div class="card-body">
    <h5 class="card-title">{element.name}</h5>
    <p class="card-text">{element.description}</p>
    <Link to={`/decks/${element.id}`} class="btn btn-primary">Go somewhere</Link>
  </div>
</div>)})
    return (
        <div>
            {formattedDecks}
           <div>
               </div> 
            <Link to={`/decks`}>n</Link>
            <Switch>
            
            </Switch>
        </div>
    );
}

export default Decks;