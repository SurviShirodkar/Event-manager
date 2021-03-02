import React from 'react'
import './viewcomponent.scss'

export default function ViewComponent({userList}) {
    React.useEffect(() => {
        console.log("userlist",userList)
    },[])
    return (
       
        <div>
            { userList.map(obj => <div>{obj.email}</div>
            )}
        </div>
    )
}
