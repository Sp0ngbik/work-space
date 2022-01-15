import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "./pages/About/About";
import Arrays from "./pages/About/Arrays/Arrays";
import TypeOfJs from "./pages/TypeOf/TypeOfJs";
import Welcome from "./pages/Welcome/Welcome";
import style from "./style.module.scss";

function App() {
  return (
    <div className={style.page}>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/about/type-of" element={<TypeOfJs />}></Route>
        <Route path="/about/array-practice" element={<Arrays />}></Route>
      </Routes>
    </div>
  );
}

export default App;
