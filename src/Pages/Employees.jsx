import React, { useState } from 'react'
import AddEmployee from '../components/AddEmployee'
import ViewEmployee from '../components/ViewEmployee'

function Employees() {
  const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})

  return (
   <>
      <div>
      <div className='heads d-flex justify-content-center aligin-items-center'>
                <h3 ><span style={{color:"orange"}}>|</span> Manage Employees </h3>
            </div>
      </div>
      <div className='d-flex justify-content-center mt-5 mb-5 pb-5 '><AddEmployee setUploadVideoServerResponse={setUploadVideoServerResponse}/></div>
      <ViewEmployee uploadVideoServerResponse={uploadVideoServerResponse}/>
   </>
  )
}

export default Employees