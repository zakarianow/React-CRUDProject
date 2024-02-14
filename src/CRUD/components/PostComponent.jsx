import React, { useRef, useState } from 'react'
import { Button, ButtonGroup, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { deletePost } from '../store/PostSlice';
import Loading from './Loading';


const PostComponent = ({records, loading, error}) => {

    const [deletedPost, setDeletedPost] = useState(null);

    //modal //
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const confirmDelete = () => {
        // console.log(deletedpost);
         dispatch(deletePost(deletedPost))
         handleClose();
    }

     const modal =  
           <>
                <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Delete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure to delete this post !!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                            Close
                            </Button>
                            <Button variant="danger" onClick={confirmDelete}>
                            Delete
                            </Button>
                        </Modal.Footer>
                </Modal>
            </>

    //modal //

    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    const data = records?.map((el, idx) => {
        return <tr key={el.id}>
                <td>{++idx}</td>
                    <td><NavLink to={`/post/${el?.id}`}>{el.title}</NavLink></td>
                    <td>{el.description}</td>
                    <td>
                        <ButtonGroup>
                            <button className='btn btn-success'  onClick={() => handleEdit(el, navigate(`/post/${el.id}/edit`))}>Edit</button>
                            <button className='btn btn-danger' onClick={() => handleDelete(el)} >Delete</button>
                        </ButtonGroup>
                </td>
            </tr>
    
    })

    const handleEdit = (element) => {
        // console.log(id)
    };

    const handleDelete = (element) => {
        handleShow();
        setDeletedPost(element);
       
    };
    
  return (
    <>
        {modal}
        <Loading loading={loading} error={error}>
            {data}
        </Loading>
                       
    </>
    
    )
}

export default PostComponent
