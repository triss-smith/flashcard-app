import React,{ useState } from 'react';
import {createCard,listDecks} from "../../utils/api/index.js"
import {useHistory} from 'react-router-dom'
import CardForm from "./CardForm"
function CreateCard({deck}) {
    const initial = {
        front: "",
        back: ""
    }
    const [formData,setFormData] = useState({...initial})
    let history = useHistory();
    const handleChange = ({target}) => {
        setFormData({...formData,[target.name]:target.value})
    };
    async function handleSubmit(event) {
        event.preventDefault();
        const abortController = new AbortController();
        await createCard(deck.id, formData,abortController.signal);
        setFormData({...initial})
        
        history.push(`/decks/${deck.id}`)
    }

    return (
         
              <div>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Add Card</li>
            </ol>
            </nav>
          
           <CardForm deck={deck} submitForm={handleSubmit} formData={formData} handleChange={handleChange}/>
        </div>
    );
}

export default CreateCard;