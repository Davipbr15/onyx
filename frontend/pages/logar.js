import React,{useState,useEffect} from 'react';
import Header from "../components/Header.js";
import Login from "../components/LogarConta.js";
import "tailwindcss/tailwind.css";
import Link from 'next/link';


function App() {

  return (
    <div className="App bg-black h-screen">

    <Header/>
    
    <Login/>

    <cite className="text-white">Não tem sua conta ainda? Registre-se <Link href="registrarConta">aqui</Link></cite>

    </div>
  );
}

export default App;
