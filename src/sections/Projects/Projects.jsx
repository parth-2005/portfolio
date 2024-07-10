import styles from './ProjectsStyles.module.css';
import weather from '../../assets/weather.svg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://github.com/parth-2005/weather-app.git"
          h3="Weather App"
          p="Weather app built using Flutter and OpenWeatherMap API."
        />
      </div>
    </section>
  );
}

export default Projects;
