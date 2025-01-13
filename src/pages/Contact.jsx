import ContactSection from '../components/ContactSection'
import LocationMap from '../components/LocationMap'
import PageTitle from '../components/PageTitle'
import contactCover from '/assets/contact-us.png'
const Contact = () => {
  return (
    <>
      <PageTitle pageTitle='Contact Us' cover={contactCover} />
      <ContactSection />
      <LocationMap />
    </>
  )
}

export default Contact
