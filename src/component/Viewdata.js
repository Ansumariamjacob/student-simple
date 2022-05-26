import React from 'react'
import Navbar from './Navbar'

const Viewdata = () => {
    var studlist=[{
        "name":"ansu",
        "admno":"102",
        "cgpa":"60"},
        {
            "name":"Appu",
            "admno":"103",
            "cgpa":"90"},
            {
                "name":"Ammu",
                "admno":"910",
                "cgpa":"89"
        }
    ]
    
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