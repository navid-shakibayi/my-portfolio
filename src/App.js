import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Layout/Header";
import Hero from "./Components/Index/Hero";
import About from "./Components/About/About";
import SkillPage from "./Components/SkillPage/SkillPage";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";

function App() {
  return <>
    <section className="font-dmsans-light text-custom-color2">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<SkillPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </section>
  </>
}

export default App;
