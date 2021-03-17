import React,{ useState } from 'react';
import {updateCard,listDecks} from "../../utils/api/index.js"
import {useHistory,useParams} from 'react-router-dom'
import CardForm from "./CardForm.js"
function EditCard({deck}) {
  let {cardId} = useParams();
  
    const card = deck.find(element => {
      return element.id == cardId
    }) || {};
    const initial = {
        front: card.front,
        back: card.back,
        id: card.id,
        deckId:deck.id
    }
    const [formData,setFormData] = useState({...initial})
    let history = useHistory();
    const handleChange = ({target}) => {
        setFormData({...formData,[target.name]:target.value})
    };
    async function handleSubmit(event) {
        event.preventDefault();
        const abortController = new AbortController();
        await updateCard(formData,abortController.signal);
        setFormData({...initial})
        
        history.push(`/decks/${deck.id}`)
    }

    return (
       
              <div>
            
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Edit Card</li>
            </ol>
            </nav>
        
        <div>{card.front}</div>
        <CardForm deck={deck} submitForm={handleSubmit} formData={formData} handleChange={handleChange}/>
            
        </div>
    );
}

export default EditCard;