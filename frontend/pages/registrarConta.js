import React,{useState,useEffect} from 'react';
import Header from "../components/Header.js";
import RegistrarConta from "../components/RegistrarConta.js";
import "tailwindcss/tailwind.css";
import Link from 'next/link';



function App() {

  return (
    <div className="App">

    <Header/>
    
    <RegistrarConta />

    </div>
  );
}

export default App;
