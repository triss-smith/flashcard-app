import React from 'react';

function Cards({cards}) {
    let cardsList = cards.map((element,index) => {
        <div class="card" key={index}>
  <div class="card-body">
    {element.front}
  </div>
</div>

    })
    console.log(cards)
    return (
        <div>
           {cardsList} 
        </div>
    );
}

export default Cards;