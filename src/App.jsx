import { ToastContainer } from 'react-toastify'
import MainLayout from './components/layout/MainLayout'
import ScrollToTop from './components/ScrollToTop '
const App = () => {
  return (
    <>
      <ToastContainer  />
      <ScrollToTop />
      <MainLayout />
    </>
  )
}

export default App
