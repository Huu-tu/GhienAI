import {  categories, description, title } from 'appData'
import CategoryList from 'components/category/CategoryList'
import SectionHeading from 'components/sectionHeading/ColoredSectionHeading'
import Banner from 'components/banner/SimpleBanner.tsx'
import BlogList from 'components/blog/BlogList';
import { useGetBlogs } from 'libs/hooks';

const Base= ()=>{
  const { data: blogs = [], isLoading } = useGetBlogs();

  return(
    <>
      <Banner title={title} description={description}/>
      <div className="mx-auto max-w-6xl px-3">
        <CategoryList categories={categories} />
        {/*<SectionHeading*/}
        {/*  title={['Latest', 'Articles']}*/}
        {/*  subtitle=""*/}
        {/*/>*/}
        {/*{isLoading ? <p>Đang tải...</p> : <BlogList posts={blogs} link={"blog/view-blog"}/>}*/}

        <SectionHeading
          title={['Popular', 'Articles']}
          subtitle=""
        />
        {isLoading ? <p>Đang tải...</p> : <BlogList posts={blogs} type="horizontal" link={"blog/view-blog"}/>}
        {/*<Faq items={faqs} />*/}
        {/*<Newsletter />*/}
      </div>
    </>
  )
}

export default Base;