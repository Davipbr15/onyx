import React,{useState} from 'react';
import Axios from "axios";
import Header from "../components/Header.js";
import "tailwindcss/tailwind.css";


function App() {

  const [values, setValues] = useState();

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const handleChangeValues = (value) =>{
    setValues((prevValue)=>({
      //Arrow Function, é tipo uma função, so que rápida.
      ...prevValue,
      [value.target.name]: value.target.value,
  }));
}

  const handleClickButton = () =>{
    Axios.post("http://localhost:3002/registrarProduto",{
      produto: values.produto,
      desc: values.desc,
      preco: values.preco,
      
    }).then((response)=>{
      console.log(response);
    })
  }

  const handlePageOpen = () =>{
    
  }
  


  return (
    <div class="bg-black">
    <div className="App">
    <br></br>
    <br></br>
    <br></br>

    <div className="min-h-full flex items-center justify-center pt-16 pb-40 bg-gray-40 sm:px-6 lg:px-8">
      
		<div className="bg-black max-w-md w-full space-y-8 rounded-2xl p-8 border-4 border-indigo-900">
			<div>
				<h2 className="mt-6 text-center text-3xl font-bold text-white">
					Registre seu produto
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					Insira as 
					<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
					informações
					</a>
           abaixo
				</p>
			</div>
			<form className="mt-8 space-y-6" action="#" method="POST">
				<input type="hidden" name="remember" value="True"/>
				<div className="rounded-md shadow-sm -space-y-px p-5">
					<div>
						<label htmlFor="nomeprod" className="sr-only">Nome do produto</label>
						<input id="nomeprod"
        type="text"
        name="produto"
        placeholder="Nome do Produto"
        onChange={handleChangeValues}
        required
        className="p-8  border border-2 border-indigo-700 appearance-none rounded-none relative block w-full px-3 py-2 border border-indigo-500 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-00 focus:z-10 sm:text-sm"
        />
					</div>
          <br></br>
          <div>
						<label htmlFor="preco" className="sr-only">Preço do Produto</label>
						<input id="preco"
            type="text"
            name="preco"
            onChange={handleChangeValues}
            required
            className="p-8 border border-2 border-indigo-700 appearance-none rounded-t-md rounded-b-md relative block w-full px-3 py-2 border border-indigo-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-600 focus:z-10 sm:text-sm"
            placeholder="Preço"/>
			  	</div>
          <br></br>
					<div>
						<label htmlFor="descricao" className="sr-only">Descrição</label>
						<textarea id="descricao"
            required
            className="min p-8 border border-2 appearance-none rounded-t-md rounded-b-md relative block w-full px-3 py-2 border border-indigo-500 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-600 focus:z-10 sm:text-sm"
            placeholder="Descrição"
            type="text-area"
            name="desc"
            onChange={handleChangeValues}
            />
					</div>
				</div>

				<div>
					<button onClick={()=> handleClickButton()} type="reset" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						<span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto fill-white" width="20pt" height="20pt" version="1.1" viewBox="0 0 700 700">
              <g>
              <path d="m505.55 77.777h-15.555c0.015625 10.711-2.2109 21.309-6.5352 31.113h22.09c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11v357.78c0 4.125-1.6367 8.082-4.5547 11-2.918 2.918-6.875 4.5547-11 4.5547h-311.11c-4.125 0-8.082-1.6367-11-4.5547-2.918-2.918-4.5547-6.875-4.5547-11v-357.78c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547h22.09c-4.3242-9.8047-6.5508-20.402-6.5352-31.113h-15.555c-12.379 0-24.246 4.918-33 13.668-8.75 8.7539-13.668 20.621-13.668 33v357.78c0 12.375 4.918 24.246 13.668 32.996 8.7539 8.7539 20.621 13.672 33 13.672h311.11c12.379 0 24.246-4.918 33-13.672 8.75-8.75 13.668-20.621 13.668-32.996v-357.78c0-12.379-4.918-24.246-13.668-33-8.7539-8.75-20.621-13.668-33-13.668z"/>
              <path d="m458.89 62.223h-64.867c-4.3047-12.23-13.5-22.121-25.387-27.297-11.883-5.1797-25.391-5.1797-37.273 0-11.887 5.1758-21.082 15.066-25.387 27.297h-64.867c-4.125 0-8.082 1.6367-10.996 4.5547-2.918 2.918-4.5586 6.875-4.5586 11 0 16.504 6.5547 32.328 18.227 44 11.668 11.668 27.496 18.223 43.996 18.223h124.45c16.5 0 32.328-6.5547 43.996-18.223 11.672-11.672 18.227-27.496 18.227-44 0-4.125-1.6406-8.082-4.5586-11-2.9141-2.918-6.8711-4.5547-10.996-4.5547zm-108.89 0c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11h-31.109c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547z"/>
              </g>
              </svg>

						</span>
						Concluir Registro
					</button>
				</div>
			</form>
		</div>
	</div>
</div>

      </div>

      
          
    
  );
}

export default App;
