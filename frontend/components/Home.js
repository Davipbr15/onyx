import React from 'react';

import Image from 'next/image';

import pc from '../img/pc.jpg';
import monitor from '../img/gabinete.jpg';





function Home(){

    return(
    <>
    <div class="bg-black">
      
    <div className='flex justify-center w-full h-full pt-32'>
        <Image
        src={pc}
        alt=""
        />
    </div>

      <div className='pt-8'>
          <div className="h-32 px-12 w-full bg-gradient-to-bl from-indigo-800 to-roxo">
            <div className='flex flex-row justify-center items-center w-full pt-12 space-x-36'>
              
                <div className='flex'>
                <svg className='w-8 mr-3 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 80C512 98.01 497.7 114.6 473.6 128C444.5 144.1 401.2 155.5 351.3 158.9C347.7 157.2 343.9 155.5 340.1 153.9C300.6 137.4 248.2 128 192 128C183.7 128 175.6 128.2 167.5 128.6L166.4 128C142.3 114.6 128 98.01 128 80C128 35.82 213.1 0 320 0C426 0 512 35.82 512 80V80zM160.7 161.1C170.9 160.4 181.3 160 192 160C254.2 160 309.4 172.3 344.5 191.4C369.3 204.9 384 221.7 384 240C384 243.1 383.3 247.9 381.9 251.7C377.3 264.9 364.1 277 346.9 287.3C346.9 287.3 346.9 287.3 346.9 287.3C346.8 287.3 346.6 287.4 346.5 287.5L346.5 287.5C346.2 287.7 345.9 287.8 345.6 288C310.6 307.4 254.8 320 192 320C132.4 320 79.06 308.7 43.84 290.9C41.97 289.9 40.15 288.1 38.39 288C14.28 274.6 0 258 0 240C0 205.2 53.43 175.5 128 164.6C138.5 163 149.4 161.8 160.7 161.1L160.7 161.1zM391.9 186.6C420.2 182.2 446.1 175.2 468.1 166.1C484.4 159.3 499.5 150.9 512 140.6V176C512 195.3 495.5 213.1 468.2 226.9C453.5 234.3 435.8 240.5 415.8 245.3C415.9 243.6 416 241.8 416 240C416 218.1 405.4 200.1 391.9 186.6V186.6zM384 336C384 354 369.7 370.6 345.6 384C343.8 384.1 342 385.9 340.2 386.9C304.9 404.7 251.6 416 192 416C129.2 416 73.42 403.4 38.39 384C14.28 370.6 .0003 354 .0003 336V300.6C12.45 310.9 27.62 319.3 43.93 326.1C83.44 342.6 135.8 352 192 352C248.2 352 300.6 342.6 340.1 326.1C347.9 322.9 355.4 319.2 362.5 315.2C368.6 311.8 374.3 308 379.7 304C381.2 302.9 382.6 301.7 384 300.6L384 336zM416 278.1C434.1 273.1 452.5 268.6 468.1 262.1C484.4 255.3 499.5 246.9 512 236.6V272C512 282.5 507 293 497.1 302.9C480.8 319.2 452.1 332.6 415.8 341.3C415.9 339.6 416 337.8 416 336V278.1zM192 448C248.2 448 300.6 438.6 340.1 422.1C356.4 415.3 371.5 406.9 384 396.6V432C384 476.2 298 512 192 512C85.96 512 .0003 476.2 .0003 432V396.6C12.45 406.9 27.62 415.3 43.93 422.1C83.44 438.6 135.8 448 192 448z"/></svg>
                <h1 className='text-white italic'>DESCONTO A PARTIR DE 13X</h1>
                </div>

                <div className='flex'>
                      <svg className='w-8 mr-3 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 32C547.3 32 576 60.65 576 96V128H0V96C0 60.65 28.65 32 64 32H512zM576 416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V224H576V416zM112 352C103.2 352 96 359.2 96 368C96 376.8 103.2 384 112 384H176C184.8 384 192 376.8 192 368C192 359.2 184.8 352 176 352H112zM240 384H368C376.8 384 384 376.8 384 368C384 359.2 376.8 352 368 352H240C231.2 352 224 359.2 224 368C224 376.8 231.2 384 240 384z"/></svg>
                  <h1 className='text-white italic'>PAGAMENTO EM ATÉ 12X</h1>
            
                </div>

                <div className='flex'>
                <svg className='w-8 mr-3 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M400 32C426.5 32 448 53.49 448 80V336C448 362.5 426.5 384 400 384H266.7L277.3 416H352C369.7 416 384 430.3 384 448C384 465.7 369.7 480 352 480H96C78.33 480 64 465.7 64 448C64 430.3 78.33 416 96 416H170.7L181.3 384H48C21.49 384 0 362.5 0 336V80C0 53.49 21.49 32 48 32H400zM64 96V320H384V96H64zM592 32C618.5 32 640 53.49 640 80V432C640 458.5 618.5 480 592 480H528C501.5 480 480 458.5 480 432V80C480 53.49 501.5 32 528 32H592zM544 96C535.2 96 528 103.2 528 112C528 120.8 535.2 128 544 128H576C584.8 128 592 120.8 592 112C592 103.2 584.8 96 576 96H544zM544 192H576C584.8 192 592 184.8 592 176C592 167.2 584.8 160 576 160H544C535.2 160 528 167.2 528 176C528 184.8 535.2 192 544 192zM560 400C577.7 400 592 385.7 592 368C592 350.3 577.7 336 560 336C542.3 336 528 350.  3 528 368C528 385.7 542.3 400 560 400z"/></svg>

                    <h1 className='text-white italic'>PC GAMERS ONYX</h1>
                </div>

            </div>
          </div>
      </div>

      <div className="px-5 max-w-7xl pt-20 mx-auto text-center m-5">
        <h1 className="mb-8 text-center text-6xl Avenir font-semibold text-white">
          Os melhores produtos do Brasil
        </h1>

      <div className='flex flex-row w-full h-full space-x-16'>
      <div className='flex'>
        <Image
        src={monitor}
        alt=""
        />
      </div>

      <div className='flex'>
        <Image
        src={pc}
        alt=""
        />
      </div>

      <div className='flex'>
        <Image
        src={pc}
        alt=""
        />
      </div>
      </div>
  
      </div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-center text-6xl Avenir font-semibold text-white">
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
              className="placeholder-black text-black border border-indigo-900 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-r-md rounded-b-md bg-purple font-semibold hover:border-black"
            >
            </input>{" "}
      
              <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-t-md rounded-b-md bg-roxo"
              href="/"
              >
              <span className="justify-center">Assinar</span>
            </a>

           
        <h1 className="mb-7 p-5 text-2xl Avenir font-semibold text-white text-center">
          A plataforma ONYX está disponível para PC, Android e IOS.
        </h1>

        <div className="flex flex-row items-center justify-center mx-auto mb-8 gap-5">
        <a href="#" tabIndex="0"><img class="w-60" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></a>
        <a href="#" tabIndex="0"><img class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/></a>
        </div>

          
            
          </div>
        </div>
      </section>
      </div>

    </>
    )
  
}

export default Home;