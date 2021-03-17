import React from 'react';
import {useRouteMatch,useHistory} from 'react-router-dom'
import {deleteCard} from "../../utils/api/index.js"
function Cards({cards}) {
    const {url} = useRouteMatch();
    const history = useHistory();
    console.log(url);
     function deleteCards(cardId) {
        const abortController = new AbortController();
        try{
         deleteCard(cardId,abortController.signal)
        }
        catch(error) {
            console.log(error);
        }
    }
    let cardsList = cards.map((element,index) => {
        return (<div className="card" key={index}>
  <div className="card-body">
    <p>{element.front}</p>
    
  </div>
  <p>{element.back}</p>
  <button className="btn btn-secondary" onClick={() => history.push(`${url}/cards/${element.id}/edit`)}>Edit</button>
  <button className="btn btn-danger" onClick={() => deleteCards(element.id)}>Delete</button>
</div>)})
    return (
        <div>
           {cardsList} 
        </div>
    );
}

export default Cards;