import React,{useState, useEffect} from 'react';
import Header from "../components/Header.js";
import Table from "../components/Table.js";
import "tailwindcss/tailwind.css";
import Axios from "axios";
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
    <div class="bg-black">
    <div className="App">

    <Header/>

    <div class="container max-w-7xl mx-auto mt-8 "> 
    <div class="mb-4">
    <h1 class="font-sans italic text-white hover:text- text-3xl font-bold underline decoration-indigo-900 hover:decoration-">Registros</h1>
    <div class="flex justify-end">
      <button class="px-4 py-2 font-serif rounded-md bg-black border border-2 border-indigo-900 text-white text-base transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300" >Criar Registro</button>
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
