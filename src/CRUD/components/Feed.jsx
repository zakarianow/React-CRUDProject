import React, { useEffect } from 'react'
import { Container} from 'react-bootstrap'
import PostList from './PostList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../store/PostSlice'



const Feed = () => {

  const dispatch = useDispatch();
  const {records, loading, error} = useSelector(state=>state.posts);
  
  useEffect(()=>{
    dispatch(fetchPosts())
  },[dispatch])

   return (
    <Container style={{position: 'relative', height: '100vh', width: '100vw'}}>
      {/* <Button className='btn btn-light' style={{display: 'flex',width: '60px', height:'60px', borderRadius: '50%', position: 'fixed', bottom: '20px', right: '20px', fontSize: '40px', alignItems: 'center', justifyContent: 'center'}}>+</Button> */}
      <PostList records={records} loading={loading} error={error}/>
    </Container>
  )
}

export default Feed;
