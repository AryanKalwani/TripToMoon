import logo from './logo.svg';
import './App.css';

function App() {
  const connect = ()=>{
    alert('connect');
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trip Starts Here</h1>
        <div id='slogan'>Enjoy!</div>
        <button onClick={connect}>get ticket </button>
        
      </header>
    </div>
  );
}

export default App;
