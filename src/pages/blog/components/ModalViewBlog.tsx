import { useParams } from 'react-router-dom';
import SectionHeading from 'components/sectionHeading/ColoredSectionHeading'
import {useViewBlog} from "libs/hooks"

const ModalViewBlog=  () =>{
  const { id } = useParams();
  const { data: blog, isLoading, error } = useViewBlog(id as string);

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div>Đã xảy ra lỗi khi tải blog.</div>;
  if (!blog) return <div>Không tìm thấy blog.</div>;
  return(
    <div className="mx-auto max-w-6xl px-3">
      <SectionHeading
        title={[`${blog?.title}`]}
        subtitle=""
      />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6"
           dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
      >
        {/*{blog?.content}*/}
      </div>
    </div>
    )
}

export default ModalViewBlog;