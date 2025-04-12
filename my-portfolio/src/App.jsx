// App is root component and renders other components
// Similar to HTML body

import Projects from "./components/Projects.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import "./styles/app.css";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
