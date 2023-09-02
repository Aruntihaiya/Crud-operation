import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const Edit = () => {
    const id = useParams();
    const navigate = useNavigate();

    //Empty state.
    const [value, setValue] = useState({
        "firstName": "",
        "lastName":"",
        "phone": "",
        "email": "",
       
    })

    // Get data from local storage.
    const [arr, setArr] = useState(() => {
        const lcData = localStorage.getItem("formFields");
        if (lcData) {
            return JSON.parse(lcData);
        } else {
            return [];
        }
    });

    useEffect(() => {
        const newArr = arr.filter((item, index) => {
            return index == id.editId;
        });

        setValue({
            "firstName": newArr[0].firstName,
            "lastName":newArr[0].lastName,
            "phone": newArr[0].phone,
            "email": newArr[0].email,
      
        })
    }, [])


    //Input handler.
    const inputHandler = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    //Form handler.
    const formHandler = (event) => {
        event.preventDefault();
        arr[id.editId] = value;
        console.log(value)
        localStorage.setItem("formFields", JSON.stringify(arr))
        navigate('/manage')
    }
    return (
        <>
            <div className="container mt-3">
                <h2 className="text-center">Update Here !</h2>
                <form onSubmit={formHandler}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input type="text" name='firstName' value={value.firstName} onChange={inputHandler} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input type="text" name='lastName' value={value.lastName} onChange={inputHandler} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Contact</label>
                        <input type="text" name='phone' value={value.phone} onChange={inputHandler} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' value={value.email} onChange={inputHandler} className="form-control" />
                    </div>
                 
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}
