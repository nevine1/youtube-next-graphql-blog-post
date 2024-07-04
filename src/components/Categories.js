"use client";
import { useEffect } from 'react'
import {fetchCategories  } from '../../store/slices/category/categoriesAsync'
import { useDispatch, useSelector} from 'react-redux';
import Link from 'next/link'
const Categories = () => {
    const dispatch = useDispatch();
    const { categories , isLoading, error} = useSelector((state) => state.categories)
console.log(categories)
    useEffect(() =>{
        dispatch(fetchCategories());
    }, [])
  return (
    <div className="bg-white rounded-lg mb-8 p-5">
        <h2 className="font-semibold border-b text-xl mb-8">Categories List</h2>
        { categories.length > 0 &&
            categories.map((category) =>(
                <div className="bg-gray-100 mb-4 p-3 rounded-md border-red-950"
                    key={category.id}
                    >
                    <Link href={`/categories/${category.slug}`}>{category.name}</Link>
                </div>
            ))
        }
    </div>
  )
}

export default Categories