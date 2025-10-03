import "./app.css";
import MainLayout from "./components/templates/MainLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Skill from "./components/pages/Skill";
import Project from "./components/pages/Project";

function App() {
  return (
    <MainLayout>
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </MainLayout>
  );
}

export default App;
