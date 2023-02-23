function InputForm(list, SetList)
{

    function addSource(source){
      // this is where you will add code to add a source to your list of sources
    }

    return(
        <div className = "nav__container">
        <span className = "nav__text">Source Name: <input className = "input_field" type="text"></input></span>
        <span className = "nav__text">Source Email: <input className = "input_field" type="text"></input></span>
        <button onClick={() => addSource} className = "button" id = "add" type="button">ADD</button>
      </div>
    );
}

export default InputForm;