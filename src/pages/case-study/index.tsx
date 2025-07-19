import BlogList from 'components/blog/BlogList';
import {  useGetCase } from 'libs/hooks'

const CaseStudy = ()=>{
  const { data: cases = [], isLoading } = useGetCase();

  return(
    <div className="mx-auto max-w-6xl px-3">
      {isLoading ? <p>Đang tải...</p> : <BlogList posts={cases} type="horizontal" link={"case-study/view-case"}/>}
    </div>
  )
}

export default CaseStudy;