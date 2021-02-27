import React from 'react'
import './addcomponent.scss'

export default function AddComponent() {
    return (
      <div className="container">
        <div className=" Addcomponent-main">
         
          <div className="row">
            <div className="col-lg-6">
              <h1>Hello ,<br></br> Add ur details here</h1>
            </div>
            <div className="col-lg-6">
            <h5 className="">Join the mailing list ...</h5>
            <p>Sign up and receive free talk with survi and shailesh with some exciting offers .</p>
            <form>
              <label >First Name </label>
              <input type="text" className="form-control" id="nameid" placeholder="Shailesh"></input>
              <label >Last Name </label>
              <input type="text" className="form-control" id="lastname" placeholder="Haldankar"></input>
              <label >Contact Number </label>
              <input type="text" className="form-control" id="contact" placeholder="7768076298"></input>
              <div className="form-group d-flex mt-3">
              <label className="mr-3 " >Gender :</label>  
              <div class="form-check mr-3">
                <input class="form-check-input mt-3" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                <label class="form-check-label " for="exampleRadios1">
                 Female
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input mt-3" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                <label class="form-check-label " for="exampleRadios1">
                 Male
                </label>
              </div>
              </div>
              <label >Email Address </label>
              <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="John@gmail.com"></input>
              <div className="form-group mt-2">
              <label >Event Name</label>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">Happenings</option>
                <option value="2">Fact</option>
                <option value="3">motu</option>
              </select>
              </div>
              <div className="text-center">
              <button type="button" class="btn btn-success btn-lg btn-block text-white">S U B M I T</button>

          </div>
              
          </form>
          </div>
          </div>
         
        </div>
        </div>
    )
}
