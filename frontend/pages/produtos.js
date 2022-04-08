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
    <div className="App">

    <Header/>
    
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
  
  );

  

}

export default App;
