import { blogPosts, categories, description, faqs, title } from 'appData'
import CategoryList from 'components/category/CategoryList'
import SectionHeading from 'components/sectionHeading/ColoredSectionHeading'
import BlogList from 'components/blog/BlogList'
import Faq from 'components/faq/Faq'
import Newsletter from 'components/newsletter/Newsletter'
import Banner from 'components/banner/SimpleBanner.tsx'

const Base= ()=>{
  return(
    <>
      <Banner title={title} description={description}/>
      <div className="mx-auto max-w-6xl px-3">
        <CategoryList categories={categories} />
        <SectionHeading
          title={['Latest', 'Articles']}
          subtitle=""
        />
        <BlogList posts={blogPosts} />

        <SectionHeading
          title={['Popular', 'Articles']}
          subtitle=""
        />
        <BlogList posts={blogPosts} type="horizontal" />

        <Faq items={faqs} />
        <Newsletter />
      </div>
    </>
  )
}

export default Base;