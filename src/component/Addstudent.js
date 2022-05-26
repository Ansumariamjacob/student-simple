import React, { useState } from 'react'
import Navbar from './Navbar';

const Addstudent = () => {
    var [name,setName]=useState("")
    var [admno,setAdmno]=useState("");
    var [cgpa,setCgpa]=useState("")
    const subData=()=>{
        const data={"Name":name,"admno":admno,"cgpa":cgpa}
        console.log(data)
    }
  return (
    <div><Navbar/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <label for="" class="form-label">Name</label>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <label for="" class="form-label">Admission number</label>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <input onChange={(e)=>{setAdmno(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <label for="" class="form-label">CGPA</label>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <input onChange={(e)=>{setCgpa(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <button onClick={subData} class="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addstudent