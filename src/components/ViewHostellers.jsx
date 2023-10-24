import React, { useEffect, useState } from 'react'
import HostellerCard from './HostellerCard'
import { getHosteller } from '../services/allAPI';


function ViewHostellers({uploadVideoServerResponse,}) {
    const [allHostellers,setAllHostellers]=useState([]);
    const [res,setRes]=useState(true)
    const[deleteSpecificHosteller,setDeleteSpecificHosteller] = useState(false);


    const getAllUploadedHostellers=async()=>{
        // make api call
        const {data}=await getHosteller();
        setAllHostellers(data)
    }

    useEffect(()=>{
        setDeleteSpecificHosteller(false)
        getAllUploadedHostellers()
    },[uploadVideoServerResponse,res,deleteSpecificHosteller])

    console.log(allHostellers);

  return (
    <div>
          <div className='category container'>
            
            <div className='d-flex justify-content-evenly flex-wrap mt-5 '>


            {
                allHostellers?.length>0?
                allHostellers.map(hosteller=>(

                    <HostellerCard setDeleteSpecificHosteller={setDeleteSpecificHosteller} res={res} setRes={setRes} getAllUploadedHostellers={getAllUploadedHostellers} displaydata={hosteller}/>

                ))
                :<div className='d-flex justify-content-center align-items-center'><p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display</p></div>

            }



                

               
        </div>
        </div>

    </div>
  )
}

export default ViewHostellers