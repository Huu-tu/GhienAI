// import BlogList from 'components/blog/BlogList';
//
import {  useGetCase } from 'libs/hooks'
import ModalListCase from './components/ModalListCase'

const CaseStudy = ()=>{
  const { data: cases = [] } = useGetCase();
  return(
    <div className="mx-auto max-w-6xl px-3">
      <ModalListCase posts={cases} link={"case-study/view-case"}/>
      {/*{isLoading ? <p>Đang tải...</p> : <BlogList posts={cases} type="horizontal" link={"case-study/view-case"}/>}*/}
    </div>
  )
}

export default CaseStudy;