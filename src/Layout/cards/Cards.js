import React from 'react';

function Cards({cards}) {
    let cardsList = cards.map((element,index) => {
        return (<div className="card" key={index}>
  <div className="card-body">
    <p>{element.front}</p>
    
  </div>
  <p>{element.back}</p>
</div>)})
    return (
        <div>
           {cardsList} 
        </div>
    );
}

export default Cards;