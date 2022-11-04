import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Interests from "../pages/Interests";
import Projects from "../pages/Projects";

const Router = () => (
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/interests" element={<Interests />} />
    <Route path="/Blog" element={<Blog />} />
  </Routes>
);

export default Router;
