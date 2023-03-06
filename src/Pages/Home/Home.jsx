import styles from './Home.module.css';
import { Card } from '../../Components/Card/Card';
import { Heading } from '../../Components/Heading/Heading';
import { Technologies } from '../../Components/Skills/Technologies';
import { About } from '../../Components/About/About';
import { Contact } from '../../Components/Contact/Contact';
import projectData from '../../project.json';
import { Tools } from '../../Components/Skills/Tools';
import { Proficient } from '../../Components/Skills/Proficient';
import { Hero } from '../../Components/Hero/Hero';
import { Experience } from '../../Components/experience/Experience';

const Home = () => {
  return (
    <div className={styles.Container}>
      <section id='hero'>
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Technologies />
        <Proficient />
        <Tools />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id='project'>
        <div className={styles.projectSection}>
          <Heading>Projects</Heading>
          <div className={styles.projectContent}>
            {projectData.map(
              ({ image, title, desc, tech, demo, code }, index) => (
                <Card
                  key={index}
                  title={title}
                  desc={desc}
                  tech={tech}
                  img={image}
                  demo={demo}
                  code={code}
                />
              )
            )}
          </div>
        </div>
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </div>
  );
};

export { Home };
