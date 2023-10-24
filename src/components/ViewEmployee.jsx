import React, { useEffect, useState } from 'react'
import { getEmployee } from '../services/allAPI';
import EmployeeCard from './EmployeeCard';

function ViewEmployee({uploadVideoServerResponse}) {
    const [allEmployees,setAllEmployees]=useState([]);
    const [res,setRes]=useState(true)
    const [deleteSpecificEmployee,setDeleteSpecificEmployee]=useState(false)

    const getAllEmployees=async()=>{
        // make api call
        const {data}=await getEmployee();
        setAllEmployees(data)
    }

    useEffect(()=>{
 setDeleteSpecificEmployee(false)
getAllEmployees() 
   },[uploadVideoServerResponse,res,deleteSpecificEmployee])

  return (
    <div className='d-flex justify-content-evenly flex-wrap container'>
       
        {
        allEmployees?.length>0?
                allEmployees.map((employee,index)=>(
<div>
    
    <EmployeeCard setDeleteSpecificEmployee={setDeleteSpecificEmployee} res={res} setRes={setRes} getAllEmployees={getAllEmployees} index={index+1} displaydata={employee}/>
</div>

                ))
                :<div className='d-flex justify-content-center align-items-center'><p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display</p></div>



    }


    </div>
  )
}

export default ViewEmployee