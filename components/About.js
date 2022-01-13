import styles from '../styles/About.module.css';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaNpm,
  FaJs,
  FaDatabase,
  FaGit,
} from 'react-icons/fa';
function About() {
  return (
    <section className={styles.about} id="About">
      <div className={styles.title}>
        <p>
          <span>02.</span> About me
        </p>
        <span className={styles.line}></span>
      </div>
      <div className={styles.profile}>
        <div className={styles.summary}>
          <p>
            Hello! My name is Bryan. I'm a front-end developer based in South
            Africa and I enjoy creating visual things on the web. My interest in
            web development started back when I decided to dive deeper into
            programming after having a taste in Computer Numerical Control (CNC)
            programming in my Mechanical Engineering field!
            <br />
            <br /> Fast-forward to today, and I’ve developed a taste for
            frontend development and I have the privilege to build fullstack web
            applications, to build frontend projects and many more. <br />
            <br />
            Here are the few technologies I’ve been working with since the start
            of my journey:
          </p>
          <ul>
            <li>
              <span>HTML</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
            <li>
              <span>JS (ES6+)</span>
            </li>
            <li>
              <span>React</span>
            </li>
            <li>
              <span>Node.js</span>
            </li>
            <li>
              <span>Next.js</span>
            </li>
            <li>
              <span>MongoDB</span>
            </li>
            <li>
              <span>Heroku</span>
            </li>
            <li>
              <span>Github</span>
            </li>
          </ul>
        </div>

        <div className={styles.div_skills}>
          <div className={styles.card}>
            <div>
              <FaHtml5 className={styles.fa} size="30" />
            </div>
            <div>
              <FaCss3Alt className={styles.fa} size="30" />
            </div>
            <div>
              <FaJs className={styles.fa} size="30" />
            </div>
            <div>
              <FaNodeJs className={styles.fa} size="30" />
            </div>
            <div>
              <FaReact className={styles.fa} size="30" />
            </div>
            <div>
              <FaNpm className={styles.fa} size="30" />
            </div>
            <div>
              <FaGithub className={styles.fa} size="30" />
            </div>

            <div>
              <FaDatabase className={styles.fa} size="30" />
            </div>

            <div>
              <FaGit className={styles.fa} size="30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
