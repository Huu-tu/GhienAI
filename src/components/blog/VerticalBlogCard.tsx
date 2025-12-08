import { FC } from 'react'
// import { formatDate } from '../../utils'
import {BlogCardProps} from 'types/index';
import Pagination from 'components/pagination/Pagination';

const BlogCard: FC<BlogCardProps> = ({ post, link }) => {
  const { title, shortDescription, image, _id } = post

  return (
    <div
      key={_id}
      className="flex transform flex-col gap-3 rounded-lg   p-3 transition-transform hover:scale-105">
        <span className="absolute right-4 top-4 z-20 inline-flex items-center justify-center rounded-full bg-theme px-3 py-1 text-xs font-semibold capitalize text-white shadow">
          Blog
        </span>
      {image && (
        <figure className="relative h-40 w-full overflow-hidden bg-gray-200">
          <img
            className="absolute inset-0 h-full w-full rounded-md object-cover"
            src={`${import.meta.env.VITE_BASE_API_URL}/img/${image}`}
            alt="demo"
          />
        </figure>
      )}


      <a
        href={`/${link}/${_id}`}>
        <h3 className="mb-2 text-xl font-bold text-primary transition-colors duration-200 hover:text-theme">
          {title}
        </h3>
        <p className="text-gray-700 truncate">{shortDescription}</p>
        <p className="mt-4 text-sm font-semibold text-primary">
          {/*{formatDate(publishDate)} | {estimatedTimeToRead}*/}
        </p>
      </a>
    </div>
  )
}

export default BlogCard
