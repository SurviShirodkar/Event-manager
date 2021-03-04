import React from "react";
import "./analysiscomponent.scss";

export default function AnalysisComponent({ userList, setUserList }) {
  const [modalState, setModalState] = React.useState(false);

  const [editDetails, setEditDetails] = React.useState({
    firstname: "",
    lastname: "",
    contactnumber: "",
    gender: "",
    email: "",
    event: "",
  });
  const deleteRow = (num) => {
    userList.splice(num, 1);
    console.log(userList)
    setUserList([...userList]);
  };
  return (
    <div className="analysis-main">
      <div className={modalState ? "overlay" : "d-none"}>
        <button onClick={() => setModalState(false)} className="close-button">
          X
        </button>
        <div className="modal-main">
          <input
            type="text"
            className="form-control"
            placeholder="Shailesh"
            value={editDetails.firstname}
          ></input>
          <input
            type="text"
            className="form-control"
            placeholder="haldankar"
            value={editDetails.lastname}
          ></input>
          <input
            type="text"
            className="form-control"
            placeholder="7768076298"
            value={editDetails.contactnumber}
          ></input>

          <div className="form-group mt-3">
            <label className="mr-3 ">Gender :</label>
            <select className="custom-select" value={editDetails.gender}>
              <option selected>Choose...</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="others">others</option>
            </select>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="survi@gmail.com"
            value={editDetails.email}
          ></input>
          <div className="form-group mt-3">
            <label className="mr-3 ">Event :</label>
            <select className="custom-select" value={editDetails.event}>
              <option selected>Choose...</option>
              <option value="happenings">happenings</option>
              <option value="fact">fact</option>
              <option value="others">others</option>
            </select>
          </div>
        </div>
      </div>
      <table className="table  table-striped">
        <thead>
          <tr>
            <th>firstname</th>
            <th>Lastname</th>
            <th>Contact Number</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Event</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userList.map((obj, num) => (
            <tr>
              <td>{obj.firstname}</td>
              <td>{obj.lastname}</td>
              <td>{obj.contactnumber}</td>
              <td>{obj.gender}</td>
              <td>{obj.email}</td>
              <td>{obj.event}</td>
              <td>
                <button
                  onClick={() => {
                    setModalState(true);
                    setEditDetails(obj);
                  }}
                >
                  E
                </button>
              </td>
              <td>
                <button
                  onClick={() => deleteRow(num)}
                  className="analysis-delete"
                >
                  D
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
