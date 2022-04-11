import React, { useState, useEffect } from "react";
import Axios from 'axios';
import FormDialog from '../components/Dialog';


export default function Card(props) {

  const [listProducts, setListProducts] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClickCard = () =>{
    setOpen(true);
  };

  console.log(listProducts);
  console.log(setListProducts);

  useEffect(()=>{

    Axios.get("http://localhost:3002/getProdutos").then((response)=>{
      setListProducts(response.data);
    })

  },[])

  return (
    <>

    <FormDialog
    open={open}
    setOpen={setOpen}
    produto={props.produto}
    desc={props.desc}
    preco={props.preco}
    listCard={props.listCard}
    setListCard={props.setListCard}
    id={props.id}
    />

    <div className="flex mx-auto" onClick={() => handleClickCard()}>
    <div className="hover:bg-blue-600 m-3 text-white bg-blue-500 w-64 mx-auto text-center">
      <div class="pt-3 items-center justify-between">
        <p class="">{props.produto}</p>
        <br></br>
        <h2>{props.desc}</h2>
        <h2>R${props.preco}</h2>
        <div
        className="items-center mx-auto space-y-2 space-x-2">
    </div>
    </div>
    
    </div>
    </div> 
    </>
  );
}
/*
<div class="flex flex-row flex-wrap mx-auto w-64">
    <div className="m-3 text-black">
    <img class="hover:grow hover:shadow-lg" src="https://www.ofertaviva.com.br/photo-2/lucky-mystery-box-100-surpresa-presente-mais-produtos-eletronicos-smartwatch-placa-de-video-computador-portatil-tablet-drone.jpg"/>
      <div class="pt-3 items-center justify-between">
        <p class="">{props.produto}</p>
        <br></br>
            <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
            </svg>

        <h2>{props.desc}</h2>
        <h2>R${props.preco}</h2>
        <div
        className="items-center mx-auto space-y-2 space-x-2"
        >
        <button
        className="bg-blue-500 w-20"
        >Alterar</button>
        <button
        className="bg-red-500 w-20"
        >Deletar</button>
    </div>
    </div>
    
    </div>
    </div> 
*/