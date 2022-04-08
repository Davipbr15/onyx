import React,{useState} from 'react';
import Header from "../components/Header.js";
import Home from "../components/Home.js";
import Link from 'next/link';

function App() {

  return (
    <div className="App">

    <Header/>
    
    <Home/>

    </div>
  );
}

export default App;
