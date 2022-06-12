import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
