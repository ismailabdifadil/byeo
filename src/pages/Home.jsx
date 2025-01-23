import Actions from '../components/Actions'
import AnimatedSection from '../components/AnimatedSection'
import Hero from '../components/Hero'
import OurPrograms from '../components/OurPrograms'
import WhoWeAre from '../components/WhoWeAre'

const Home = () => {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <WhoWeAre />
      </AnimatedSection>
      <AnimatedSection>
        <OurPrograms />
      </AnimatedSection>
      <AnimatedSection>
        <Actions />
      </AnimatedSection>
    </>
  )
}

export default Home
