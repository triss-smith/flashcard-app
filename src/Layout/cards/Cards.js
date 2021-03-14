import React from 'react';

function Cards({cards}) {
    console.log(cards)
    let cardsList = cards.map((element,index) => {
        return (
        <div className="card" key={index}>
            <div className="card-body">
                {element.front}
            </div>
            <button className="btn btn-danger">Delete</button>
        </div>
        )})
    return (
        <div>
           {cardsList} 
        </div>
    );
}

export default Cards;