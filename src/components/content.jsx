import { useEffect, useState } from "react";
import "../styles/content.css"
const Content = () => {
    let[data,setData]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response= await fetch("http://localhost:4000/company")
            let data= await response.json()
            setData(data)
        }
        fetchData()
    },[])
    return ( 
    <div className="container">
        {data.map((x)=>(
            <div className="innercont">
            <h1>{x.name}</h1>
            <h1>{x.age}</h1>
            <h1>{x.role}</h1>
            <h1>{x.Salary}</h1>
            <h1>{x.Company}</h1>
            </div>  

        ))}
    </div>
 );
}
 
export default Content