import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanData, fetchPost, updatePost } from '../store/PostSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';


const usePostDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {record, loading, error} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(cleanData())
      }, [dispatch])

    useEffect(() => {
        dispatch(fetchPost(id));
    }, dispatch, id);

    

    return {record, loading, error}

}

export default usePostDetails;