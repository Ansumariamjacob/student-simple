import React from 'react'

const Viewdata = () => {
    var studlist=[{
        "name":"ansu",
        "admno":"102",
        "cgpa":"60"},
        {
            "name":"Appu",
            "Admno":"103",
            "cgpa":"90"},
            {
                "name":"Ammu",
                "Admno":"910",
                "cgpa":"89"
        }
    ]
    
  return (
    <div>
        <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Addmission Number</th>
      <th scope="col">Name</th>
      <th scope="col">CGPA</th>
      
    </tr>
  </thead>
  {studlist.map((value,key)=>{
      return  <tbody>
      <tr>
        <th scope="row">{value.admno}</th>
        <td>{value.name}</td>
        <td>{value.cgpa}</td>
        
      </tr>
    </tbody>
  })
  }

</table>
    </div>
  )
}

export default Viewdata