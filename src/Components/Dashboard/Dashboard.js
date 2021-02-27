import React from 'react'
import './dashboard.css'
import DashboardBody from './DashboardBody'
import DashboardSidebar from './DashboardSidebar'

export default function Dashboard() {
    const [contentSelector,setContentSelector]=React.useState({name:"",id:""})
    return (
        <div className="dashboard-main" >
            <div className="dashboard-sidebar" >
              
               <DashboardSidebar setContentSelector={setContentSelector}/>
            </div>
            <div className="dashboard-body" >
          
            <DashboardBody contentSelector={contentSelector}/>
            </div>
           
        </div>
    )
}
