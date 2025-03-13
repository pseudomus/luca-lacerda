import swift from "/swift.png";
import swiftUi from "/swiftui.png";
import uiKit from "/uiKit.png";
import swiftTest from "/swiftTest.png";
import xcode from "/xcode.png";
import {motion} from "framer-motion";

const Tech = () => {

   const variants =  {
        hidden:{opacity:0 , y:50},
        visible:{opacity:1, y:0}
    }

    return (
        <div id="#tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
            <motion.h1 

            variants = {variants}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}

            className="text-4xl font-semi text-black md:text-6xl">
                Technologies
            </motion.h1>

            <div className="flex flex-wrap items-center justify-center gap-10 p-5">
                <motion.div
                variants = {variants}
                initial="hidden"
                whileInView="visible"
                transition={{duration:0.5}}>
                    <img src={swift} alt="" 
                    className="cursor-pointer w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] transition-all duration-300 hover:-translate-y-5"/>
                </motion.div>

                <motion.div
                variants = {variants}
                initial="hidden"
                whileInView="visible"
                transition={{duration:0.5}}>
                    <img src={swiftUi} alt="" className="cursor-pointer w-[65px] h-[65px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] transition-all duration-300 hover:-translate-y-5"/>
                </motion.div>

                <motion.div
                variants = {variants}
                initial="hidden"
                whileInView="visible"
                transition={{duration:0.5}}>
                    <img src={uiKit} alt="" className="cursor-pointer w-[50px] h-[60px] sm:w-[70px] sm:h-[80px] md:w-[80px] md:h-[95px] transition-all duration-300 hover:-translate-y-5"/>
                </motion.div>

                <motion.div
                variants = {variants}
                initial="hidden"
                whileInView="visible"
                transition={{duration:0.5}}>
                    <img src={swiftTest} alt="" className="cursor-pointer  w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] transition-all duration-300 hover:-translate-y-5"/>
                </motion.div>

                <motion.div
                variants = {variants}
                initial="hidden"
                whileInView="visible"
                transition={{duration:0.5}}>
                    <img src={xcode} alt="" className="cursor-pointer w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] transition-all duration-300 hover:-translate-y-5"/>
                </motion.div>

            </div>
        </div>
  )
}

export default Tech