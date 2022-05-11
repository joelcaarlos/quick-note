import react, {useState} from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { Form, Button } from "react-bootstrap";
import "./login.css";




function Login(){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function login(){
    if(email === "joelcarlosuf@gmail.com" && password=== "123")
    {
      alert("Bem vindo!!\n  " + email);
      navigate("home");
    }
    else
      alert("Dados incorretos\n");
  }


  return(
    <div className='base'>
      <div className='container'>
        <Form>
          <div className='login'>
            <img src="/images/Login.png"/>
          </div>
          <div className='inputs'>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control 
              type="email" 
              placeholder="E-mail"
              onChange={(event)=>setEmail(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="senha">
              <Form.Control
              type="password" 
              placeholder="senha" 
              onChange={(event)=>setPassword(event.target.value)} />
            </Form.Group>
            
            <Button variant="primary" onClick={login}>Login</Button>{' '}
         </div>
        </Form>
      </div>
    </div>
  );
}
export default Login;