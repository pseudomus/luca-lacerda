import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Projects from "./components/Projects"
import Contact from "./components/Contact"


function App() {
  return (
    <>
     <div className="fixed -z-10 min-h-screen w-full bg-[radial-gradient(circle,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px]">
    </div>

    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <Navbar/>
      <Hero/>
      <Tech/>
      <Projects/>
      <Contact/>
    </main>

    </>
  )
}

export default App
