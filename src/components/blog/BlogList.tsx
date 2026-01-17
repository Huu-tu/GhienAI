import { FC } from 'react'
import VerticalBlogCard from './VerticalBlogCard'
import HorizontalBlogCard from './HorizontalBlogCard'
import Pagination from 'components/pagination/Pagination'
import { BlogListProps } from 'types/index'

const BlogList: FC<BlogListProps> = ({ posts, page,totalPages, onPageChange, type = 'vertical', link, }) => {
  const isVertical = type === 'vertical'

  return (
    <div className="flex flex-col gap-8">
      <div
        className={
          isVertical
            ? 'grid gap-6 sm:grid-cols-2 md:grid-cols-3'
            : 'grid gap-6 sm:grid-cols-2'
        }
      >
        {posts.map((post) =>
          isVertical ? (
            <VerticalBlogCard key={post._id} post={post} link={link} />
          ) : (
            <HorizontalBlogCard key={post._id} post={post} link={link} />
          )
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination
            pageCount={totalPages}
            page={page}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  )
}

export default BlogList
