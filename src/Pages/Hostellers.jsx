import React, { useState } from 'react'
import Add from '../components/Add'
import ViewHostellers from '../components/ViewHostellers'

function Hostellers() {
    const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})

  return (
    <>
    <div className='heads d-flex justify-content-center aligin-items-center'>
                <h3 ><span style={{color:"orange"}}>|</span> Manage Hostelers </h3>
            </div>
        <div className='d-flex justify-content-center w-100 container mt-5'>
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
          
    
        </div>
        <div>
            <ViewHostellers setUploadVideoServerResponse={setUploadVideoServerResponse} uploadVideoServerResponse={uploadVideoServerResponse}/>
        </div>
    </>
  )
}

export default Hostellers