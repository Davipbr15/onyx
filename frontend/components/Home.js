import React from 'react';

function Home(){

    return(
    <>
    <div class="bg-black">
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-white">
          Compre no conforto da sua casa
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-white text-center">
          A plataforma ONYX está disponível para PC, Android e IOS.
        </h1>

        <div className="flex flex-row items-center justify-center mx-auto mb-8 gap-5">
        <a href="#" tabIndex="0"><img class="w-60" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></a>
        <a href="#" tabIndex="0"><img class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/></a>
        </div>
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