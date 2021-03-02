import React from "react";
import "./viewcomponent.scss";

export default function ViewComponent({ userList }) {
  React.useEffect(() => {
    console.log("userlist", userList);
  }, []);
  return (
    <div className="viewComponentMain">
        <table>
            <thead>
                <tr>
                    <th>Hye</th>
                    <th>Hye</th>
                    <th>Hye</th>
                    <th>Hye</th>
                    <th>Hye</th>
                    <th>Hye</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(obj =><tr>

                    <td>{obj.firstname}</td>
                    <td>{obj.lastname}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>)
                }

            </tbody>
        </table>

    </div>
  );
}
