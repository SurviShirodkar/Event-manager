import React from 'react'
import './analysiscomponent.scss'

export default function AnalysisComponent({userList,setUserList}) {

  const [modalState, setModalState] = React.useState(false)
    return (
        <div className="analysis-main">
          <div className={modalState?"overlay":"d-none"}>
            <button onClick={()=>setModalState(false)} className="close-button">X</button>
            <div className="modal-main">

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
                {
                    userList.map(obj =><tr>

                    <td>{obj.firstname}</td>
                    <td>{obj.lastname}</td>
                    <td>{obj.contactnumber}</td>
                    <td>{obj.gender}</td>
                    <td>{obj.email}</td>
                    <td>{obj.event}</td>
                    <td><button onClick={()=>setModalState(true)} >E</button></td>
                    <td><button  className="analysis-delete">D</button></td>
                    </tr>)
                }

            </tbody>
        </table>


        </div>
    )
}
