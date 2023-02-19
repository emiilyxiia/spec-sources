import './App.css';
import InputForm from "./components/InputForm"
import List from "./components/List"

function App() {
  return (
    <div className="App">
      <img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" alt="logo" id="logo"></img>
      <h1 className="heading">Spectator's Sources</h1>
      <InputForm/>
      <List/>
    </div>
  );
}

export default App;
