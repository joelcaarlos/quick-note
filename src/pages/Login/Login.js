import React from 'react';
import { Form, Button } from "react-bootstrap";
import "./login.css";


function Login(){

  return(
    <div className='base'>
      <div className='container'>
        <Form>
          <div className='login'>
            <img src="/images/Login.png"/>
          </div>
          <div className='inputs'>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="senha">
              <Form.Control type="password" placeholder="senha" />
            </Form.Group>
            
            <Button variant="dark">Login</Button>{' '}
         </div>
        </Form>
      </div>
    </div>
  );
}
export default Login;