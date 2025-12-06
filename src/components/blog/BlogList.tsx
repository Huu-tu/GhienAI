import { FC, useState } from 'react'
import VerticalBlogCard from './VerticalBlogCard'
import HorizontalBlogCard from './HorizontalBlogCard'
import { BlogListProps } from 'types/index'
import Pagination from 'components/pagination/Pagination'

const BlogList: FC<BlogListProps> = ({ posts, type = 'vertical', link }) => {
  const isVertical = type === 'vertical'

  // ---- PAGINATION LOGIC ----
  const postsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="flex flex-col gap-8">

      {/* GRID LIST */}
      <div className={isVertical ? "grid gap-6 sm:grid-cols-2 md:grid-cols-3" : "grid gap-6 sm:grid-cols-2"}>
        {currentPosts.map((post) => (
          isVertical ? (
            <VerticalBlogCard key={post._id} post={post} link={link} />
          ) : (
            <HorizontalBlogCard key={post._id} post={post} link={link} />
          )
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center">
        {/* NEW PAGINATION */}
        {totalPages > 1 && (
          <Pagination
            pageCount={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  )
}

export default BlogList
