import {useState, useEffect} from 'react'
import { fetchCategoriesList} from '../../store/slices/category/categoriesAsync'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
const CategoriesList = () => {
  const dispatch = useDispatch(); 
  const { categories, isLoading, error  } = useSelector((state) =>state.categories)
  
  useEffect(() =>{
    fetchCategoriesList();
  }, [dispatch])

  useEffect(() =>{
    console.log(categories)
  }, [categories])
  console.log(categories)

  
  console.log(categories)
  return (
    <div >
      
      {isLoading && (
        
        categories.map((category) =>(
          <div key={category.id}>
            <Link href={`/categories/${category.slug}`}>
              {category.name} {" "}
              {category.slug}
            </Link>
          </div>
        ))
        )} 

    </div>
  )
}

export default CategoriesList