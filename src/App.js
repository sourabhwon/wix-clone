import React from "react";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Project from "./Project";

function App() {

  return (<div>
             <div className="App">

                <Project/>
                <Footer/>
    
             </div
            <Header/>
            <Contact/>
            <Footer/>
          </div>);


export default App;