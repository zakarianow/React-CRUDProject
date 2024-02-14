
import { useEffect, useRef, useState } from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost, updatePost } from '../store/PostSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import usePostDetails from '../hooks/use-post-details';



const EditPost = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {loading, error, record } = useSelector(state => state.posts);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const {record, loading, error} = usePostDetails();

  useEffect(() => {
    if(record){
      setTitle(record?.title);
      setDescription(record?.description);
    }
  }, [record])

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      title, description, id : record.id
    }
    dispatch(updatePost(updatedPost));
  }

 
  return (
    <Container>
      <Form className='my-5 py-2' onSubmit={handleSubmit}>

         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control type="number" readOnly />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
          </Form.Group>
 
          <ButtonGroup>
            <Loading loading={loading} error={error} >
              <Button variant="primary" type="submit" style={{marginRight: 3}}>Update</Button>
            </Loading>
            
              <Button variant="secondary" type="btn" onClick={() =>  navigate("/")}>Cancel</Button>
          </ButtonGroup>
      </Form>

    </Container>
    
  );
}

export default EditPost;

