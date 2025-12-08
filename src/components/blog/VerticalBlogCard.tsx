import { FC } from 'react'
import { useFormatDate } from 'hooks'
import {BlogCardProps} from 'types/index';

const BlogCard: FC<BlogCardProps> = ({ post, link }) => {
  const { title, shortDescription, image, _id, createdAt } = post
  const { formatDate } = useFormatDate();

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


      <a href={`/${link}/${_id}`}>
        <h3 className="mb-2 text-xl font-bold text-primary transition-colors duration-200 hover:text-theme">
          {title}
        </h3>
        <p className="text-gray-700 truncate">{shortDescription}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500">{formatDate(createdAt)}</span>
          <span className="text-xs font-semibold text-gray-600">
            <a href={`/${link}/${_id}`} className="inline-flex items-center justify-center rounded-full bg-theme px-4 py-2 text-sm font-semibold text-white">
              View
            </a>
          </span>
        </div>
      </a>
    </div>
  )
}

export default BlogCard
