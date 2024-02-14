import React from 'react'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostComponent from './PostComponent';


const PostList = ({records, loading, error}) => {

  

  return (
    <Table striped bordered hover className='mt-5'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Other</th>
            </tr>
        </thead>
        <tbody>
            <PostComponent records={records} loading={loading} error={error} />
        </tbody>
        
    </Table>
  )
}

export default PostList;
