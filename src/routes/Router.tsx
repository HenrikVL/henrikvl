import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Interests from "../pages/Interests";
import Introduction from "../pages/Introduction";
import Projects from "../pages/Projects";
import Timeline from "../pages/Timeline";
import Phishing from "../pages/Phishing";

const Router = () => (
  <Routes>
    <Route path="/introduction" element={<Introduction />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/interests" element={<Interests />} />
    <Route path="/timeline" element={<Timeline />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/" element={<Phishing />} />
  </Routes>
);

export default Router;
