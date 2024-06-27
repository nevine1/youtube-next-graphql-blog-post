import {useEffect} from 'react'
import { useParams } from 'react/navigation';
import { CategoryPostDetails } from '../../../../../components/page'
import { fetchPostDetails } from '../../../../../../store/slices/posts/postsAsync';
import { useDispatch, useSelector } from 'react-redux'
const page = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { postDetails } = useSelector((state) => state.posts);
    console.log(postDetails)
    console.log('post deetailssssssssssssss')
    console.log(slug)
    useEffect(() =>{
        if(slug){
            dispatch(fetchPostDetails(slug))
        }
    }, [dispatch, slug])
  return (
    <div>hello this is page of post slug</div>
  )
}

export default page