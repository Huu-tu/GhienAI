import BlogList from 'components/blog/BlogList'
import { blogPosts } from 'appData'

const Blog = ()=>{
  return(
    <div className="mx-auto max-w-6xl px-3">
      <BlogList posts={blogPosts} />
    </div>
  )
}

export default Blog;