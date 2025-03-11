import { BsGithub, BsLinkedin } from "react-icons/bs"

const Navbar = () => {
    return (
      <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-white bg-white px-16 py-6 text-black backdrop-blur-md md:justify-evenly">
        <a 
          href="#home" 
          className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
        >
          Luca
        </a>

        <ul className="hidden md:flex gap-10">
            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-black hover:text-transparent">
                <li>Home</li>
            </a>

            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-black hover:text-transparent">
                <li>Tech</li>
            </a>
            
            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-black hover:text-transparent">
                <li>Projects</li>
            </a>

            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-black hover:text-transparent">
                <li>Contacts</li>
            </a>

        </ul>

        <ul className="hidden md:flex gap-5">
            <li className="cursor-pointer text-x1 opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                <BsLinkedin/>
            </li>

            <li className="cursor-pointer text-x1 opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                <BsGithub/>
            </li>

        </ul>

      </nav>
    )
  }
  
  export default Navbar
  