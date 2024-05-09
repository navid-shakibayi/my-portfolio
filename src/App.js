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
import ContactPage from "./Components/ContactPage/ContactPage";
import Requests from "./Components/ContactRequest/Requests";

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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/requests" element={<Requests />} />
        </Routes>
      </BrowserRouter>
    </section>
  </>
}

export default App;
