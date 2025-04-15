// App is root component and renders other components
// Similar to HTML body

import { useEffect } from "react";
import FadeInWhenVisible from "./components/animations/FadeInWhenVisible.jsx";
import Spacer from "./components/Spacer.jsx";
import Contact from "./components/Contact.jsx";
import Technology from "./components/Technology.jsx";
import Projects from "./components/Projects.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import "./styles/app.css";

function App() {
  // Effect to fix anchor tag issue
  // Check alternatives
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.replaceState(null, '', window.location.pathname);
  }, []);

  return (
    <>
      <Navbar />

      <FadeInWhenVisible>
        <Intro />
      </FadeInWhenVisible>
      <Spacer height="7rem" />

      <FadeInWhenVisible>
        <AboutMe />
      </FadeInWhenVisible>
      <Spacer height="7rem" />

      <FadeInWhenVisible>
        <Projects />
      </FadeInWhenVisible>
      <Spacer height="7rem" />

      <FadeInWhenVisible>
        <Technology />
      </FadeInWhenVisible>
      <Spacer height="7rem" />

      <FadeInWhenVisible>
        <Contact />
      </FadeInWhenVisible>
    </>
  );
}

export default App;