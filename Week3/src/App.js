import logo from './logo.svg';
import './App.css';
import Student from './Components/Student'
import Get from './Components/Get'
import Post from './Components/Post'
import React, { useState, useEffect } from 'react'
import {Link,Route} from 'react-router-dom'


function App() {

 


 
  return (
    <div className="App">
      
        <Link to="/home">Home</Link>
        <br></br>
        <Link to="/about">About</Link>

        <Route path='/home'> <Post/> </Route>
        <Route path='/about'> <Get/> </Route>
      
        
      
     


    </div>
  );
}

export default App;
