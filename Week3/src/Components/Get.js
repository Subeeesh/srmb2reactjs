import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function Get() {

    const [users, setUser] = useState([])
    const [countries, setCountries] = useState([])


    useEffect(() => {
        const url = "http://localhost:4000/Students" + users;
        // fetch("http://localhost:4000/Students").then((result) => {
        axios.get(url).then(res => {

            setUser(res)

        })

        // result.json().then((res) => {
        //         // console.log(res)
        //         setUser(res)
        //     })
    },[])
    // fetch("http://localhost:4000/countries").then((result) => {
    //     result.json().then((res) => {
    //         // console.log(res)
    //         setCountries(res)
    //     })
    



return (

    <div>
        <form>
            <h1>Get API call</h1>
            <table border="1">
                <tr>
                    <td>S.NO</td>
                    <td>NAME</td>
                    <td>NUMBER</td>
                    <td>TOTAL</td>
                    <td>DEPARTMENT</td>
                    <td>COUNTRY</td>
                </tr>
                {
                    users.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.number}</td>
                            <td>{item.total}</td>
                            <td>{item.Dept}</td>
                            {countries.map((x) => {
                                return (
                                    <td>{x.name}</td>
                                )

                            })}
                        </tr>


                    )


                }
            </table>
        </form>

    </div>
)

}