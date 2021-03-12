import React,{useState,useEffect} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {BrowserRouter as Router,Route,Switch,useRouteMatch,Link} from 'react-router-dom';
import Decks from "./decks/Decks.js";
import {listDecks} from "../utils/api/index.js"
import Deck from "./decks/Deck.js";

function Layout() {
  const [decks,setDecks] = useState([]);
    useEffect(() => {
        
        const abortController = new AbortController();
                  
            listDecks(abortController.signal).then(setDecks);
                  
        
      
  
    return () => {abortController.abort()}
    },[])
    

  return (
    <div>
      <Header />
      <div className="container">
        <Router>
        <Switch>
        <Route exact={true} path="/">
          <Decks decks={decks}/>
        </Route>
        <Route path={`/decks/:deckId`}>
                <Deck decks={decks} />
            </Route>
        <Route>
          <NotFound />
        </Route>
        </Switch>
        </Router>
      </div>
    </div>
  )
  }

export default Layout;
