import React, { useState } from 'react';
import './App.css';
import InputForm from "./components/InputForm";
import List from "./components/List";
import data from './server_symlinks/data_link';


var initialList = [{listName: "Presbo", listEmail: "presbo@columbia.edu"}, {listName: "John Jay Mouse", listEmail: "mouse@columbia.edu"}, {listName: "Water Bottle Man", listEmail: "flipper@columbia.edu"}]
function App() {
  const [list, setList] = useState(data.sources); 
  
  function addSource(source){
    // this is where you will add code to add a source to your list of sources
  }//can be accessed in inputform through props
  
  function deleteSource(source){
    const updatedList = list.slice(0, source).concat(list.slice(source + 1));

    setList(updatedList);
  }

  return (
    <div className="App">
      <img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" alt="logo" id="logo"></img>
      <h1 className="heading">Spectator's Sources</h1>
      <InputForm list = {list} setList = {setList} addSource = {addSource} />
      <List list = {list} setList = {setList} deleteSource = {deleteSource}/>
    </div>
  );
}

export default App;
