"use client"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories} from '../../../store/slices/category/categoriesAsync'
import { CategoryPostsList, CategoriesList , AddCategoryForm} from '@/components/page'
import Link from 'next/link'
const page = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector((state) =>state.categories)


  useEffect(() =>{

    dispatch(fetchCategories())
  }, [])

 

if (error) {
    return <div>Error: {error}</div>;
}

  console.log(categories)
  return (
    <div>
      {
        categories.map((category, index) =>(
          <div key={category.index}>
            <Link href={`/categories/${category.slug}`}>{category.name}</Link>
          </div>
        ))
      }
      <div>
        <AddCategoryForm/>
      </div>
    </div>
  )
}

export default page