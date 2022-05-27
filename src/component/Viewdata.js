import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewdata = () => {
    var [studlist,setStudlist]=useState([])
   axios.get("http://localhost:4000/api/viewall").then ((response)=>{
       console.log(response.data)
       setStudlist(response.data)
})
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
    
  return (
    <div><Navbar/>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Addmission Number</th>
      <th scope="col">Name</th>
      <th scope="col">CGPA</th>
      
    </tr>
  </thead>
  <tbody>
  {studlist.map((value,key)=>{
      return <tr>
        <th scope="row">{value.admno}</th>
        <td>{value.name}</td>
        <td>{value.cgpa}</td>
        <td><button onClick={(e)=>{deleteData(value._id)}}  className="btn btn-danger">Delete</button>
                </td>
      </tr>
    
  })
  }
  </tbody>

</table>
    </div>
  )
}

export default Viewdata