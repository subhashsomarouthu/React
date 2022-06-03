import React, {useState} from "react";
import {Navigate} from 'react-router';
import {useNavigate} from 'react-router-dom';


const Login=()=>
{
  let navigate=useNavigate();
  const[data, setData]= useState({
    username:'',
    password:''

  })

  const {username,password}=data
  const handler=e=>
  {
    setData({...data,[e.target.name]:[e.target.value]})
  }
  
  
    const handleClick=()=>
    {
      navigate('/Display');
    }
  
  
  return(
    <div>
      <center>
        <form>
          <input type="text"  name='username' value={username} onChange={handler}></input><br></br>
          <input type="password" name='password' value={password} onChange={handler}></input><br></br>
          
        </form>
        <button onClick={(e)=>handleClick()}>login</button>

      </center>
    </div>
  )
}
export default Login;
