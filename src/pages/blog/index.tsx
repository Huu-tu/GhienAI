import BlogList from 'components/blog/BlogList';
import { useGetBlogs } from 'libs/hooks';

const Blog = () => {
  const { data: blogs = [], isLoading } = useGetBlogs();
  return (
    <div className="mx-auto max-w-6xl px-3">
      {isLoading ? <p>Đang tải...</p> : <BlogList posts={blogs} link={"blog/view-blog"}/>}
    </div>
  );
};

export default Blog;
