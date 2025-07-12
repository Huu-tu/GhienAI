import {  categories, description, faqs, title } from 'appData'
import CategoryList from 'components/category/CategoryList'
import SectionHeading from 'components/sectionHeading/ColoredSectionHeading'
import Faq from 'components/faq/Faq'
import Newsletter from 'components/newsletter/Newsletter'
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
        <SectionHeading
          title={['Latest', 'Articles']}
          subtitle=""
        />
        {isLoading ? <p>Đang tải...</p> : <BlogList posts={blogs} />}

        <SectionHeading
          title={['Popular', 'Articles']}
          subtitle=""
        />
        {isLoading ? <p>Đang tải...</p> : <BlogList posts={blogs} type="horizontal" />}
        <Faq items={faqs} />
        <Newsletter />
      </div>
    </>
  )
}

export default Base;