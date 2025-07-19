import { FC } from 'react'
// import { formatDate } from '../../utils'
import {BlogCardProps} from 'types/index';

const BlogCard: FC<BlogCardProps> = ({ post, link }) => {
  const { title, shortDescription, image, _id } = post

  return (
    <div key={_id} className="flex flex-col gap-3 rounded-lg border bg-light p-3 lg:flex-row">
      <figure className="relative mt-1 h-24 min-w-40 overflow-hidden bg-gray-200">
        <img
          className="absolute inset-0 h-full w-full rounded-md object-cover transition-transform duration-300 hover:scale-125"
          src={`http://localhost:4000/img/` + `${image}`}
          alt="demo"
        />
      </figure>

      <a href={`http://localhost:5173/${link}/${_id}`}>
        <h3 className="mb-2 text-xl font-bold text-primary transition-colors duration-200 hover:text-theme">
          {title}
        </h3>
        <p className="text-gray-700">{shortDescription}</p>
        <p className="mt-4 text-sm font-semibold text-primary">
          {/*{formatDate(publishDate)} | {estimatedTimeToRead}*/}
        </p>
      </a>
    </div>
  )
}

export default BlogCard
