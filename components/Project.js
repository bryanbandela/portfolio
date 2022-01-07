import styles from '../styles/Project.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

function Project({
  type,
  name,
  description,
  github,
  link,
  tech1,
  tech2,
  tech3,
  src,
  alt,
}) {
  return (
    <div className={styles.project} id="project">
      <span>{type}</span>
      <h4>{name}</h4>
      <div className={styles.description}>
        <p>{description}</p>
        <Image src={src} alt={alt} width={300} height={200} />
      </div>

      <div className={styles.technologies}>
        <span>{tech1}</span>
        <span>{tech2}</span>
        <span>{tech3}</span>
      </div>
      <div className={styles.links}>
        <a href={github}>
          <i className={styles.github}>
            <FaGithub size="20" />
          </i>
        </a>
        <a href={link}>
          <i className={styles.linkedin}>
            <FaExternalLinkAlt size="20" />
          </i>
        </a>
      </div>
    </div>
  );
}

export default Project;
