import React from 'react';
import ListGroup from "react-bootstrap/ListGroup"
import Search from './search'
import { Link } from "react-router-dom";
export default function TodoList() {
    
      return (
        <> 
      {/* <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup> */}

         <h1>Select your ticket here</h1>
         <Search />
         <form action="/"  method="get">
        <label>
            <span className="visually-hidden">--></span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search a place on moon"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
         <ul>
            <li><Link to="/">back</Link></li>
         </ul>
         
        </>
        );
      
    }
    
   