import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trip Starts Here</h1>
        <div id='slogan'>Enjoy!</div>        
     <button>
      <ul>
        <li><Link to="/tolist"><span>get ticket</span></Link></li>
      </ul>
      </button>
      </header>
    </div>
  )
}

export default Home