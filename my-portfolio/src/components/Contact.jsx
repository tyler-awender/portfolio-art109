import '../styles/Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>
        <span className="highlight">Contact</span> Me
      </h2>
      <p>Please contact me if you would like to connect!</p>
      <div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="mailto:your-email@example.com" className="social-icon">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

export default Contact;
