import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
    return (
        <>
            <Sidebar />
            <main>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </>
    );
}

export default App;
