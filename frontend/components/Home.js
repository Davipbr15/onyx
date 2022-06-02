import React from 'react';
import Image from 'next/image';
import pc from '../img/teste.jpg';

function Home(){

    return(
    <>
    <div className="bg-black">
      <div className="section">
      <h1 className="text-6xl font-semibold text-white">
                         Compre na Onyx e aproveite
                            <br></br>
      O melhor site de vendas on-line,com os melhores eletrônicos que você pode encontrar.
                   
   
      </h1>
      </div>

        

      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        

 
      </div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-white">
              Fique por dentro das notícias com nossa <strong>Newsletter</strong>
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-white">
              Insira seu endereço de e-mail para receber diariamente sobre as principais ofertas do dia
            </h1>
            <input
              placeholder="Insira seu e-mail"
              name="email"
              type="email"
              autoComplete="email"
              className="placeholder-black text-indigo-900 border border-white w-1/4 pr-2 pl-2 py-3 mt-2 rounded-t-md rounded-b-md bg-white font-semibold hover:border-indigo-900"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-t-md rounded-b-md bg-indigo-900"
              href="/"
            >
              <span className="justify-center">Assinar</span>
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
    )

}

export default Home;