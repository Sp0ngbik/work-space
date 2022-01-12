import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "./pages/About/About";
import Welcome from "./pages/Welcome/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
