import React, { useState } from 'react'
import { Button,  Form, Modal } from 'react-bootstrap';
import { uploadEmployee } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddEmployee({setUploadVideoServerResponse}) {


    const [employee,setEmployee]=useState({
        image:"",name:"",place:"",address:"",phone:"",email:"",dob:""
    })


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEmpUpload=async()=>{
    // get details of hostellers
    const {image,name,place,address,phone,email,dob}=employee
    // if hosteller is empty or not
    if(!image || !name || !place || !address || !phone || !email || !dob ){
        toast.warning("please fill the form compltely")
    }else{
        // make api call
        const response =await uploadEmployee(employee)
        if(response.status>=200 && response.status<300){
            toast.success(`"${response.data.name}"  added successfully...`)
            // set server response
            setUploadVideoServerResponse(response.data)
            setEmployee({
    
                image:"",name:"",place:"",address:"",phone:"",email:"",dob:""
            })
            // hide modal
            handleClose()
          }else{
            toast.error("Uploading Error perform the action after some time")
          }
    }
  }
  return (
    <div >

<div className="d-flex align-items-center">
      <button onClick={handleShow}  className='btn btn-dark fs-5'> Add New Employee &nbsp;<i class="fa-solid fa-plus"></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the following details</p>
         <Form/>
         <Form.Group className='mb-3' controlId="formBasicEmail">
          <Form.Control
            required
            type="text"
            placeholder="Image link"
            onChange={(e)=>setEmployee({...employee,image:e.target.value})}
            
           
          /> 
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Name"
            onChange={(e)=>setEmployee({...employee,name:e.target.value})}
           
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Place"
            onChange={(e)=>setEmployee({...employee,place:e.target.value})}
           
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Address"
            onChange={(e)=>setEmployee({...employee,address:e.target.value})}
           
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Phone"
            onChange={(e)=>setEmployee({...employee,phone:e.target.value})}
           
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Email"
            onChange={(e)=>setEmployee({...employee,email:e.target.value})}
          
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
            <label htmlFor="">DOB</label>
          
          <Form.Control
            required
            type="date"
            placeholder="Date of birth"
            onChange={(e)=>setEmployee({...employee,dob:e.target.value})}
          
           
          />
        </Form.Group>

        
        <Form/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleEmpUpload} variant="primary" >Upload</Button>
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

export default AddEmployee