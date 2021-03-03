import React from 'react'
import './analysiscomponent.scss'

export default function AnalysisComponent({userList,setUserList}) {
    return (
        <div className="analysis-main">
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
                    <td><button className="analysis-edit "  data-toggle="modal" data-target="#exampleModal">E</button></td>
                    <td><button  className="analysis-delete">D</button></td>
                    </tr>)
                }

            </tbody>
        </table>



       


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
 

        </div>
    )
}
