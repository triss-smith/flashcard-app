import React,{ useState } from "react"
import {useRouteMatch} from "react-router-dom"

function Study({deck={cards:[{front:"",back:""}]},url}) {
  
  if (deck.cards === [] || deck.cards.length < 3) {
    console.log(url);
        return (
          <div>
            <h2>{deck.name}</h2>
                <h3>Not enough cards</h3>
            <button href={`${url}/cards/new`} className="btn btn-primary">Add Cards</button>
          </div>
            
        )
    }
  const [card,setCard] = useState(deck.cards[0])
  const [view,setView] = useState(card.front);
  const [nextButtonView,setNextButtonView] = useState(false);
  const flipHandler = () => {
    if(view == card.front) {
      setView(card.back);
      setNextButtonView(true);
      return (<button >Next</button>)
      
    }
    else {
      setView(card.front);
    }
  }
     
     return (
  <div>
      <div>
      <h2>{deck.name}</h2>
        <h2>Card {deck.cards.indexOf(card) + 1 } of {deck.cards.length}</h2>
      </div>
      <div>
      {view}
        <button onClick={flipHandler}>Flip</button>
        {nextButtonView ? (<button>Next</button>) : ""}
      </div>
      
      
    </div>
  )

   
}  
 

export default Study;