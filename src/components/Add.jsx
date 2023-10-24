import React, { useState } from 'react'
import { Button, Col, Form, Modal } from 'react-bootstrap';
import { uploadHosteller } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {


    const [hosteller,setHosteller]=useState({
        image:"",name:"",place:"",address:"",phone:"",email:"",dob:""
    })


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload=async()=>{
    // get details of hostellers
    const {image,name,place,address,phone,email,dob}=hosteller
    // if hosteller is empty or not
    if(!image || !name || !place || !address || !phone || !email || !dob ){
        toast.warning("please fill the form compltely")
    }else{
        // make api call
        const response =await uploadHosteller(hosteller)
        if(response.status>=200 && response.status<300){
            toast.success(`"${response.data.name}"  added successfully...`)
            // set server response
            setUploadVideoServerResponse(response.data)
            setHosteller({
    
                image:"",name:"",place:"",address:"",phone:"",email:"",dob:""
            })
            // hide modal
            handleClose()
          }else{
            toast.success("Uploading Error perform the action after some time")
          }
    }
  }
  return (
    <div >

<div className="d-flex align-items-center">
      <button onClick={handleShow}  className='btn btn-dark fs-5'> Add New Hosteler &nbsp;<i class="fa-solid fa-plus"></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Hostler</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the following details</p>
         <Form/>
         <Form.Group className='mb-3' controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Image link"
            onChange={(e)=>setHosteller({...hosteller,image:e.target.value})}
            
           
          /> 
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Name"
            onChange={(e)=>setHosteller({...hosteller,name:e.target.value})}
           
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Place"
            onChange={(e)=>setHosteller({...hosteller,place:e.target.value})}
           
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Address"
            onChange={(e)=>setHosteller({...hosteller,address:e.target.value})}
           
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Phone"
            onChange={(e)=>setHosteller({...hosteller,phone:e.target.value})}
           
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Email"
            onChange={(e)=>setHosteller({...hosteller,email:e.target.value})}
          
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
            <label htmlFor="">DOB</label>
          
          <Form.Control
            required
            type="date"
            placeholder="Date of birth"
            onChange={(e)=>setHosteller({...hosteller,dob:e.target.value})}
          
           
          />
        </Form.Group>

        
        <Form/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary" >Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}
      
      />
    </div>
  )
}

export default Add