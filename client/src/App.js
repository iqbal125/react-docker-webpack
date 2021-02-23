import React, {useEffect} from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  //Add cdk

  console.log("FFFFFFFFFFFFF" + process.env.REACT_APP_key1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {process.env.REACT_APP_key1 ? <p>{process.env.REACT_APP_key1}</p> : <p>No key Found</p>}
      </header>
    </div>
  )
}

export default App
