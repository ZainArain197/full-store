import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {

    // const getdata = useSelector((state) => state.Shoes);
    // console.log(getdata);

    const { id } = useParams();

    let [getdata, setGetdata] = useState([])
    useEffect(() => {
        axios.get("/data_po?id=" + id).
            then((abc) => {
                setGetdata(abc.data)
            })

    }, [])

    // const [data, setData] = useState([]);
    // console.log(data);



    // id mil rahi hai


    // const compareId = () => {
    //     let compareData = getdata.filter((koiData) => {
    //         return koiData.id == id
    //     });
    //     setData(getdata);
    //     console.log(compareData);
    // }

    // useEffect(() => {
    //     compareId();
    // }, [id])

    //------------------------------------------------------

    const dispatch = useDispatch();

    const send = (getdata) => {
        // console.log(Data);
        // carts.push(Data);
        // console.log(carts);
        toast("Product Added To Cart!");
        dispatch({
            type: "ADD_CART",
            payload: getdata
        })

    }


    return (


        <>
            <h2 className='text-center ' > Details of Selected Product</h2>
            {
                getdata ?
                
                    <div className="container mt-100">

                        <>
                            <div className="row">
                                <div className="col-6">
                                    <div className="details__image">
                                        <img src={getdata.imgdata} alt="" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="details__name">
                                        {getdata.name}
                                    </div>
                                    <div className="details__prices">

                                        <strong>Price : </strong>      <span className="details__actaul">{getdata.price}</span>

                                    </div>
                                    <div className="details__info">
                                        <strong>Quantity : </strong>  <span className="details__actaul">{getdata.qnty}</span>

                                        <NavLink id='link' to={`/cart/${getdata._id}`}  >
                                            <div className="details__incDec " >
                                                <button className="btn-default"
                                                    onClick={() => send(getdata)}
                                                >ADD TO CART</button>
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className="details__p">
                                        <h4>Details</h4>
                                        {getdata.discription}
                                    </div>
                                </div>
                            </div>
                        </>




                    </div> :


                    <div className='card_details d-flex justify-content-center align-items-center' style={{ padding: "50px", position: "relative" }}>

                        <p style={{ fontSize: 22 }}><h1>No Product Selected!</h1></p>
                        <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                    </div>

            }
        </>
    )
}

export default Details
