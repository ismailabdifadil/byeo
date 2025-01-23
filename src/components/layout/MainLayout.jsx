import { Outlet } from 'react-router-dom'
import Header from '../Header'
import CallToAction from '../CallToAction'
import Footer from '../Footer'
import Copyright from '../Copyright'
import AnimatedSection from '../AnimatedSection'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
      <AnimatedSection>
        <Copyright />
      </AnimatedSection>
    </>
  )
}

export default MainLayout
