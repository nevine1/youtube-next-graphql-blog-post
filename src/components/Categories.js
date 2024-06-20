import {useState, useEffect} from 'react'
import { fetchCategoriesList } from '../../store/slices/category/categoriesAsync'
import { useDispatch, useSelector } from 'react-redux';
const Categories = () => {
  const dispatch = useDispatch(); 
  const { categories, isLoading, error  } = useSelector((state) =>state.categories)
  
  useEffect(() => {
    dispatch(fetchCategoriesList());
}, [dispatch]);

/* useEffect(() => {
    console.log('Categories:', categories);
}, [categories]); */



if (error) {
    return <div>Error: {error}</div>;
}
  
  console.log(categories)
  return (
    <div className="bg-white rounded-lg mb-8 p-5">
      <h2 className="font-semibold border-b text-xl mb-3">Categories</h2>
      {isLoading && (
        // Conditional rendering within useEffect to ensure fetched data
        categories.map((category) =>(
          <div key={category.id}
            className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-3 mb-3">
            <h1 className="transition duration-700  mb-2 cursor-pointer hover:text-pink-600 text-[20px] ">
              {category.name}
            </h1>
          </div>
          

        ))
        )} 

    </div>
  )
}

export default Categories