import "../styles/Technology.css";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiCplusplus,
  SiCss3,
  SiHtml5,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiGit,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";

function Technology() {
  return (
    <section className="technology" id="technology">
      <h2>
        <span className="highlight">Technology</span>
      </h2>

      <div className="tech-container">
        <div className="tech-category">
          <h3>Languages</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <FaJava /> Java
            </div>
            <div className="tech-card">
              <SiJavascript /> JavaScript
            </div>
            <div className="tech-card">
              <SiTypescript /> TypeScript
            </div>
            <div className="tech-card">
              <SiPython /> Python
            </div>
            <div className="tech-card">
              <SiC /> C
            </div>
            <div className="tech-card">
              <SiCplusplus /> C++
            </div>
            <div className="tech-card">
              <TbBinaryTree /> Assembly
            </div>
            <div className="tech-card">
              <SiCss3 /> CSS
            </div>
            <div className="tech-card">
              <SiHtml5 /> HTML
            </div>
            <div className="tech-card">
              <SiPostgresql /> PostgreSQL
            </div>
          </div>
        </div>

        <div className="tech-category">
          <h3>Frontend</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <SiReact /> React
            </div>
            <div className="tech-card">
              <SiNextdotjs /> Next.js
            </div>
            <div className="tech-card">
              <SiTailwindcss /> Tailwind CSS
            </div>
          </div>
        </div>

        <div className="tech-category">
          <h3>Backend</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <SiNodedotjs /> Node.js
            </div>
            <div className="tech-card">
              <SiNextdotjs /> Next.js
            </div>
            <div className="tech-card">
              <SiSupabase /> Supabase
            </div>
          </div>
        </div>

        <div className="tech-category">
          <h3>Tools</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <SiGit /> Git
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
