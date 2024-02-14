import React, { useEffect, useRef, useState } from 'react'
import { Button, Container, Form, InputGroup, Modal, ModalTitle, Table } from 'react-bootstrap'
import PostList from './PostList'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, fetchPosts } from '../state/PostSlice'


const Feed = () => {
  const dispatch = useDispatch();
  const {records, loading, error} = useSelector(state=>state.posts);

  const titleInput = useRef();
  const descriptionInput = useRef();
  
  useEffect(()=>{
    dispatch(fetchPosts())
  },[dispatch])

  const handleSubmitPost = () => {
    const newPost = {
      title: titleInput.current.value,
      description: descriptionInput.current.value
    }
    dispatch(addPost(newPost))
    handleClose();
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
   const modal =  
         <>
              <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                          <Modal.Title>Add New Post</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <ModalTitle  variant='subtitle'>Entry your below the informations of post !!</ModalTitle>
                        <Form className='my-5 py-2'>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Title</Form.Label>
                              <Form.Control type="text" placeholder="title" ref={titleInput}/>
                              <Form.Text className="text-muted">
                              </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Description</Form.Label>
                              <Form.Control type="text" placeholder="description" ref={descriptionInput}/>
                            </Form.Group>
                        </Form>                     
                        </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                          Close
                          </Button>
                          <Button variant="danger" onClick={handleSubmitPost}>
                          Confirm
                          </Button>
                      </Modal.Footer>
              </Modal>
          </>

  //modal //


  return (
    <Container style={{position: 'relative', height: '100vh', width: '100vw'}}>
      {modal}
      <Button className='btn btn-light' style={{display: 'flex',width: '60px', height:'60px', borderRadius: '50%', position: 'fixed', bottom: '20px', right: '20px', fontSize: '40px', alignItems: 'center', justifyContent: 'center'}} onClick={handleShow}>+</Button>
      <PostList records={records} loading={loading} error={error}/>
    </Container>
  )
}

export default Feed
