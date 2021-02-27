import React from 'react'
import './homepage.css'

export default function Homepage() {
    const [searchTerm,setSearchTerm]=React.useState("")
    return (
        <div className="main">
            <div className="" >
             <div className="row mt-5 ">
                <div className="col-lg-6 div1">
                    <input type="text" placeholder="search here" required onChange={(e)=>{setSearchTerm(e.target.value);console.log(e.target)}}></input>
                    <button className=" btn">search</button>
                </div>
                <div className="col-lg-6 ">
                    <h4>People</h4>
                { data.filter((y)=>{return y.name.includes(searchTerm)}).map((x)=>
            
               <div className="container  border ">
                   <div className="d-flex pt-3">
                    <img src={x.image} height="20px"></img>
                    <div className="ml-3">
                      <h6>{x.name}</h6>
                       <p>{x.occupation}</p>
                    </div>
                  </div>
                  </div>
              
          
            
            )}
            
        </div>
                </div>

            </div>

            
        </div>
    
    )
}

const data = [

    {keyId: "id1", name: "Shailesh Haldankar", occupation: "Developer", image: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9670.jpg"},


    {keyId: "id2", name: "Shulwee Shirodkar", occupation: "Developer", image: "https://miro.medium.com/max/3840/1*eRh0-8yfKqnQITb4N2-eAg.jpeg"},


    {keyId: "id3", name: "Viraj Naik", occupation: "Banker", image: "https://indiaincgroup.com/wp-content/uploads/2018/03/LONDON-IS-DETERMINED-TO-REMAIN-A-TOP-CHOICE-FOR-INDIAN-BUSINESSES.jpg"},


    {keyId: "id4", name: "Ritesh Chari", occupation: "HR", image: "https://static.india.com/wp-content/uploads/2014/12/krishna-murthy.jpg"},


    {keyId: "id5", name: "Ajar Desai", occupation: "Tech Support", image: "http://im.rediff.com/getahead/2013/mar/07giridhar-murthy-1.jpg"}

]