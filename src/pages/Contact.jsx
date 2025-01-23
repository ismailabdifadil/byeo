import AnimatedSection from '../components/AnimatedSection'
import ContactSection from '../components/ContactSection'
import LocationMap from '../components/LocationMap'
import PageTitle from '../components/PageTitle'
import PageTitleAnimation from '../components/PageTitleAnimation'
import contactCover from '/assets/contact-us.png'
const Contact = () => {
  return (
    <>
      <PageTitleAnimation>
        <PageTitle pageTitle='Contact Us' cover={contactCover} />
      </PageTitleAnimation>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      <AnimatedSection>
        <LocationMap />
      </AnimatedSection>
    </>
  )
}

export default Contact
