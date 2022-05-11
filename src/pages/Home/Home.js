import React from 'react';
import {useNavigate} from 'react-router-dom';

function Home(){

  const navigate = useNavigate();

  return(
    <div>
      <h1>Home</h1>
      <button onClick = {()=>
        navigate("/login")
        //navigate(-1)volta o número de paginas que vc quiser
        }>
        Logout
      </button>
      
    </div>
  );
}
export default Home;