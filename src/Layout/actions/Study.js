import React,{ useEffect, useState } from "react"
import {Link,useHistory} from "react-router-dom"

function Study({deck,cards,url}) {
    
    const [card,setCard] = useState(deck.cards[0])
    const [view,setView] = useState(cards);
  const [nextButtonView,setNextButtonView] = useState(false);
  const [cardIndex,setCardIndex] = useState(1)
  
  const history = useHistory();
 console.log(cards);
 
   if (deck.cards === [] || deck.cards.length < 3) {
        console.log(url);
            return (
              <div>
                  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href={`${url}`}>{deck.name}</a></li>
    <li class="breadcrumb-item active" aria-current="page">Study</li>
  </ol>
</nav>
                <h2>{deck.name}</h2>
                    <h3>Not enough cards</h3>
                <Link to={`${url}/cards/new`} className="btn btn-primary">Add Cards</Link>
              </div>
                
            )
        } 
  else{
      
  const flipHandler = () => {
    if(view == card.front) {
      setView(card.back);
      setNextButtonView(true);
      
      
      
    }
    else{
      setView(card.front);
    }
  }
     const nextHandler = () => {
         if(cardIndex < deck.cards.length) {
         setCardIndex(() => cardIndex + 1)
         setCard(deck.cards[cardIndex]);
         setView(deck.cards[cardIndex].front);
         setNextButtonView(false)
         
         console.log(cardIndex);
         }
         else {
             if(window.confirm(`Restart Cards? \n Click "cancel" to return to the home page.`)) {
                 setCard(deck.cards[0]);
                 setView(deck.cards[0].front);
                 setNextButtonView(false);
                 setCardIndex(1)
             }
             else {
                setCard(deck.cards[0]);
                setView(deck.cards.front);
                setNextButtonView(false);
                 history.push("/")
             }
         }
     }
     console.log(view);
     return (
  <div>
       <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href={`${url}`}>{deck.name}</a></li>
    <li class="breadcrumb-item active" aria-current="page">Study</li>
  </ol>
</nav>
      <div>
      <h2>{deck.name}</h2>
        <h2>Card {cardIndex} of {deck.cards.length}</h2>
      </div>
      <div>
      {view == cards ? (<p>{cards[0].front}</p>) : (<p>{view}</p>)}
        <button onClick={flipHandler}>Flip</button>
        {nextButtonView ? (<button onClick={nextHandler}>Next</button>) : ""}
      </div>
      
      
    </div>
  )

     }
}  
 

export default Study;