import React from 'react';
import Cards from "../cards/Cards.js";

function DeckHeader ({deck,url,cards}) {
    console.log(cards)
    if(cards.length != 0) {
    return (
    <div>
    <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/"><span className="oi oi-home"></span> Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
            </ol>
            </nav>  
            <div className="card">
                
                <div className="card-body">
                    <h5 className="card-title">{deck.name}</h5>
                    <p className="card-text">{deck.description}</p>
                    <a href={`${url}/editDeck`} className="btn btn-secondary mx-1"><span className="oi oi-pencil"></span> Edit</a>
                    <a href="#" className="btn btn-primary mx-1">Study</a>
                    <a href={`${url}/cards/new`} className="btn btn-primary mx-1">Add Cards</a>
                
                </div>
            </div>
            <Cards cards={cards} />    

        </div>      
    )}
    else {
        return(
        <div>
    <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/"><span className="oi oi-home"></span> Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
            </ol>
            </nav>  
            <div className="card">
                
                <div className="card-body">
                    <h5 className="card-title">{deck.name}</h5>
                    <h4>There are no cards yet!</h4>
                    <p className="card-text">{deck.description}</p>
                    <a href={`${url}/editDeck`} className="btn btn-secondary mx-1"><span className="oi oi-pencil"></span> Edit</a>
                    <a href="#" className="btn btn-primary mx-1">Study</a>
                    <a href={`${url}/cards/new`} className="btn btn-primary mx-1">Add Cards</a>

                </div>
            </div>
        </div>  
        )    
    } 
}

export default DeckHeader;