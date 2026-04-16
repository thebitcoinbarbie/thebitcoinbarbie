import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Glossary from "./pages/Glossary";
import Kit from "./pages/Kit";
import Success from "./pages/Success";
import Admin from "./pages/Admin";
import "./styles.css";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/kit" element={<Kit />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  );
}