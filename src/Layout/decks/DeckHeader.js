import React from 'react';


function DeckHeader ({deck,url}) {
  
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
                    <a href={`${url}/edit`} className="btn btn-secondary mx-1"><span className="oi oi-pencil"></span> Edit</a>
                    <a href={`${url}/study`} className="btn btn-primary mx-1">Study</a>
                    <a href={`${url}/cards/add`} className="btn btn-primary mx-1">Add Cards</a>

                </div>
            </div>   
        </div>      
    )  
}

export default DeckHeader;