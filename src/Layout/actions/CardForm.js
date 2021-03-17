import React from 'react';

function CardForm({deck,submitForm,formData,handleChange}) {
  
  return (
    <div>
      <h2>{deck.name}</h2>
  <form onSubmit={submitForm}>
               <textarea
               
               required="true"
               placeholder="Card Front"
               name="front"
               value={formData.front}
               required={true}
               onChange={handleChange}
               ></textarea>
               <br></br>
               <textarea
              
               required="true"
               placeholder="Card Back"
               name="back"
               value={formData.back}
               required={true}
               onChange={handleChange}
               ></textarea>
               <button type="submit">Submit</button>
            </form>
      </div>
  )
}
export default CardForm;