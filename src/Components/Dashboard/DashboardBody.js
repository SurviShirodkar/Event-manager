import React from 'react'
import AddComponent from './DashboardComponents/AddComponent'
import AnalysisComponent from './DashboardComponents/AnalysisComponent'
import ViewComponent from './DashboardComponents/ViewComponent'

export default function DashboardBody({contentSelector}) {
    const componentSelector = () =>{
   switch(contentSelector.id){
       case "add" : return <AddComponent/>;
       case "view" : return <ViewComponent/>;
       case "analysis" : return <AnalysisComponent/>;

   }
    }
    return (
        <div>
            {componentSelector()}


            {/* <h1>{contentSelector.id}</h1> */}
            {/* <AddComponent/>
            <ViewComponent/>
            <AnalysisComponent/> */}

        </div>
    )
}
