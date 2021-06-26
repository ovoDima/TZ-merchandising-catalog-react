import React from 'react'
// import { BrowserRouter, Switch, Router } from 'react-router-dom';
import Content from './Components/Content'
import Nav from './Components/Nav';
import './App.css'


function App() {
  return (
    
    <div className="container">
      <Nav />
      <Content />
          {/* <Router path ={'/product'} component = {ProductPage}/> */}
        
    </div>
    
  );
}

export default App;
