"use client"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gettingCategoriesList} from '../../../store/slices/category/categorySlice'
import { fetchCategories} from '../../../store/slices/category/categoriesAsync'
import { CategoryPostsList, CategoriesList , AddCategoryForm} from '@/components/page'
import Link from 'next/link'
const page = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector((state) =>state.categories)

  useEffect(() =>{
    dispatch(fetchCategories());
  }, [dispatch])

  
 
  useEffect(() => {

    const storedCategories = localStorage.getItem('categories');

    if (storedCategories) {
        dispatch(gettingCategoriesList(JSON.parse(storedCategories)));
    } else {
        dispatch(fetchCategories());
    }
}, [dispatch]);

  useEffect(() => {
    if (categories.length > 0) {
        localStorage.setItem('categories', JSON.stringify(categories));
    }
}, [categories]);



  return (
    <div className="container mx-auto px-10 mb-8" style={{width: '70%'}}>
      <div className="bg-white p-8 rounded-lg">
        {
          categories.map((category) =>(
            <div key={category.id} className="bg-slate-100 p-6 mb-4 rounded-lg text-semibold text-[20px]">
              <Link href={`/categories/${category.slug}`}>{category.name}</Link>
            </div>
          ))
        }
        <div>
          <AddCategoryForm/>
        </div>
      </div>
    </div>
  )
}

export default page