import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar'
import Home from './pages/home';
import Post from './pages/Post';
import Login from './pages/login';
import Card from './components/Card';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    const getUser = async ()=>{
      fetch('http://localhost:5000/auth/login/success',{
      method: "GET",
      credentials:'include',
      Headers:{
        accept: "application/json",
        "Content-Type":"application/json",
        "Access-Control-Allow-Credentials":true
      },
    }).then((response)=>{
      if(response.status===200) return response.json();
      throw new Error("rrrrr Authentication failed")
    }).then((responseObject)=>{
      setUser(responseObject.user)
    }).catch((err)=>{
      console.log(err)
    })
    };
   getUser()
  },[])
  console.log('-----------',user)
  return (
    <BrowserRouter>
    <div >
     <Navbar user={user} />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={ user ? <Navigate to='/' /> : <Login />} />
      <Route path='/post/:id' element={user ? <Post /> : <Navigate to="/login" /> } />
     </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
