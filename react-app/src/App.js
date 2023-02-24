import React, { useState } from 'react';
import './App.css';
import InputForm from "./components/InputForm"
import List from "./components/List"

var initialList = [{listName: "Presbo", listEmail: "presbo@columbia.edu"}, {listName: "John Jay Mouse", listEmail: "mouse@columbia.edu"}, {listName: "Water Bottle Man", listEmail: "flipper@columbia.edu"}]

function App() {
  const [list, setList] = useState(initialList); //can be accessed in inputform through props

  return (
    <div className="App">
      <img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" alt="logo" id="logo"></img>
      <h1 className="heading">Spectator's Sources</h1>
      <InputForm list = {list} setList = {setList} />
      <List list = {list} setList = {setList}/>
    </div>
  );
}

export default App;
