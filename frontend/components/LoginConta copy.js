import React,{useState} from 'react';
import Axios from "axios";
import Link from 'next/link';



function LoginConta(){

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
  Axios.post("http://localhost:3002/logarConta",{
    email: values.email,
    senha: values.senha,
  }).then((response)=>{
    console.log(response);
  })
}

const handlePageOpen = () =>{
  
}




    return(
        <div className="bg-black ">
        <div className="App bg-color">
        <div className="flex justify-center min-h-screen items-center justify-center bg-gray-40 sm:px-6 lg:px-8">
          
            <div className="max-w-md w-full space-y-4 rounded-2xl p-4 border-4 border-roxo">
        <svg className=' w-1/4 fill-roxo mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg>
          <div>
                    <h2 className="font-sans tracking-normal mt-6 text-center text-3xl font-bold text-white">
                   Acesse Sua Conta
                    </h2>
                    <p className=" italic tracking-normal mt-2 text-center text-sm text-roxo">
                        faça 
                        <a className="pl-1 italic tracking-normal font-medium text-roxo ">
                        seu Login
                        </a>
              
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="True"/>
                    <div className="rounded-md shadow-sm -space-y-px p-5">
                        <div class="pb-5">
             
                   
             </div>
              
              <div class="pb-5">
              <p className=" italic tracking-normal mt-2 text-start text-sm text-gray-600">
                        Insira
                        <a className="pl-1 italic tracking-normal font-medium text-gray-600 ">
                       seu e-mail
                    </a>
              </p>
                        
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input id="email"
                type="text"
                name="email"
                onChange={handleChangeValues}
                required
                className="p-8 border border-2 border-roxo appearance-none rounded-lg relative block w-full px-3 py-2 border border-indigo-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-roxo focus:z-10 sm:text-sm"
                placeholder="E-mail"/>
                      </div>
    
              <div class="pb-5">
              <p className=" italic tracking-normal mt-2 text-start text-sm text-gray-600">
                        Insira
                        <a className="pl-1 italic tracking-normal font-medium text-gray-600 ">
                        sua senha
                        </a>
              </p>
    
                  <label htmlFor="senha" className="sr-only">Senha</label>
                 <input id="senha"
                type="password"
                name="senha"
                onChange={handleChangeValues}
                required
                className="p-8 border border-2 border-roxo appearance-none rounded-lg relative block w-full px-3 py-2 border border-indigo-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-roxo focus:z-10 sm:text-sm"
                placeholder="Senha"/>
                      </div>
              
                     <div>

             <p className=" italic tracking-normal mt-2 text-center text-sm text-roxo">
             Não possui conta?
			     	<a className="pl-1 italic tracking-normal font-medium text-roxo ">
               <Link href="/registrarConta">Clique Aqui</Link>
			   	</a>
      
			      	</p>

               </div>
                    </div>
    
                    <div>
                        <button onClick={()=> handleClickButton()} type="reset" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                         <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto fill-white" width="20pt" height="20pt" version="1.1" viewBox="0 0 700 700">
                  <g>
                  <path d="m505.55 77.777h-15.555c0.015625 10.711-2.2109 21.309-6.5352 31.113h22.09c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11v357.78c0 4.125-1.6367 8.082-4.5547 11-2.918 2.918-6.875 4.5547-11 4.5547h-311.11c-4.125 0-8.082-1.6367-11-4.5547-2.918-2.918-4.5547-6.875-4.5547-11v-357.78c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547h22.09c-4.3242-9.8047-6.5508-20.402-6.5352-31.113h-15.555c-12.379 0-24.246 4.918-33 13.668-8.75 8.7539-13.668 20.621-13.668 33v357.78c0 12.375 4.918 24.246 13.668 32.996 8.7539 8.7539 20.621 13.672 33 13.672h311.11c12.379 0 24.246-4.918 33-13.672 8.75-8.75 13.668-20.621 13.668-32.996v-357.78c0-12.379-4.918-24.246-13.668-33-8.7539-8.75-20.621-13.668-33-13.668z"/>
                  <path d="m458.89 62.223h-64.867c-4.3047-12.23-13.5-22.121-25.387-27.297-11.883-5.1797-25.391-5.1797-37.273 0-11.887 5.1758-21.082 15.066-25.387 27.297h-64.867c-4.125 0-8.082 1.6367-10.996 4.5547-2.918 2.918-4.5586 6.875-4.5586 11 0 16.504 6.5547 32.328 18.227 44 11.668 11.668 27.496 18.223 43.996 18.223h124.45c16.5 0 32.328-6.5547 43.996-18.223 11.672-11.672 18.227-27.496 18.227-44 0-4.125-1.6406-8.082-4.5586-11-2.9141-2.918-6.8711-4.5547-10.996-4.5547zm-108.89 0c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11h-31.109c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547z"/>
                  </g>
                  </svg>
                   
                            </span>
                           Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
          </div>

    )
  }


export default LoginConta;