import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Layout/Header";

function App() {
  return <>
  <section className="font-dmsans-light text-custom-color2">
    <BrowserRouter>
      <Header />
      <Routes>
      
      </Routes>
    </BrowserRouter>
  </section>
  </>
}

export default App;
