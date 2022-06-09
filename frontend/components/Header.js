import React from "react";
import Link from 'next/link';

function Header(){
      const [navbarOpen, setNavbarOpen] = React.useState(false);
    return( 
            <div className=" absolute top-0 w-full z-30 clearNav bg-current border-purple-800 border-b-2 transition duration-300 ease-in-out">
              <div className=" flex flex-col max-w-5xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between p-4">
                  <a
                    href="/"
                    className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
                  >

                      <svg className='animate-pulse w-1/6 ml-2 fill-indigo-700 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 286"><g filter="url(#filter0_i_20_29)"><path d="M0 70L124 0V31.3846V60.8077L54 102L0 70Z" fill="#8A0BEE"/></g><g filter="url(#filter1_i_20_29)"><path d="M124 0L248 70.6154L196 102L124 60.8077V0Z" fill="#8A0BEE"/></g><g filter="url(#filter2_i_20_29)"><path d="M196 102L248 70.5V214.695L196 183V102Z" fill="#8A0BEE"/></g><g filter="url(#filter3_i_20_29)"><path d="M124 224.596L196 183L248 214.692L124 286V224.596Z" fill="#8A0BEE"/></g><g filter="url(#filter4_i_20_29)"><path d="M52 183L124 224.596V286L0 214.692L52 183Z" fill="#8A0BEE"/></g><g filter="url(#filter5_i_20_29)"><g filter="url(#filter6_b_20_29)"><path d="M65 107.75L124 74V209L65 175.25V107.75Z" fill="#8A0BEE"/></g><g filter="url(#filter7_b_20_29)"><path d="M124 74L183 107.75V175.25L124 209V74Z" fill="#8A0BEE"/></g><path d="M65 108L124 135.5L182.5 108L124 74L65 108Z" fill="#750FDB" fill-opacity="0.47"/><path d="M124 135.5V209L182.5 175.5V108L124 135.5Z" fill="#9432F7" fill-opacity="0.47"/></g><g filter="url(#filter8_i_20_29)"><path d="M0 70L54 102L52 183L0 214.5V70Z" fill="#8A0BEE"/></g><defs><filter id="filter0_i_20_29" x="0" y="0" width="124" height="106" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_20_29"/></filter><filter id="filter1_i_20_29" x="124" y="0" width="124" height="106" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_20_29"/></filter><filter id="filter2_i_20_29" x="196" y="70.5" width="52" height="148.195" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_20_29"/></filter><filter id="filter3_i_20_29" x="124" y="183" width="124" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_20_29"/></filter><filter id="filter4_i_20_29" x="0" y="183" width="124" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_20_29"/></filter><filter id="filter5_i_20_29" x="65" y="74" width="118" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="25"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_20_29"/></filter><filter id="filter6_b_20_29" x="61" y="70" width="67" height="143" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImage" stdDeviation="2"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_20_29"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_20_29" result="shape"/></filter><filter id="filter7_b_20_29" x="120" y="70" width="67" height="143" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImage" stdDeviation="2"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_20_29"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_20_29" result="shape"/></filter><filter id="filter8_i_20_29" x="0" y="70" width="54" height="148.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_20_29"/></filter></defs>
                      
                      </svg>                
                  </a>
                  <button
                    className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
                    type="button"
                    aria-label="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#191919"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-menu"
                    >
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </button>

                </div>
                <div
                  className={
                    "md:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")
                  }
                >
                  <nav className="flex-col flex-grow ">
                    <ul className="flex flex-grow justify-end flex-wrap items-center">
                      <li>
                      <Link href="/">
                        <a
                          href="/"
                          className="font-medium text-gray-600 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
            
                        >
                          HOME
                        </a>
                        </Link>
                      </li>
                      <li>
                      
                      </li>
                      <li>
                      <Link href="/produtos">
                        <a
                          href="/"
                          className="font-medium text-gray-600 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
                        >
                          PRODUTOS
                        </a>
                        </Link>
                      </li>
                      <li>
                        <a
                          className=" inline-flex items-center px-4 py-2 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 bg-purple-800"
                          href="/registrar"
                        >
                          <span className="justify-center">Registre-se</span>
                          <svg
                            className="w-3 h-3 fill-current text-gray-400 flex ml-2 -mr-1"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
    )

}

export default Header;