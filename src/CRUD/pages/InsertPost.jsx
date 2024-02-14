
import { ButtonGroup, Container, FormText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/PostSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import {  useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  title : Yup.string().required("title field is required"),
  description : Yup.string().min(20, "the description is very short, it must be great than 40 charecter").required("description field is required")
})

const InsertPost = () => {

   const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title : '',
      description : ''
    },
    onSubmit : values => {
      
      console.log(values)
      const id = Math.floor(Math.random()*500);

      const newPost = {
        title : values.title,
        description : values.description,
      }

      dispatch(addPost(newPost))
      .unwrap()
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
    },
    validationSchema : validationSchema,   
        
  })

  
 
  const navigate = useNavigate();
  const {loading, error} = useSelector(state => state.posts);
  
  return (
    <Container>
      <Form className='my-5 py-2' onSubmit={formik.handleSubmit} >

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="title" name='title' value={formik.values.title} onChange={formik.handleChange} isInvalid={!!formik.errors.title}/> 
            <Form.Control.Feedback  type='invalid'>
              {/* We'll never share your email with anyone else. */}
              { formik.touched.title ? formik.errors.title : ''}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="description" name='description' value={formik.values.description} onChange={formik.handleChange} isInvalid={!!formik.errors.description}/>
            <FormText className='text-danger'>
             {formik.touched.description && formik.errors.description}
            </FormText>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" ref={checkbox}/>
          </Form.Group> */}
          <ButtonGroup>
            <Loading loading={loading} error={error} >
              <Button variant="primary" type="submit" style={{marginRight: 3}}>Submit</Button>
            </Loading>
            
              <Button variant="secondary" type="btn" onClick={() => {return navigate("/")}}>Cancel</Button>
          </ButtonGroup>
      </Form>

    </Container>
    
  );
}

export default InsertPost;
