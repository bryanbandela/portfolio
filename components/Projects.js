import styles from '../styles/Projects.module.css';
import Project from './Project';

function Projects() {
  return (
    <section className={styles.projects} id="Projects">
      <div className={styles.title}>
        <p>
          <span>01.</span> Some Projects I've Built
        </p>
        <span className={styles.line}></span>
      </div>
      <div className={styles.myprojects}>
        <Project
          type="Expense tracker"
          name="troooc"
          description="A simple and yet a useful personal expense tracker app featuring
        friendly user experience. With only four menus: Home menu to manage your expenses, Tips menu to write and read tips from the community, Budget menu to list your unique budget and finally your profile."
          github="https://github.com/bryanbandela/troooc.com"
          link="https://troooc.herokuapp.com/"
          tech1="React"
          tech2="NodeJS"
          tech3="MongoDB"
          src="/troooc.png"
          alt="troooc_app"
        />
      </div>
    </section>
  );
}

export default Projects;
