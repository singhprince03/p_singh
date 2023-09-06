import styles from './Home.module.css'
import About from '../About/About'
import Card from '../Card/Card'
import Contact from '../Contact/Contact'
import Heading from '../Heading/Heading'
import Hero from '../Hero/Hero'
import Technologies from '../Skills/Technologies'
import Tools from '../Skills/Tools'
import Proficient from '../Skills/Proficient'
import Experience from '../Experience/Experience'
import projectData from '../../project.json'

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
  )
}

export default Home
