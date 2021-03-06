import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "./pages/About/About";
import Arrays from "./pages/Arrays/Arrays";
import Partfolio from "./pages/Partfolio/Partfolio";
import FirstSite from "./pages/PartfolioPages/FirstSite/FirstSite";
import TryesText from "./pages/TryesTest/TryesText";
import TypeOfJs from "./pages/TypeOf/TypeOfJs";
import Welcome from "./pages/Welcome/Welcome";
import style from "./style.module.scss";
import SecondSite from "./pages/PartfolioPages/SecondSite/SecondSite";
import ToolkitReduxPractice from "./pages/ToolkitRedux/ToolkitReduxPractice";

function App() {
  return (
    <div className={style.page}>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/about/tryes-text" element={<TryesText />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/about/partfolio" element={<Partfolio />}></Route>
        <Route path="/about/type-of" element={<TypeOfJs />}></Route>
        <Route path="/redux" element={<ToolkitReduxPractice />}></Route>
        <Route path="/about/array-practice" element={<Arrays />}></Route>
        <Route path="/partfolio/first" element={<FirstSite />}></Route>
        <Route path="/partfolio/second" element={<SecondSite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
