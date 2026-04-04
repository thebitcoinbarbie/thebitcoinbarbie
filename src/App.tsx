import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kit from "./pages/Kit";
import Success from "./pages/Success";
import Consulting from "./pages/Consulting";
import Glossary from "./pages/Glossary";
import Course from "./pages/Course";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kit" element={<Kit />} />
          <Route path="/success" element={<Success />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}