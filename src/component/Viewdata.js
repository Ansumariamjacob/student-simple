import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewdata = () => {
    var [studlist,setStudlist]=useState([])
   axios.get("http://localhost:4000/api/viewall").then ((response)=>{
       console.log(response.data)
       setStudlist(response.data)
})
    
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
        
      </tr>
    
  })
  }
  </tbody>

</table>
    </div>
  )
}

export default Viewdata