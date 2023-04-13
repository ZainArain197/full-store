import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllOrders = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get("/address_details_for_admin").then((abc) => {
            setData(abc.data)
        })
    }, [])

    return (
        <>
            <h2> AllOrders:</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name On Card</th>
                        <th>Email</th>
                        <th>Card Number</th>
                        <th>Province/State</th>
                        <th>City</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((details, indx) => {
                            return <>
                                <tr>
                                    <td >{details.cardname}</td>
                                    <td >{details.email}</td>
                                    <td>{details.cardnumber}</td>
                                    <td >{details.state}</td>
                                    <td>{details.city}</td>
                                    <td>{details.address}</td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default AllOrders
