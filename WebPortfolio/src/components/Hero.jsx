import image from "/profile.png"
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <div id="#home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
        <div className="flex flex-col items-center justify-center gap-5 text-black">

            <motion.div
            initial={{y: -50, opacity: 0}}
            animate={{y: 0, opacity:1}}
            transition={{duration:0.8, delay:0.2}}
            >
                <img src={image} alt="" className="w-[300px] h-[300] cursor-pointer rounded-full shadow-2xl shadow-indigo-900 transition-all duration-300 hover:-transition-y-5 hover:scale-105  hover:shadow-2xl hover:shadow-indigo-900 md:w-[350px] mb-10"/>
            </motion.div>

            <motion.div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity:1}}
            transition={{duration:0.8, delay:0.2}}
            >
                <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7x1">Luca Lacerda</h1>
                <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3x1">iOS Developer</h3>
                <p className="md:text-base text-pretty text-sm">                
                Sou desenvolvedor iOS com experiência na criação de apps escaláveis e acessíveis, focado em UX responsiva. 
                Desenvolvi cinco projetos do zero até a App Store, dominando Swift, SwiftUI, UIKit, API REST e GraphQL. 
                Trabalho com MVVM, VIPER e Clean Architecture, aplico testes unitários (XCTest) e automatizo deploys com GitLab, GitHub e Xcode Cloud
                </p>
            </motion.div>

        </div>
    </div>
  )
}

export default Hero