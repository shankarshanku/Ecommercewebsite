import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddData = () => {
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [role, setRole] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        let data = { name, age, role, salary, company }
        fetch("http://localhost:4000/company", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert(" employee added successfully");
        navigate("/content")
    }
    return (
        <div className="container">
            <h1>FORMS</h1>
            <div className="formss">
                <form action="" onSubmit={handleSubmit}>

                    <h1>name</h1>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter the name" />
                    <h1>age</h1>
                    <input type="number" onChange={(e) => setAge(e.target.value)} placeholder="enter the age" />
                    <h1>Role</h1>
                    <input type="text" onChange={(e) => setRole(e.target.value)} placeholder="enter the Role" />
                    <h1>Salary</h1>
                    <input type="number" onChange={(e) => setSalary(e.target.value)} placeholder="enter the Salary" />
                    <h1>Company</h1>
                    <input type="text" onChange={(e) => setCompany(e.target.value)} placeholder="enter the company" />
                    <br />
                    <button>click</button>
                </form>
            </div>
        </div>
    );
}

export default AddData;