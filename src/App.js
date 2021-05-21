import React from "react";
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Project from "./Project";
import Footer from "./Footer";

function App () {

  return (
    <div className="App">

  <Project/>
  <Footer/>
 
</div>
  );
}


export default App;