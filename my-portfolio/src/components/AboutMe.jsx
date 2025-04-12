import "../styles/AboutMe.css";
import profileImg from "../assets/images/profile.jpg"; // make sure you have an image!

function AboutMe() {
  return (
    <section id="about" className="about-me">
      <h2>
        <span className="highlight">About</span> Me
      </h2>

      <div className="about-me-content">
        <img src={profileImg} alt="Profile" className="about-me-image" />

        <div>
          <p class="about-me-text">
            I'm Tyler Awender, a Computer Science student at San Jose State
            University with experience in full-stack web development, IT
            support, and systems programming. I’ve contributed to projects for
            organizations like Menlo Security, Cellink Corporation, and
            Inclusive World, building tools and portals using technologies like
            React, Next.js, Flask, and PostgreSQL.
          </p>
          <p class="about-me-text">
            I’m currently the WebDev Lead for both the SJSU Responsible
            Computing Club and Game Development Club, where I mentor peers and
            lead technical projects. I'm super passionate about creating inclusive,
            user-focused digital experiences and continuously exploring how tech
            can be used for good.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
