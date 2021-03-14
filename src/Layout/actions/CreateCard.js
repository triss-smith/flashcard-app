import React,{ useState,useEffect } from 'react';
import { useParams,Link,useRouteMatch,Route,Switch,useHistory } from "react-router-dom";
import {createCard} from "../../utils/api/index.js";

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
        await createCard(deck.id,formData,abortController.signal);
        setFormData({...initial})
        
        history.push(`/decks/${deck.id}`)
    }

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
               placeholder="Front"
               name="front"
               value={formData.front}
               required={true}
               onChange={handleChange}
               /> 
               <br></br>
               <input
               type="text"
               required="true"
               placeholder="Back"
               name="back"
               value={formData.back}
               required={true}
               onChange={handleChange}
               />
               <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateCard;