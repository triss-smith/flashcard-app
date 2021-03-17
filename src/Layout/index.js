import React,{useState,useEffect} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {BrowserRouter as Router,Route,Switch,useRouteMatch,Link} from 'react-router-dom';
import Decks from "./decks/Decks.js";
import {listDecks} from "../utils/api/index.js"
import Deck from "./decks/Deck.js";
import CreateDeck from "./actions/CreateDeck.js"
import EditDeck from "./actions/CreateDeck.js"

function Layout() {
  const [decks,setDecks] = useState([]);
  
    useEffect(() => {
        
        const abortController = new AbortController();
        async function loadDecks() {
          try{          
            let response = await listDecks(abortController.signal);
            setDecks(response);
          }
          catch(error)  {
            console.log(error,"index.js decks fetch")
          }     
    }
     loadDecks(); 
  
    return () => {abortController.abort()}
    },[])
    const {url} = useRouteMatch();
  return (
    <div>
      <Header />
      <div className="container">
       
        <Switch>
          
        <Route exact={true} path="/">
        <Link className="btn btn-primary" to="/decks/new">Create Deck</Link>

          <Decks decks={decks} />
        </Route>
        <Route path="/decks/new">
          <CreateDeck decks={decks}/>
        </Route>
        <Route path={`/decks/:deckId`}>
            <Deck decks={decks} />
        </Route>
          
        <Route>
          <NotFound />
        </Route>
        </Switch>
        
      </div>
    </div>
  )
  }

export default Layout;
