import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

// uploading hosteller
export const uploadHosteller=async (body)=>{
    // call post http request to http://localhost:4000/hostellers to add hosteller in json server return response to Add Component
    return await commonAPI("POST",`${serverURL}/hostellers`,body)
}

// get all hosteller details
export const getHosteller=async ()=>{
    // call get http request to http://localhost:4000/hostellers to get all hostellers in json server return response to view Component
    return await commonAPI("GET",`${serverURL}/hostellers`,"")
}

// edit hosteller
export const editHosteller=async (id,body)=>{
    // call put http request to http://localhost:4000/hostellers to get all hostellers in json server return response to view Component
    return await commonAPI("PUT",`${serverURL}/hostellers/${id}`,body)
}

// uploading employee
export const uploadEmployee=async (body)=>{
    // call post http request to http://localhost:4000/hostellers to add hosteller in json server return response to Add Component
    return await commonAPI("POST",`${serverURL}/employees`,body)
}

// get all hosteller details
export const getEmployee=async ()=>{
    // call get http request to http://localhost:4000/hostellers to get all hostellers in json server return response to view Component
    return await commonAPI("GET",`${serverURL}/employees`,"")
}

// edit employee
export const editEmployees=async (id,body)=>{
    // call put http request to http://localhost:4000/hostellers to get all hostellers in json server return response to view Component
    return await commonAPI("PUT",`${serverURL}/employees/${id}`,body)
}
// delete hosteller 
export const deleteHosteller= async (id)=>{
    // call delete http request to http://localhost:4000/hosteller to delete a hosteller  in json server return response to watchhistory component
    return await commonAPI("DELETE",`${serverURL}/hostellers/${id}`,{})
}

// DELETE EMPLOYEE
export const deleteEmployee= async (id)=>{
    // call delete http request to http://localhost:4000/hosteller to delete a employee  in json server return response to watchhistory component
    return await commonAPI("DELETE",`${serverURL}/employees/${id}`,{})
}
