import Header from "./components/Header";
import Entry from "./components/Entry"
import './App.css';
import data from "./assets/data.js";

function App() {
  console.log(data);
  const entryList = data.map(e => <Entry
    key = {e.id}
    {...e}
  />);
  return (
    <div className="App">
    <Header/>
    {entryList}
    </div>
  );
}

export default App
