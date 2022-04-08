import React,{useState,useEffect} from 'react';
import Header from "../components/Header.js";
import Registro from "../components/Registro.js";
import Table from "../components/Table.js";
import "tailwindcss/tailwind.css";



function App() {

  return (
    <div className="App">

    <Header/>
    
    <Registro/>

    </div>
  );
}

export default App;
