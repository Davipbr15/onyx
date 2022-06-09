import React,{useState, useEffect} from 'react';
import Header from "../components/Header.js";
import Table from "../components/Table.js";
import "tailwindcss/tailwind.css";
import Axios from "axios";
import Link from 'next/link';
import FormDialog from '../components/Dialog';



function App() {

  const [listProducts, setListProducts] = useState();
  const [listCard, setListCard] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(()=>{

    Axios.get("http://localhost:3002/getProdutos").then((response)=>{
      setListProducts(response.data);
    })
  
  },[])

  return (
    <div className="bg-black h-screen">
    <div className="App bg-black">

    <Header/>
    <div className="container px-8 py-32 bg-black max-w-7xl mx-auto mt-8"> 
    <div className="mb-4">
    <h1 className="font-sans italic text-white text-3xl font-bold underline decoration-indigo-900 hover:decoration-">Registros</h1>
    <div className="flex justify-end">
    <Link href="/registrar">
      <button className="px-4 py-2 rounded-md bg-black border border-2 border-indigo-900 text-white text-base transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300" href="/">Criar Registro</button>
    </Link>
    </div>
   </div>

    {typeof listProducts !== "undefined" && listProducts.map((value) =>{
      return (
        <Table
      key={value.id}
      listCard={listProducts}
      setListCard={setListProducts}
      id={value.id}
      produto={value.produto}
      desc={value.desc_p}
      preco={value.preco}
      />
      );
      ;
    })
    }
    </div>
  </div>
  </div> 
 
  );

  

}

export default App;
