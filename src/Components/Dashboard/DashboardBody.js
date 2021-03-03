import React from 'react'
import AddComponent from './DashboardComponents/AddComponent'
import AnalysisComponent from './DashboardComponents/AnalysisComponent'
import ViewComponent from './DashboardComponents/ViewComponent'

export default function DashboardBody({contentSelector}) {
    const[userList,setUserList]=React.useState([]);
    const componentSelector = () =>{
   switch(contentSelector.id){
       case "add" : return <AddComponent userList={userList} setUserList={setUserList}/>;
       case "view" : return <ViewComponent userList={userList}/>;
       case "analysis" : return <AnalysisComponent userList={userList} setUserList={setUserList}/>;

   }
    }
    return (
        <div className="w-100 h-100">
            {componentSelector()}


            {/* <h1>{contentSelector.id}</h1> */}
            {/* <AddComponent/>
            <ViewComponent/>
            <AnalysisComponent/> */}

        </div>
    )
}
