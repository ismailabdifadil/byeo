import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
const PageTitleAnimation = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -5 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default PageTitleAnimation
