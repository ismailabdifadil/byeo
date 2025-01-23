import AnimatedSection from '../components/AnimatedSection'
import CoreValues from '../components/CoreValues'
import OurStory from '../components/OurStory'
import PageTitle from '../components/PageTitle'
import aboutCover from '/assets/about-cover.png'
import PageTitleAnimation from '../components/PageTitleAnimation'
const About = () => {
  return (
    <>
      <PageTitleAnimation>
        <PageTitle pageTitle='About Us' cover={aboutCover} />
      </PageTitleAnimation>
      <AnimatedSection>
        <OurStory />
      </AnimatedSection>
      <AnimatedSection>
        <CoreValues />
      </AnimatedSection>
    </>
  )
}

export default About
