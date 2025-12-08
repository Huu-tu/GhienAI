import { FC } from 'react'
import { BlogListProps } from 'types/index'
import SectionHeading from 'components/sectionHeading/ColoredSectionHeading'
import { useFormatDate } from 'hooks'

const FeaturedArticles: FC<BlogListProps> = ({posts, link}) =>{
  const { formatDate } = useFormatDate();

  return(
    <section className="py-16 px-4 sm:py-20 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={['Popular', 'Articles']}
          subtitle=""
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow
                overflow-hidden border border-gray-100 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <img
                  src={`${import.meta.env.VITE_BASE_API_URL}/img/` + `${post.image}`}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                    {post.type}
                  </span>
                  {/*<span className="text-xs text-gray-500">{article.readTime}</span>*/}
                </div>

                <h3
                  className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500
                  transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.shortDescription}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{formatDate(post.createdAt)}</span>
                  <span className="text-xs font-semibold text-gray-600">
                    <a href={`/${link}/${post._id}`} className="inline-flex items-center justify-center rounded-full bg-theme px-4 py-2 text-sm font-semibold text-white">
                      View
                    </a>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

  )
}

export default FeaturedArticles