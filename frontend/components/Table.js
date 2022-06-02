import React, { useState, useEffect } from "react";
import Axios from 'axios';
import FormDialog from '../components/Dialog';
import DialogDelete from '../components/DialogDelete';


export default function Card(props) {

  const [listProducts, setListProducts] = useState();
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickCard = () =>{
    setOpen(true);
  };

  const handleClickCardDelete = () =>{
    setOpenDelete(true);
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

    <DialogDelete
    open={openDelete}
    setOpen={setOpenDelete}
    produto={props.produto}
    desc={props.desc}
    preco={props.preco}
    listCard={props.listCard}
    setListCard={props.setListCard}
    id={props.id}
    />
    

    <div className="bg-black"> 

    <div className="container max-w-7xl mx-auto bg-black py-4 ">
  
  <div className="">
    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="flex flex-col inline-block overflow-hidden align-middle shadow border-solid border-2 border-white sm:rounded-lg bg-white">
        <table className="w-full">
          <thead>
            <tr className="">
              <th
                className="sm:-mx-6 sm:px-16 lg:-mx-8 lg:px-8 w-32 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 bg-indigo-900 hover:bg-indigo-800">
                ID</th>
              <th
                className="sm:-mx-6 sm:px-16 lg:-mx-8 lg:px-8 w-80 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 bg-indigo-900 hover:bg-indigo-800">
                Nome do Produto</th>
              <th
                className=" sm:-mx-6 sm:px-16 lg:-mx-8 lg:px-8 w-96 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 bg-indigo-900 hover:bg-indigo-800">
                Descrição</th>
              <th
                className="sm:-mx-6 sm:px-16 lg:-mx-8 lg:px-8 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 bg-indigo-900 hover:bg-indigo-800">
                Preço</th>
                <th
                className="sm:-mx-6 sm:px-16 lg:-mx-8 lg:px-8 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 bg-indigo-900 hover:bg-indigo-800">
                Alterar</th>
                <th
                className="sm:-mx-6 sm:px-16 lg:-mx-8 lg:px-8 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 bg-indigo-900 hover:bg-indigo-800">
                Excluir</th>
            </tr>
          </thead>

          <tbody className="mx-auto w-full  bg-white text-gray-600 ">
            <tr className="">
              <td className="sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-32 whitespace-no-wrap hover:text-gray-900">
                <div className="flex items-center">
                {props.id}
                </div>

              </td>

              <td className="sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-80 whitespace-no-wrap hover:text-gray-900">
                <div className="text-sm leading-5">{props.produto}
                </div>
              </td>

              <td className="sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-96 whitespace-no-wrap hover:text-gray-900">
                <p>{props.desc}</p>
              </td>

              <td className="sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 text-sm leading-5 whitespace-no-wrap hover:text-gray-900">
                <span>{props.preco}</span>
              </td>

              
              <td className="bg-white sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12  text-sm font-medium leading-5 text-center whitespace-no-wrap ">
                <a href="#" className="text-gray-700 hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 hover:scale-125 transform ease-in duration-2000 h-6" onClick={() => handleClickCard()} fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </a>
              </td>     

              <td className="bg-white sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12 text-sm font-medium leading-5 text-center whitespace-no-wrap ">
                <a href="#" className="text-gray-700 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleClickCardDelete()} className="w-4 h-4 fill-red-600 hover:fill-red-9 hover:scale-125 transform ease-in duration-200" viewBox="0 0 448 512"> <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                </a>
              </td>          
            </tr>   
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>

    </>
  );
}

/*
<div className="flex flex-row flex-wrap mx-auto w-64">
    <div className="m-3 text-black">
    <img className="hover:grow hover:shadow-lg" src="https://www.ofertaviva.com.br/photo-2/lucky-mystery-box-100-surpresa-presente-mais-produtos-eletronicos-smartwatch-placa-de-video-computador-portatil-tablet-drone.jpg"/>
      <div className="pt-3 items-center justify-between">
        <p className="">{props.produto}</p>
        <br></br>
            <svg className="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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