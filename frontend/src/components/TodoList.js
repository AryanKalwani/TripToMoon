import React from 'react';
import ListGroup from "react-bootstrap/ListGroup"
import Search from './search'
import { Link } from "react-router-dom";
export default function TodoList() {
    
      return (
        <header className='todo'> 
        
      {/* <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup> */}

         <h1 className='todohead'>Select your ticket here</h1>
         <br/>
         <br/>
         <br/>
         <Search />
         <form action="/"  method="get">
        <label>
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            className="header-search"
            placeholder="Enter a place on moon"
            name="s"
        />
       
        <br/>
        <br/>
        
         
        <label>
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            className="header-search"
            placeholder="Enter the grocery"
            name="s"
        />
        <br/>
        <br/>
        <button className='bb' type="submit">Check Out</button>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
        
    </form>
         <ul>
            <li><Link to="/">back</Link></li>
         </ul>
         <div className='todo2'>
         
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         </div>
         
        </header>
        );
      
    }
    
   