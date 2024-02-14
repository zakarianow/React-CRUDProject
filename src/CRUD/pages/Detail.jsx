import React, { useEffect } from 'react'
import usePostDetails from '../hooks/use-post-details'
import { useDispatch } from 'react-redux';
import { cleanData } from '../store/PostSlice';

const Detail = () => {
  const dispatch = useDispatch();

    const {record, loading, error} = usePostDetails();

  return (
    <div style={{display: 'flex', flexDirection: 'column',height: '100vh', justifyContent: 'center', alignItems: 'center', fontSize: '30px', fontWeight: 'bold'}}>
      <p>{record?.id}</p>
      <p>{record?.title}</p>
      <p>{record?.description}</p>
    </div>
  )
}

export default Detail
