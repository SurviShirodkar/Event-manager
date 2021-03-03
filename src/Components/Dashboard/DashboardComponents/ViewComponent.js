import React from "react";
import "./viewcomponent.scss";

export default function ViewComponent({ userList }) {
  React.useEffect(() => {
    console.log("userlist", userList);
  }, []);
  return (
    <div className="viewComponentMain">
        <table className="table  table-striped">
            <thead>
                <tr>
                    <th>firstname</th>
                    <th>Lastname</th>
                    <th>Contact Number</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Event</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(obj =><tr>

                    <td>{obj.firstname}</td>
                    <td>{obj.lastname}</td>
                    <td>{obj.contactnumber}</td>
                    <td>{obj.gender}</td>
                    <td>{obj.email}</td>
                    <td>{obj.event}</td>
                    </tr>)
                }

            </tbody>
        </table>

    </div>
  );
}
