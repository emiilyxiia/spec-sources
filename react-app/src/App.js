import React, { useState } from 'react';
import './App.css';
import InputForm from "./components/InputForm"
import List from "./components/List"

var initialList = [{listName: "Presbo", listEmail: "presbo@columbia.edu"}, {listName: "John Jay Mouse", listEmail: "mouse@columbia.edu"}, {listName: "Water Bottle Man", listEmail: "flipper@columbia.edu"}]

function App() {
  const [sourceList, setList] = useState(initialList); 
  
  function addSource(sourceTitle, sourceEmail) {
    const updatedList = [...sourceList, {listName: sourceTitle, listEmail: sourceEmail}]
    setList(updatedList);
  }
  
  function deleteSource(idx) {
    const updatedList = sourceList.slice(0,idx-1).concat(sourceList.slice(idx));
    setList(updatedList);
  }

  return (
    <div className="App">
      <img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" alt="logo" id="logo"></img>
      <h1 className="heading">Spectator's Sources</h1>
      <InputForm adder = {addSource} id = "form"/>
      <List list = {sourceList} deleter = {deleteSource}/>
    </div>
  );
}

export default App;
