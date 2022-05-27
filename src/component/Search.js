import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const [data,setData]=useState([{"name":" ","cgpa":" "}])
   var [admno,setAdmno]=useState("")
   
   const deleteData=(id)=>{
       const data={"_id":id}
       console.log(data)
       axios.post("http://localhost:4000/api/delete",data).then(
           (response)=>{
               console.log(response)
               if(response.data.status=="success")
               {
                alert("successfully deleted")
            }
               else{
                   alert("Error in  Deletion")

               }
           }
       )

   }
  
   const searchData=()=>{
       const data={"admno":admno}
       console.log(data)
       axios.post("http://localhost:4000/api/search",data).then((response)=>{
           console.log(response.data)
        setData(response.data)
    })
        

   }
  return (
    <div><Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            
                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <label for="" className="form-label">Addmission Number</label>
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <input onChange={(e)=>{setAdmno(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                <button onClick={searchData} className="btn btn-success">Search</button>
                </div>
               <div>
                   {data.map( (value,key)=>{
                       return <div className="row g-3">
                       <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                            <label for="" className="form-label">Name</label>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                            <input type="text" value={value.name} className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                        <label for="" className="form-label">CGPA</label>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                            <input type="text" value={value.cgpa} className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                <button onClick={(e)=>{deleteData(value._id)}}  className="btn btn-danger">Delete</button>
                </div>
                        </div>

                   })}

               </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Search