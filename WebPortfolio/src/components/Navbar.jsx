import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
      <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-white bg-white px-16 py-6 text-black backdrop-blur-md md:justify-evenly">
        <a 
          href="#home" 
          className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
        >
          Luca
        </a>

        <ul className="hidden md:flex gap-10">
            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-black hover:text-transparent font-semibold">
                <li>Home</li>
            </a>

            <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-black hover:text-transparent font-semibold">
                <li>Tech</li>
            </a>
            
            <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-black hover:text-transparent font-semibold">
                <li>Projetos</li>
            </a>

            <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-black hover:text-transparent font-semibold">
                <li>Contatos</li>
            </a>

        </ul>

        <ul className="hidden md:flex gap-5">
            <li className="cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                <a href="https://www.linkedin.com/in/luca-lacerda/" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin/>
                </a>
            </li>

            <li className="cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                <a href="https://github.com/pseudomus" target="_blank" rel="noopener noreferrer">
                    <BsGithub/>
                </a>
            </li>  

        </ul>

        { isOpen? (
            <BiX className="block md:hidden text4x1" onClick={menuOpen}/>
        ) : (
            <BiMenu className="block md:hidden text4x1" onClick={menuOpen}/>
        )}

        {isOpen && (
            <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 bg-white p-12 ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col gap-9">
                    <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-black hover:text-transparent font-semibold">
                        <li>Home</li>
                    </a>

                    <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-black hover:text-transparent font-semibold">
                        <li>Tech</li>
                    </a>
            
                    <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-black hover:text-transparent font-semibold">
                        <li>Projetos</li>
                    </a>

                    <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-black hover:text-transparent font-semibold">
                        <li>Contatos</li>
                     </a>

                </ul>

                <ul className="flex flex-wrap gap-5">

                    <li className="cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                        <a href="https://www.linkedin.com/in/luca-lacerda/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin/>
                        </a>
                     </li>

                    <li className="cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                        <a href="https://github.com/pseudomus" target="_blank" rel="noopener noreferrer">
                        <BsGithub/>
                        </a>
                    </li>  

                </ul>
            </div>
        )}

      </nav>
    )
  }
  
  export default Navbar
  