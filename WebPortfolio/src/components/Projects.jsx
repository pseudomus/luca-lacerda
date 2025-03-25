import fb from "/fb.png";
import handy from "/handy.png";
import shyne from "/shyne.png";
import bubli from "/bubli.png";
import cade from "/cadecade.png";
import apple from "/apple.png"
import {motion} from "framer-motion"



const projectsData = [
    {
        image: handy,
        title: "Handy",
        description: "É um aplicativo inovador que permite registrar e acompanhar suas práticas de terapia ocupacional de forma simples, facilitando o monitoramento do progresso ao longo do tratamento.",
        tech: ["SwiftUI", "HealthKit", "Combine", "SwiftCharts", "SwiftData", "WidgetKit", "WatchKit"],
        appStoreLink: "https://apps.apple.com/br/app/handy/id6504047887"
    },
    {
        image: cade,
        title: "Cadê Cadê", 
        description: "Com um toque de competitividade, o jogo testa seu conhecimento sobre onde estão as coisas no seu lar — e quem encontrar mais objetos vence!",
        tech: ["UIKit", "SwiftUI", "CoreML", "SharePlay", "XCTest", "AVFoundation", "UserDefaults", "Combine"],
        appStoreLink: "https://apps.apple.com/br/app/cad%C3%AA-cad%C3%AA/id6482848973"
    },
    {
        image: bubli,
        title: "Bubli",
        description: "É um jogo competitivo de realidade aumentada. Conecte bolinhas flutuantes no seu ambiente real, desafiando sua agilidade e estratégia.",
        tech: ["SwiftUI", "UIKit", "ARKit", "RealityKit", "Multipeer Connectivity", "Combine", "XCTest"],
        appStoreLink: "https://apps.apple.com/br/app/bubli/id6612002936"
    },
    // {
    //     image: fb,
    //     title: "Forbidden Waters",
    //     description: "Desvie dos projéteis e tente sobreviver o máximo possível em um jogo desafiador que testa suas habilidades e reflexos.",
    //     tech: ["SpriteKit", "UserDefaults"],
    //     appStoreLink: "https://apps.apple.com/br/app/forbidden-waters/id6454425307"
    // },
    {
        image: shyne,
        title: "Shine",
        description: "É um aplicativo inovador que ajuda os usuários a aprimorar suas habilidades sociais por meio de atividades práticas, como empatia, comunicação não verbal e escuta ativa.",
        tech: ["UIKit", "CoreData"],
        appStoreLink: "https://apps.apple.com/br/app/shyne/id6469059596"
    },
];


const ScroolReveal = ({children}) => {
    return(
        <motion.div
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
        >
            {children} 
        </motion.div>
    )
}

const ProjectCard = ({ project }) => {
    return(
        <ScroolReveal>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
            <img src={project.image} alt="" className="w-56 md:w-72 lg:w-96 h-auto cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105"/>
            <div className="flex flex-col gap-5">

                <div className="flex flex-col gap-3">
                    <div className="text-xl font-semibold">{project.title}</div>
                    <div className="text-black">{project.description}</div>
                </div>

                <div className="flex flex-wrap gap-5">
                    {
                        project.tech.map((tech,indexes) => (
                            <span key={indexes} className="rounded-lg bg-black p-3 text-white">
                                {tech}
                            </span>
                        ))
                    }
                </div>
                <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer" className="mt-4">
                    <img src={apple} alt="Baixar na App Store" className="w-40 md:w-48 lg:w-48 h-auto max-w-full object-contain transition-all duration-300 hover:scale-105 cursor-pointer" />
                </a>
            </div>
        </div>
        </ScroolReveal>
    )
}

const Projects = () => {
  return (
    <div id="#projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
        <ScroolReveal>
        <h1 className=" text-4xl font-semi text-black md:text-6xl">Meus Projetos</h1>
        </ScroolReveal>
        <div className="flex w-full max-w-[1000px] flex-col gap-16 text black">
            {
            projectsData.map((project,index) => (
                <ProjectCard key={index} project={project}/>
            ))
            }
        </div>
    </div>
  )
}

export default Projects