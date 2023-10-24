import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
   <>
        <div style={{marginTop:"150px"}} className='main d-flex justify-content-evenly container flex-wrap-reverse w-100 '>
    
            
            <div className='second'>
                <img  src="https://images.unsplash.com/photo-1586214601498-4dbcfd0bf2c8?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    
            </div>
            <div className='first'>
                <h1>
                    The <br />
                    Complete <br />
                    <span style={{color:"orangered"}}>Hostel Manager</span> <br />
                    Assistant
                </h1>
            </div>
    
    
    
        </div>
        <div className='category container'>
            <div className='head d-flex justify-content-center aligin-items-center'>
                <h3 ><span style={{color:"orange"}}>|</span> Manage Hostelers </h3>
            </div>
           


           {/* sgfvgkhfvlhfba */}

           <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Add new Hosteler
        </div>

       
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Update Details
        </div>

        
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Delete Hosteler
        </div>

        
      </a>
    </div>

   

  </div>
</div>


           {/* ,gvcljzh */}

            <div className=' d-flex justify-content-center aligin-items-center mt-5'>

            <button className='btn btn-dark'>  <Link to={'./hostellers'}  style={{textDecoration:"none",color:"white"}}> View All Hostelers </Link></button>

            </div>
        </div>





        <div className='category container'>
            <div className='head d-flex justify-content-center aligin-items-center'>
                <h3 ><span style={{color:"orange"}}>|</span> Manage Employees </h3>
            </div>
           


           {/* sgfvgkhfvlhfba */}

           <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Add new Employee
        </div>

       
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Update Details
        </div>

        
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Delete Employee
        </div>

        
      </a>
    </div>

   

  </div>
</div>


           {/* ,gvcljzh */}

            <div className=' d-flex justify-content-center aligin-items-center mt-5'>

            <button className='btn btn-dark'>  <Link to={'./employees'}  style={{textDecoration:"none",color:"white"}}> View All Employees </Link></button>

            </div>
        </div>

        
   </>
  )
}

export default Landing