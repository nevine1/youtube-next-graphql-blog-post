import React from 'react'
import  Link  from 'next/link'

const categories = [
  {
    name: 'React', 
    slug: 'react'
  },
  {
    name: 'WebDevelopment', 
    slug: 'web-dev'
  }
]
const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-10">
      <div className="border-b w-full inline-block border-blue-450 py-10">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer text-4xl ">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {
            categories.map(category =>(
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="text-semibold md:float-right mt-2 align-middle mr-4 cursor-pointer">{category.name}</span>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Header
