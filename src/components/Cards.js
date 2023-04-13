import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';



const Cards = () => {


    // let data = useSelector(state => state.Shoes);

    
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get("/data_lao").then((abc) => {
            setData(abc.data)
        })
    }, [])






    const Selected = (data) => {
    
        toast("Product Selected");

    }


    return (


        <div className='container mt-3'>
            <h2 className='text-center'>Dolce & Gabbana</h2> <h1 className='text-center' style={{ color: "#084646" }}>By Zain</h1>

            <div className="row d-flex justify-content-center align-items-center">

                {
                    data.map((Data, meraIndex) => {
                        return (
                            <>
                                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style" >
                                    <Card.Img variant="top" src={Data.imgdata} style={{ height: "15rem" }} className="mt-3" />

                                    <Card.Body>
                                        <Card.Title>{Data.name}</Card.Title>
                                        <Card.Text>
                                            <strong> Price: $ {Data.price}</strong>
                                        </Card.Text>
                                        <NavLink to={`/Details/${Data._id}`}  >
                                            <div className="button_div d-flex justify-content-center">
                                                <Button variant="primary" className='col-lg-12'
                                                    onClick={Selected}

                                                >Click Here</Button>

                                            </div>
                                        </NavLink>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }









            </div>

        </div>
    )
}

export default Cards
