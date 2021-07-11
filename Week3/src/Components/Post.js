import React, { useState, useEffect } from 'react'

export default function Post() {

    const data = {
        name: "",
        number: "",
        total: "",
        Dept: "",
        countries: ""
    };


    const Dept = [

        { id: 1, name: "MCA" },
        { id: 2, name: "BCA" },
        { id: 3, name: "BCOM" },

    ]



    const [d, setD] = useState(data);
    const [errors, setErrors] = useState({});
    const [countries, setCountries] = useState([]);

    // const [name, setName] = useState("");
    // const [number, setNumber] = useState("");
    // const [total, setTotal] = useState("");




    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setD((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });


    }



    const saveData = (e) => {
        e.preventDefault();

        setErrors(valdata(d));

        fetch("http://localhost:4000/Students", {

            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(d)



        }).then((resp) => {
            console.log("resp", resp)
        })



    }

    const valdata = (values) => {

        let error = {};

        if (!values.name) {
            error.name = "Name cannot be empty"

        }

        return error;


    }

    useEffect(() => {

        fetch("http://localhost:4000/countries").then(res => res.json()).then(data => {
            console.log(data);
            setCountries(data);
        }).catch(e => {
            console.error("ERR in Countries...");
            console.error(e);
        })

    },[])


    return (

        <div className='Post'>
            <form onSubmit={saveData} noValidate>
                <h1>POST API EXAMPLE</h1>
                <label>Student Name:</label>    <input type="text" name='name' value={d.name} onChange={handleOnChange} /> <p>{errors.name}</p><br /> <br />

                <label>Student Number:</label>  <input type="text" name='number' value={d.number} onChange={handleOnChange} /> <br /> <br />

                <label>Total Marks:</label>     <input type="text" name='total' value={d.total} onChange={handleOnChange} /> <br /> <br />

                <label>Department:</label>
                <select name="Dept" onChange={handleOnChange}  >
                    <option value="-1">Please select a Department</option>
                    {Dept.map((x) => {
                        return <option key={x.id} value={x.name}>{x.name}</option>;
                    })}




                </select>
                <br></br> <br></br>

                <div>
                    <label>Country:</label>
                    <select name="countries" onChange={handleOnChange} >
                        <option value="-1">Please select a country</option>
                        {countries.map((x) => {
                            return <option key={x.id} value={x.id}>{x.name}</option>;
                        })}
                    </select>

                </div>


                <button type="submit">Save</button>
            </form>



        </div>



    )













}




