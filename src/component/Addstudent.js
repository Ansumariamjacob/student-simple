import React from 'react'

const Addstudent = () => {
  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <label for="" class="form-label">Name</label>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <label for="" class="form-label">Admission number</label>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <label for="" class="form-label">CGPA</label>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 col-xxl-6">
                    <button class="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addstudent