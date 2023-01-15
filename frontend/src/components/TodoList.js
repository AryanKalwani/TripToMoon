import React from 'react';
import ListGroup from "react-bootstrap/ListGroup"
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

         <h1>We in the todo list area</h1>
         <ul>
            <li><Link to="/">Go to Home</Link></li>
         </ul>
        </>
        )
      
    }
    
   