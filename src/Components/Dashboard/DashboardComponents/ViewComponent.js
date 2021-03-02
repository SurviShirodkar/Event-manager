import React from 'react'
import './viewcomponent.scss'

export default function ViewComponent({userList}) {
    
    React.useEffect(() => {
        console.log("userlist",userList)
    },[])
    return (
       
        <div className="viewComponentMain ">
            <table className="table ">
                <thead>
                    <tr className="">
                        <th className="p-0"> FIRSTNAME</th>
                        <th>LASTNAME</th>  
                        <th>CONTACT NUMBER</th>  
                        <th>GENDER</th>  
                        <th>Email</th>  
                        <th>EVENT</th>  
 </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{ userList.map(obj => <div>{obj.firstname}</div>)}</th>
                        <th>{ userList.map(obj => <div>{obj.lastname}</div>)}</th>
                        <th>{ userList.map(obj => <div>{obj.contactnumber}</div>)}</th>
                        <th>{ userList.map(obj => <div>{obj.gender}</div>)}</th>
                        <th>{ userList.map(obj => <div>{obj.email}</div>)}</th>
                        <th>{ userList.map(obj => <div>{obj.event}</div>)}</th>
                    </tr>
                </tbody>
            </table>
          
            <div className=""></div>
        </div>
    )
}