import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


const Body = ()=>{
  return(
    <div id="body">
      <header/>
      <card
        className='section'
        title='about sth'
        description='vghvghvhvhbhjhghjbvhghvhg'
      />
      <contactContainer/>
    </div>
  )
}

const Header = ()=>{
  return(
    <div className='header'>
      <span className='header-title'>
        Trip Start Here
      </span>
      <br/>
      <span className="header-text">
         Sth here not sure gonna be here yet
      </span>

    </div>
  )
}

const Card = (props) =>{
  return(
    <div className={props.className} >
      <div className="small-div">
        <i classname={props.className}></i>
      </div>

      <div className="big-div">
        <span className="div-title">
          {props.title}
        </span>
        <br/>
        <span>
          {props.description}
        </span>
      </div>

    </div>
  )
}
ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

reportWebVitals();
