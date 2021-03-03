import React from "react";
import "./addcomponent.scss";

export default function AddComponent({ userList, setUserList }) {
  const [userDetails, setUserDetails] = React.useState({
    firstname: "",
    lastname: "",
    contactnumber: "",
    gender: "",
    email: "",
    event: "",
  });

  const submitButton = () => {
    setUserList([...userList, userDetails]);
    setUserDetails({
      firstname: "",
      lastname: "",
      contactnumber: "",
      gender: "",
      email: "",
      event: "",
    });
  };

  React.useEffect(() => {
    console.log("userList", userList);
  }, [userList]);

  return (
    <div className="container">
      <div className=" Addcomponent-main">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              Hello ,<br></br> Add ur details here
            </h1>
          </div>
          <div className="col-lg-6">
            <h5 className="">Join the mailing list ...</h5>
            <p>
              Sign up and receive free talk with survi and shailesh with some
              exciting offers .
            </p>
            <form>
              <label>First Name </label>
              <input
                type="text"
                className="form-control"
                id="nameid"
                value={userDetails.firstname}
                placeholder="Shailesh"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, firstname: e.target.value });
                }}
              ></input>
              <label>Last Name </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Haldankar"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, lastname: e.target.value });
                }}
              ></input>
              <label>Contact Number </label>
              <input
                type="text"
                className="form-control"
                id="contact"
                placeholder="7768076298"
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    contactnumber: e.target.value,
                  });
                }}
              ></input>
              <div className="form-group mt-3">
                <label className="mr-3 ">Gender :</label>
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, gender: e.target.value });
                  }}
                >
                  <option selected>Choose...</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
                </select>
              </div>
              <label>Email Address </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="John@gmail.com"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
              ></input>
              <div className="form-group mt-2">
                <label>Event Name</label>
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, event: e.target.value });
                  }}
                >
                  <option selected>Choose...</option>
                  <option value="Happenings">Happenings</option>
                  <option value="Fact">Fact</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-success btn-lg btn-block text-white"
                  onClick={() => submitButton()}
                >
                  S U B M I T
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
