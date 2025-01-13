import { Outlet } from 'react-router-dom'
import Header from '../Header'
import CallToAction from '../CallToAction'
import Footer from '../Footer'
import Copyright from '../Copyright'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <CallToAction />
      <Footer />
      <Copyright />
    </>
  )
}

export default MainLayout
