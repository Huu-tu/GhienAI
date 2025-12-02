import React from 'react'
import Category from './CategoryCard'

interface CategoryListProps {
  categories: { imageSrc: string; altText: string; categoryName: string }[]
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <section className="py-8">
      <h2 className="mb-7 text-center text-2xl font-bold text-primary">Công nghệ chung tôi có</h2>
      <div className="overflow-hidden w-[80%] mx-auto">
        <div className="flex gap-10 animate-[scrollX_20s_linear_infinite]">
          {[...categories, ...categories].map((category, index) => (
            <Category
              key={index}
              imageSrc={category.imageSrc}
              altText={category.altText}
              categoryName={category.categoryName}
            />
          ))}
        </div>
      </div>

    </section>
  )
}

export default CategoryList
