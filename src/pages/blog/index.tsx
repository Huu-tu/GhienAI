import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import BlogList from 'components/blog/BlogList';
import { useGetBlogs } from 'libs/hooks';
import { GetBlogsResponse } from 'types';

const Blog = () => {
  const limit = 9;
  const [page, setPage] = useState<number>(1)
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') || ''

  useEffect(() => {
    setPage(1)
  }, [q])
  const { data, isLoading } = useGetBlogs({ page, limit, q });
  const blogData = data as GetBlogsResponse | undefined;

  return (
    <div className="mx-auto max-w-6xl px-3">
      {isLoading ? (
        <p>Đang tải...</p>
      ) : (
        <BlogList
          posts={blogData?.data || []}
          page={page}
          totalPages={blogData?.pagination?.totalPages || 1}
          onPageChange={setPage}
          link="blog/view-blog"
        />
      )}
    </div>
  );
};

export default Blog;
