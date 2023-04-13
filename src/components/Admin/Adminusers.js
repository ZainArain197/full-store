import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Adminusers = () => {

    let [user, setUser] = useState([])

    useEffect(() => {
        axios.get("/get_users").then((abc) => {
            setUser(abc.data)
        })
    }, [])
    console.table(user);

    return (
        <>
            <div style={{ marginTop: "10px",textAlign:"center" }}>
                <h2>All Users</h2>

                <table className='tble' >
                    <tr className='tabletd' >
                        <td><strong>Name</strong></td>
                        <td><strong>Type</strong></td>
                        <td><strong>Email</strong></td>
                        <td><strong>Password</strong></td>
                        <td><strong>id</strong></td>

                    </tr>

                    {
                        user.map((usr, indx) => {
                            return <>
                                <tr className='tabletd'>

                                    <td>{usr.username}</td>
                                    <td>{usr.type}</td>
                                    <td>{usr.email}</td>
                                    <td>{usr.password}</td>
                                    <td>{usr._id}</td>


                                </tr>
                            </>
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default Adminusers
