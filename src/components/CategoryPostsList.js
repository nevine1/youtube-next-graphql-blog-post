import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoryPostsList } from '../../store/slices/category/categoriesAsync';
const CategoryPostsList = () => {
    const { categories, isLoading, error } = useSelector((state) =>state.categories);
    const dispatch = useDispatch();
   /*  useEffect(() =>{
        dispatch(fetchCategoryPostsList());
    }, [dispatch]) */
    console.log(categories)
  return (
    <div>CategoryPostsList</div>
  )
}

export default CategoryPostsList