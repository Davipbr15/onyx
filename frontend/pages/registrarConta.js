import React,{useState,useEffect} from 'react';
import Header from "../components/Header.js";
import Registro from "../components/RegistrarConta.js";
import Table from "../components/Table.js";
import "tailwindcss/tailwind.css";
import Link from "next/link";


//
function App() {

  return (
    <div className="App">

    <Header />
    <Registro/>

    </div>
  );
}

export default App;
