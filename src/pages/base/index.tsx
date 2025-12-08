import {   description, title } from 'appData'
import Banner from 'components/banner/SimpleBanner.tsx'
import FeaturedArticles from 'components/featuredArticles/FeaturedArticles';
import { useGetBlogs } from 'libs/hooks';

const Base= ()=>{
  const { data: blogs = [] } = useGetBlogs();

  return(
    <>
      <Banner title={title} description={description}/>
      <div >
        <FeaturedArticles posts={blogs} type="horizontal" link={"blog/view-blog"}/>
      </div>
    </>
  )
}

export default Base;