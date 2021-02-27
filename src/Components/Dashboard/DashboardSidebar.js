import React from 'react'

export default function DashboardSidebar({setContentSelector}) {
    return (
      
        
        <div className="dashboardsidebar-main">
             {
             buttons.map(obj => <button onClick={()=>setContentSelector(obj)}>{obj.name}</button>)
            }
          
          
        </div>
    )
}
const buttons=[
    {name:"Add",id:"add"},
    {name:"View",id:"view"},
    {name:"Analysis",id:"analysis"}
]