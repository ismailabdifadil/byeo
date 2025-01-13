import CoreValues from '../components/CoreValues'
import OurStory from '../components/OurStory'
import PageTitle from '../components/PageTitle'
import aboutCover from '/assets/about-cover.png'

const About = () => {
  return (
    <>
      <PageTitle pageTitle='About Us' cover={aboutCover} />
      <OurStory />
      <CoreValues/>
    </>
  )
}

export default About
