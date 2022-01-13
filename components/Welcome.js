import styles from '../styles/Welcome.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Welcome() {
  return (
    <section className={styles.welcome} id="Welcome">
      <div className={styles.socials}>
        <a
          href="https://github.com/bryanbandela"
          target="_blank"
          rel="noreferrer"
        >
          <i className={styles.github}>
            <FaGithub size="25" />
          </i>
        </a>
        <a
          href="https://www.linkedin.com/in/bryan-bandela-180255169/"
          target="_blank"
          rel="noreferrer"
        >
          <i className={styles.linkedin}>
            <FaLinkedin size="25" />
          </i>
        </a>
        <a href="#Contact">
          <i className={styles.mail}>
            <FaEnvelope size="25" />
          </i>
        </a>
      </div>
      <div className={styles.contents}>
        <p>Hello! My name is</p>
        <br />
        <h2 className={styles.name}>Bryan Bandela.</h2>
        <h2>Front-end Developer.</h2>
        <p className={styles.summary}>
          I am a web developer with a great passion for front-end development. I
          use the MERN stack (or Next.js) for scalable frontend projects and
          Node.js for back-end development. I am currently
          <span> available for hire</span> for contrat or freelance .
        </p>
        <button>
          <a href="#Contact">Contact me</a>
        </button>
      </div>
      <div className={styles.gearbox}>
        <svg
          className={styles.gear}
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 24 24"
        >
          <path d="M24 13.306v-2.612l-2.452-.614c-.081-.407-.188-.805-.318-1.192l1.815-1.756-1.306-2.263-2.432.695c-.272-.309-.562-.599-.871-.871l.695-2.432-2.263-1.306-1.756 1.815c-.387-.13-.785-.237-1.192-.318l-.614-2.452h-2.612l-.614 2.452c-.407.081-.805.188-1.192.319l-1.757-1.816-2.262 1.306.695 2.433c-.309.271-.599.562-.871.87l-2.432-.695-1.306 2.262 1.815 1.757c-.13.387-.237.785-.318 1.192l-2.452.614v2.612l2.452.614c.082.407.188.805.318 1.192l-1.815 1.756 1.306 2.263 2.432-.695c.272.308.562.599.871.871l-.695 2.432 2.263 1.306 1.756-1.816c.387.131.785.237 1.192.319l.614 2.452h2.612l.614-2.452c.407-.082.805-.188 1.192-.319l1.756 1.816 2.263-1.306-.695-2.432c.309-.272.599-.563.871-.871l2.432.695 1.306-2.263-1.815-1.756c.131-.387.237-.785.318-1.192l2.452-.614zm-12 2.694c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
        </svg>
      </div>
    </section>
  );
}

export default Welcome;
