import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://github.com/bryanbandela">
          <i className={styles.github}>
            <FaGithub size="20" />
          </i>
        </a>
        <a href="https://www.linkedin.com/in/bryan-bandela-180255169/">
          <i className={styles.linkedin}>
            <FaLinkedin size="20" />
          </i>
        </a>
      </div>
      <p>Built & Breathed by Bryan Bandela</p>
    </footer>
  );
}

export default Footer;
