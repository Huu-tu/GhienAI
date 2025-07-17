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
      >
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          {blog?.paragraph}
        </p>
        <div className="mb-10 w-full overflow-hidden rounded">
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            <img
              src={`http://localhost:4000/img/` + `${blog?.image}`}
              alt="image"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div
          className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
        ></div>
      </div>
    </div>
    )
}

export default ModalViewBlog;