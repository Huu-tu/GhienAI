import { FC } from 'react'
import VerticalBlogCard from './VerticalBlogCard'
import HorizontalBlogCard from './HorizontalBlogCard'
import {BlogListProps} from 'types/index';

const BlogList: FC<BlogListProps> = ({ posts, type = 'vertical', link }) => {
  const isVertical = type === 'vertical'

  if (isVertical) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <VerticalBlogCard key={post._id} post={post} link={link}/>
        ))}
      </div>
    )
  } else {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <HorizontalBlogCard key={post._id} post={post} link={link}/>
        ))}
      </div>
    )
  }
}

export default BlogList
