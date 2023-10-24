import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  Form,Modal ,Button} from 'react-bootstrap'
import './HostellerCard.css'
import { deleteHosteller, editHosteller } from '../services/allAPI';

function HostellerCard({displaydata,getAllUploadedHostellers,setRes,res,setDeleteSpecificHosteller}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [hosteller,setHosteller]=useState({
    image:displaydata.image,name:displaydata.name,place:displaydata.place,address:displaydata.address,phone:displaydata.phone,email:displaydata.email,dob:displaydata.dob
})
  const handleClose = () => setShow(false);
  const editHostellers=async()=>{
    // make api call
    const response=await editHosteller(displaydata.id,hosteller)
    if(res==true){
      setRes(false)
    }
    else{
      setRes(true)
    }
    getAllUploadedHostellers()
    
}
const removeHosteller=async (id)=>{
  // make api call
  const response=await deleteHosteller(id)
  setDeleteSpecificHosteller(true)
}



  console.log(hosteller);
  return (
    <div>
{
    displaydata&&
    <div className='host d-flex justify-content-evenly p-4 mt-5'>
                 <div className='d-flex justify-content-center align-items-center'> <img src={displaydata.image} alt="" /></div>
                   <div className='ms-4 d-flex justify-content-center aligin-items-center flex-column w-75'>
                     <h4>{displaydata?.name}</h4>
                          <h6>{displaydata.place}</h6>
                       <h6>Ph : {displaydata.phone}</h6>
                       <h6>Adr: {displaydata.address}</h6>
                       <h6>Email: {displaydata.email}</h6>
                       <h6>DOB: {displaydata.dob}</h6>
                    <div className='d-flex justify-content-between '>
                    <button onClick={handleShow} className='btn btn-primary'>   Edit </button>
                    <button onClick={()=>removeHosteller(displaydata.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>

                </div>
            </div>

           </div>}

           <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hosteller Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='aaa d-flex justify-content-center flex-column align-items-center'>
           <img height={'200px'} width={'200px'} style={{objectFit:"cover"}} src={displaydata.image} alt="" />
           <div className='d-flex justify-content-between w-75 mt-4'>
             <label htmlFor="">Name</label>
             <input type="text" value={hosteller.name}              onChange={(e)=>setHosteller({...hosteller,name:e.target.value})}
/>
           </div>
           <div className='d-flex justify-content-between w-75 mt-3'>
             <label htmlFor="">Place</label>
             <input type="text" value={hosteller.place}              onChange={(e)=>setHosteller({...hosteller,place:e.target.value})}
/>
           </div>
           <div className='d-flex justify-content-between w-75 mt-3'>
             <label htmlFor="">Address</label>
             <input type="text" value={hosteller.address}              onChange={(e)=>setHosteller({...hosteller,address:e.target.value})}
/>
           </div>
           <div className='d-flex justify-content-between w-75 mt-3'>
             <label htmlFor="">Phone</label>
             <input type="text" value={hosteller.phone}              onChange={(e)=>setHosteller({...hosteller,phone:e.target.value})}
/>
           </div> 
           <div className='d-flex justify-content-between w-75 mt-3'>
             <label htmlFor="">Email</label>
             <input type="text" value={hosteller.email}              onChange={(e)=>setHosteller({...hosteller,email:e.target.value})}
/>
           </div>
           <div className='d-flex justify-content-between w-75 mt-3'>
             <label htmlFor="">DOB</label>
             <input type="text" value={hosteller.dob}              onChange={(e)=>setHosteller({...hosteller,dob:e.target.value})}
/>
           </div>
          
         </div>





        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={editHostellers}  variant="primary" >Save changes</Button>
        </Modal.Footer>

        
      </Modal>

    </div>
  )
}

export default HostellerCard