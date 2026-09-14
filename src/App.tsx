import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Project";
import BuildersLab from "./sections/BuildersLab";
import BuildLog from "./sections/BuildLog";
import About from "./sections/About";
import Contact from "./sections/Contact";
import ProjectDetail from "./pages/ProjectDetails";
import SiteLayout from "./layouts/siteLayout";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <BuildersLab />
        <BuildLog />
        <About />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;