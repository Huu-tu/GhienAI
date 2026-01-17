import {  description, title } from 'appData'
import Banner from 'components/banner/SimpleBanner.tsx'
import FeaturedArticles from 'components/featuredArticles/FeaturedArticles';
import { useGetBlogs } from 'libs/hooks';
import { GetBlogsResponse } from 'types'

const Base= ()=>{
  const limit = 9;
  const page = 1
  const { data } = useGetBlogs({ page, limit });
  const blogData = data as GetBlogsResponse | undefined;
  return(
    <>
      <Banner title={title} description={description}/>
      <div >
        <FeaturedArticles  posts={blogData?.data || []} type="horizontal" link={"blog/view-blog"}/>
      </div>
    </>
  )
}

export default Base;