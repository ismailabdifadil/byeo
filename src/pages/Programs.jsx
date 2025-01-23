import MainPrograms from '../components/MainPrograms'
import PageTitle from '../components/PageTitle'
import PageTitleAnimation from '../components/PageTitleAnimation'
import programsCover from '/assets/programs-cover.png'
const Programs = () => {
  return (
    <div>
      <PageTitleAnimation>
        <PageTitle pageTitle='Our Programs' cover={programsCover} />
      </PageTitleAnimation>
      <MainPrograms />
    </div>
  )
}

export default Programs
