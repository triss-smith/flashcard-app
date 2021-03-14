import React,{ useState } from 'react';
import {updateDeck,listDecks} from "../../utils/api/index.js"
import {useHistory} from 'react-router-dom'
function EditDeck({deck}) {
    const deckId = deck.id;
    const initial = {
        name: "",
        description: "",
    }
    const [formData,setFormData] = useState({...initial})
    let history = useHistory();
    const handleChange = ({target}) => {
        setFormData({...formData,[target.name]:target.value})
    };
    async function handleSubmit(event) {
        event.preventDefault();
        const abortController = new AbortController();
        await updateDeck({...formData,id:deck.id},abortController.signal);
        setFormData({...initial})
        
        history.push(`/decks/${deck.id}`)
    }

    console.log(deck.id)
    return (
       
              <div>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">CreateDeck</li>
            </ol>
            </nav>
            <form onSubmit={handleSubmit}>
               <input 
               type="text"
               required="true"
               placeholder="Deck Name"
               name="name"
               value={formData.name}
               required={true}
               onChange={handleChange}
               /> 
               <br></br>
               <input
               type="text"
               required="true"
               placeholder="Description"
               name="description"
               value={formData.description}
               required={true}
               onChange={handleChange}
               />
               <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EditDeck;