import React, {useState} from 'react';

function InputForm({adder})
{
  const [sourceTitle, setSourceTitle] = useState("");
  const [sourceEmail, setSourceEmail] = useState("");

  function submit() 
  {
      adder(sourceTitle, sourceEmail)
      setSourceTitle("");
      setSourceEmail("");
      document.getElementById("nameField").value = "";
      document.getElementById("emailField").value = "";
  }
  
    return(
        <div className = "nav__container">
        <span className = "nav__text">Source Name: <input className = "input_field" type="text" 
          onChange={(e) => setSourceTitle(e.target.value)} id = "nameField"></input></span>

        <span className = "nav__text">Source Email: <input className = "input_field" type="text" 
          onChange={(e) => setSourceEmail(e.target.value)} id = "emailField"></input></span>

        <button onClick={() => {submit()}} className = "button" id = "add" type="button">ADD</button>
      </div>
    );
}

export default InputForm;