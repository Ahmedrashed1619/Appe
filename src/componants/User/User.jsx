import React from 'react'

export default function User() {
  return (
    <>
      <div className="container-fluid">
          <h3 className='alert alert-main py-2 fw-bold mb-4'>Edit Profile</h3>

          <div className="form-join">
            <form>
                <div className="row d-flex justify-content-center align-items-center g-4">

                    <div className="col-md-6 col-11">
                        <div className="group-add">
                            <label className="fs-5 fw-bold mb-1" htmlFor="fname">First Name</label>
                            <div className="input-group">
                                <input type="text" className='form-control bg-transparent mx-auto' style={{paddingBottom: '12px' , paddingTop: '12px'}} required name="fname" id="fname" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-11">
                        <div className="group-add">
                            <label className="fs-5 fw-bold mb-1" htmlFor="lname">Last Name</label>
                            <div className="input-group">
                                <input type="text" className='form-control bg-transparent mx-auto' style={{paddingBottom: '12px' , paddingTop: '12px'}} required name="lname" id="lname" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-11">
                        <div className="group-add">
                            <label className="fs-5 fw-bold mb-1" htmlFor="Email-user">Email <span style={{color : '#656565' , fontSize : '14px'}}>(optional)</span></label>
                            <div className="input-group">
                                <input type="email" className='form-control bg-transparent mx-auto' style={{paddingBottom: '12px' , paddingTop: '12px'}} name="email" id="Email-user" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-11">
                        <div className="group-add">
                            <label className="fs-5 fw-bold mb-1" htmlFor="mobile">Mobile Number</label>
                            <div className="input-group">
                                <input type="tel" className='form-control bg-transparent mx-auto' style={{paddingBottom: '12px' , paddingTop: '12px'}} required name="mobile" id="mobile" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="submitAdd-buttons mt-5 d-flex justify-content-center align-items-center">
                    <button type='submit' className={`btn main-btn py-2 px-5`}>Update  Information</button>
                    {/* <button onClick={resetForm} className="btn second-btn py-2 px-5">Cancel</button> */}
                </div>

            </form>
          </div>
      </div>
    </>
  )
}
