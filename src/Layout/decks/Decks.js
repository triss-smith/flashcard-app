import React, { useEffect,useState } from 'react';
import {listDecks} from "../../utils/api/index.js"

function Decks() {
    const [decks,setDecks] = useState([]);
    useEffect(() => {
        const abortController = new AbortController();
        async function loadDecks() {
        try {            
                let response = listDecks(abortController.signal);
                console.log(response);
                let decksFromAPI = await response.json;
                setDecks(decksFromAPI);
            }        
        catch (error) {
            console.log(error)
        }
    }
    loadDecks();

    },[])
    console.log(decks);
    return (
        <div>
            {decks}
        </div>
    );
}

export default Decks;