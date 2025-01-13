import MainPrograms from '../components/MainPrograms'
import PageTitle from '../components/PageTitle'
import programsCover from '/assets/programs-cover.png'
const Programs = () => {
  return (
    <div>
      <PageTitle pageTitle='Our Programs' cover={programsCover} />
      <MainPrograms />
    </div>
  )
}

export default Programs
