import React, { useState } from 'react'
import { deleteEmployee, deleteHosteller, editEmployees } from '../services/allAPI';
import {  Form,Modal ,Button} from 'react-bootstrap'


function EmployeeCard({displaydata,index,res,getAllEmployees,setRes,setDeleteSpecificEmployee}) {

    const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [employee,setEmployee]=useState({
    image:displaydata.image,name:displaydata.name,place:displaydata.place,address:displaydata.address,phone:displaydata.phone,email:displaydata.email,dob:displaydata.dob
})
  const handleClose = () => setShow(false);
  const editEmployee=async()=>{
    // make api call
    const response=await editEmployees(displaydata.id,employee)
    if(res==true){
      setRes(false)
    }
    else{
      setRes(true)
    }
    getAllEmployees()
    
}
const removeEmployee=async (id)=>{
  // make api call
  const response =await deleteEmployee(id)
  setDeleteSpecificEmployee(true)

}



  return (
    <div className='container'>
        <div className='container '>
                
                    
        { displaydata&&
    <div className='host d-flex justify-content-evenly flex-wrap-lg p-4 mt-5'>
                 <div className='d-flex justify-content-center align-items-center'> <img width={'150px'} height={'150px'} style={{objectFit:"cover",borderRadius:"10px"}} src={displaydata.image} alt="" /></div>
                   <div className='ms-4 d-flex justify-content-center aligin-items-center flex-column w-75'>
                     <h4>{displaydata?.name}</h4>
                          <h6>{displaydata.place}</h6>
                       <h6>Ph : {displaydata.phone}</h6>
                       <h6>Adr: {displaydata.address}</h6>
                       <h6>Email: {displaydata.email}</h6>
                       <h6>DOB: {displaydata.dob}</h6>
                    <div className='d-flex justify-content-between '>
                    <button onClick={handleShow} className='btn btn-primary'>   Edit </button>
                    <button onClick={()=>removeEmployee(displaydata.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>

                </div>
            </div>

           </div>
              
        }
            </div>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='aaa d-flex justify-content-center flex-column align-items-center'>
           <img height={'200px'} width={'200px'} style={{objectFit:"cover"}} src={displaydata.image} alt="" />
           <div className='d-flex justify-content-between w-75 mt-4'>
             <label htmlFor="">Name</label>
             <input type="text" value={employee.name}              onChange={(e)=>setEmployee({...employee,name:e.target.value})}
/>
           </div>
           <div className='d-flex justify-content-between w-75 mt-3'>
             <label htmlFor="">Place</label>
             <input type="text" value={employee.place}              onChange={(e)=>setEmployee({...employee,place:e.target.value})}
/>
           </div>
           <div className='d-flex justify-content-between w-75 mt-3'>
             <label htmlFor="">Address</label>
             <input type="text" value={employee.address}              onChange={(e)=>setEmployee({...employee,address:e.target.value})}
/>
           </div>
           <div className='d-flex justify-content-between w-75 mt-3'>
             <label htmlFor="">Phone</label>
             <input type="text" value={employee.phone}              onChange={(e)=>setEmployee({...employee,phone:e.target.value})}
/>
           </div>
           <div className='d-flex justify-content-between w-75 mt-3'>
             <label htmlFor="">Email</label>
             <input type="text" value={employee.email}              onChange={(e)=>setEmployee({...employee,email:e.target.value})}
/>
           </div>
           <div className='d-flex justify-content-between w-75 mt-3'>
             <label htmlFor="">DOB</label>
             <input type="text" value={employee.dob}              onChange={(e)=>setEmployee({...employee,dob:e.target.value})}
/>
           </div>
          
         </div>





        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={editEmployee}  variant="primary" >Save changes</Button>
        </Modal.Footer>

        
      </Modal>
    </div>
  )
}

export default EmployeeCard