import { useState } from "react";
import "./App.css";
import Table from "./Table";
function App() {
  const [dataArray, setDataArray] = useState([]);
  function handleClickEvent(e) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let arr = [];
        for (const obj in data) {
          arr.push(data[obj]);
        }
        setDataArray(arr);
      });
  }
  return (
    <div>
      <div className="wrapper">
        <h1>React Assignment 2</h1>
        <button className="btn" onClick={handleClickEvent}>
          Show Data
        </button>
      </div>
      <Table data={dataArray} />
    </div>
  );
}

export default App;
