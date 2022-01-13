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
      <p>{description}</p>
      <Image src={src} alt={alt} width={200} height={200} />

      <div className={styles.technologies}>
        <span>{tech1}</span>
        <span>{tech2}</span>
        <span>{tech3}</span>
      </div>
      <div className={styles.links}>
        <a href={github} target="_blank" rel="noreferrer">
          <i className={styles.github}>
            <FaGithub size="20" />
          </i>
        </a>
        <a href={link} target="_blank" rel="noreferrer">
          <i className={styles.linkedin}>
            <FaExternalLinkAlt size="20" />
          </i>
        </a>
      </div>
    </div>
  );
}

export default Project;
