import styles from './HeroStyles.module.css';
import  heroImg from '../../assets/pfp.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume.pdf';
import { useTheme } from '../../common/ThemeContext';
import { Typewriter } from 'react-simple-typewriter'

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Parth Panot"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Parth
          Panot
        </h1>
        <h2 className={styles.typewriter}><Typewriter
          words={['Web Dev', 'Python Dev', 'Cyber Security Enthusiast']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h2><p className={styles.description}>
          <b>
          Innovating with modern technologies to create futuristic solutions.
          </b>


        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
        <span>
          <a href="https://x.com/2005_pparth" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/parth-2005" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/parth-panot-005b01245/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
