import BlogList from 'components/blog/BlogList';
import { useGetCase } from 'libs/hooks'

const CaseStudyList = () =>{
  const { data: cases = [], isLoading } = useGetCase();
  return (
    <div className="mx-auto max-w-6xl px-3">
      {isLoading ? <p>Đang tải...</p> : <BlogList posts={cases} link={"blog/view-blog"}/>}
    </div>
  );
}

export default CaseStudyList