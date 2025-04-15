import "../styles/Projects.css";
import projectImg1 from "../assets/images/artistengine.png";
import placeholderImg from "../assets/images/placeholder.jpg";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>
        My <span className="highlight">Projects</span>
      </h2>

      <div className="project-grid">
        <div className="project-card">
          <img src={projectImg1} alt="Project 1" className="project-image" />
          <p className="project-title">Artist Recommendation Engine</p>
          <p className="project-description">
            Flask app that suggests similar artists using the Last.fm API.
            Displays top tracks, listener stats, and tags for each
            recommendation.
          </p>
          <div className="frameworks">
            <span className="highlight">Flask</span>{" "}
            <span className="highlight">Python</span>{" "}
            <span className="highlight">HTML</span>{" "}
            <span className="highlight">CSS</span>
            <span className="highlight">Pylast API</span>
          </div>
        </div>

        <div className="project-card">
          <img src={placeholderImg} alt="Project 2" className="project-image" />
          <p className="project-title">Inclusive World Portal</p>
          <p className="project-description">
            Leading a team of 6 devs to build a full-stack dashboard for
            onboarding and class management. Features include user sign-ups,
            payments, and role-based access control. Responsible for managing
            sprints, stakeholder collaboration, and development.
          </p>
          <div className="frameworks">
            <span className="highlight">Next.js</span>{" "}
            <span className="highlight">Typescript</span>
            <span className="highlight">Supabase</span>{" "}
            <span className="highlight">Stripe API</span>
            <span className="highlight">PostgreSQL</span>{" "}
          </div>
        </div>

        <div className="project-card">
          <img src={placeholderImg} alt="Project 3" className="project-image" />
          <p className="project-title">Placeholder</p>
          <p className="project-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
            placeat at magnam, assumenda animi, voluptatem ad molestiae ipsa
            dolorum amet est soluta pariatur! Itaque suscipit quia, sed qui
            voluptas voluptatibus!
          </p>
          <div className="frameworks">
            <span className="highlight">TBD</span>{" "}
            <span className="highlight">TBD</span>
            <span className="highlight">TBD</span>{" "}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
