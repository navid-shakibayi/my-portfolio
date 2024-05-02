import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Layout/Header";
import Hero from "./Components/Index/Hero";
import About from "./Components/About/About";

function App() {
  return <>
    <section className="font-dmsans-light text-custom-color2">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </section>
  </>
}

export default App;
