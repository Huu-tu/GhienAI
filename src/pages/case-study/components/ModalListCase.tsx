import { FC, useState } from 'react'
import Pagination from 'components/pagination/Pagination'
import { BlogListProps } from 'types/index'

const ModalListCase: FC<BlogListProps> = ({ posts, link }) => {

  // ---- PAGINATION LOGIC ----
  const postsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-6 sm:grid-cols-2">
        {
          currentPosts.map((post)=>(
            <div key={post._id} className="flex flex-col gap-3 rounded-lg  p-3 lg:flex-row">
              <figure className="relative mt-1 h-24 min-w-40 overflow-hidden bg-gray-200">
                <img
                  className="absolute inset-0 h-full w-full rounded-md object-cover transition-transform duration-300 hover:scale-125"
                  src={`${import.meta.env.VITE_BASE_API_URL}/img/` + `${post.image}`}
                  alt="demo"
                />
              </figure>

              <a
                href={`/${link}/${post._id}`}
              >
                <h3 className="mb-2 text-xl font-bold text-primary transition-colors duration-200 hover:text-theme">
                  {post.title}
                </h3>
                <p className="text-gray-700 truncate">{post.shortDescription}</p>

                <p className="mt-4 text-sm font-semibold text-primary">
                  {/*{formatDate(publishDate)} | {estimatedTimeToRead}*/}
                </p>
              </a>
            </div>
          ))
        }

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
    </div>
  );
}

export default ModalListCase;