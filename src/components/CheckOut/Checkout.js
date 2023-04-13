import React, { useEffect, useState } from 'react';
import "./checkout.css";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Checkout = () => {

    let dispatch = useDispatch();
    let data = useForm();
    let navigate = useNavigate();
    const getdata = useSelector((state) => state.cartReducer.carts);
    const getuser = useSelector((state) => state.userSection.cu);
   


    const submitData = async (userData) => {

        let resp = await axios.post('/Users_order', userData)
        if (resp) {
            // console.log("resp hai", resp);
        }

        //I MAP ON GETDATA SO I CAN SEND PAYLOAD IN OBJECT FORM
        getdata.map((dat, id) => {
            dispatch({
                type: "Stock",
                payload: dat
            })
            dispatch({
                type: "final_cart_items",
                payload: dat
            })
        });
        //THIS IS FOR ADDRESS AND CARD DETAILS
        dispatch({
            type: "address_and_shipping_details",
            payload: userData
        })
        //THIS IS MAKING THE ARRAY EMPTY WHEN WE FINALIZE OUR PAYMENT
        dispatch({
            type: "EMPTY_CART",
        })
        toast("Your Address And Payment Details")
        navigate("/Userorder")
        data.reset();
    }
    //FOR TOTAL OF ALL PRODUCTS IN CART
    const [price, setPrice] = useState(0);
    const total = () => {
        let price = 0;
        getdata.map((data, id) => {
            price = data.price * data.qnty + price
        });
        setPrice(price);
    }
    useEffect(() => {
        total();
    }, [total])



    return (
        <>
            <>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />

                <div className="rowq">
                    <h1 style={{ marginLeft: "350px", marginBottom: "10px" }}>Hello Mr. {getuser.username}, Please Confirm Your Order.</h1>
                    <div className="col-75">
                        <div className="container">
                            <form onSubmit={data.handleSubmit(submitData)}>
                                <div className="rowq">
                                    <div className="col-50">
                                        <h3>Billing Address</h3>
                                        <label htmlFor="fname">
                                            <i className="fa fa-user" /> Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fname"
                                            name="firstname"
                                            placeholder="Enter Your Name"
                                            {...data.register("firstname", { required: true })}
                                        />
                                        <label htmlFor="email">
                                            <i className="fa fa-envelope" /> Email
                                        </label>
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder="Enter Your Email"
                                            {...data.register("email", { required: true })}
                                        />
                                        <label htmlFor="adr">
                                            <i className="fa fa-address-card-o" /> Address
                                        </label>
                                        <input
                                            type="text"
                                            id="adr"
                                            name="address"
                                            defaultValue={"Faisalabad"}
                                            placeholder="Enter Your Address"
                                            {...data.register("address", { required: true })}
                                        />
                                        <label htmlFor="city">
                                            <i className="fa fa-institution" /> City
                                        </label>
                                        <input type="text" id="city" name="city" placeholder="Enter Your City" defaultValue={"Faisalabad"}
                                            {...data.register("city", { required: true })}
                                        />
                                        <div className="row">
                                            <div className="col-50">
                                                <label htmlFor="state">State</label>
                                                <input type="text" id="state" name="state" placeholder="Enter Your State" defaultValue={"Punjab"}
                                                    {...data.register("state", { required: true })}
                                                />
                                            </div>
                                            <div className="col-50">
                                                <label htmlFor="zip">Zip-Code</label>
                                                <input type="text" id="zip" name="zip" placeholder="Enter ZipCode" defaultValue={"3600"}
                                                    {...data.register("zip", { required: true })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-50">
                                        <h3>Payment</h3>
                                        <label htmlFor="fname">Accepted Cards</label>
                                        <div className="icon-container">
                                            <i className="fa fa-cc-visa" style={{ color: "navy" }} />
                                            <i className="fa fa-cc-amex" style={{ color: "blue" }} />
                                            <i className="fa fa-cc-mastercard" style={{ color: "red" }} />
                                            <i className="fa fa-cc-discover" style={{ color: "orange" }} />
                                        </div>
                                        <label htmlFor="cname">Name on Card</label>
                                        <input
                                            type="text"
                                            id="cname"
                                            name="cardname"
                                            placeholder="Enter Your Name"
                                            defaultValue={"Mian Zain"}
                                            {...data.register("cardname", { required: true })}
                                        />
                                        <label htmlFor="ccnum">Credit / Debit Card Number</label>
                                        <input
                                            type="text"
                                            id="ccnum"
                                            name="cardnumber"
                                            placeholder="1111-2222-3333-4444"
                                            defaultValue={"1111 2222 3333 4444"}
                                            {...data.register("cardnumber", { required: true })}
                                        />
                                        <label htmlFor="expmonth">Exp Month</label>
                                        <input
                                            type="text"
                                            id="expmonth"
                                            name="expmonth"
                                            defaultValue={"12"}
                                            placeholder=" Expiring Month"
                                            {...data.register("expmonth", { required: true })}
                                        />
                                        <div className="row">
                                            <div className="col-50">
                                                <label htmlFor="expyear">Exp Year</label>
                                                <input
                                                    type="text"
                                                    id="expyear"
                                                    name="expyear"
                                                    defaultValue={"2026"}
                                                    placeholder="Expiring Year"
                                                    {...data.register("expyear", { required: true })}
                                                />
                                            </div>
                                            <div className="col-50">
                                                <label htmlFor="cvv">CVV</label>
                                                <input type="text" id="cvv" name="cvv" placeholder="CVV" defaultValue={"123"}
                                                    {...data.register("cvv", { required: true })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label>
                                    <input type="checkbox" defaultChecked="checked" name="sameadress"
                                        {...data.register("sameadress", { required: true })}
                                    />
                                    Shipping address same as billing
                                </label>
                                <input
                                    type="submit"
                                    defaultValue="Continue to checkout"
                                    className="btn"
                                />
                            </form>
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="container">



                            <h4>
                                Your Cart
                                <span className="price" style={{ color: "black" }}>

                                    <i className="fa-solid fa-cart-shopping  " style={{ fontSize: 25, cursor: "pointer" }}></i> <b>{getdata.length}</b>
                                </span>
                            </h4>
                            {
                                getdata.map((data, id) => {

                                    return <>
                                        <p>
                                            <a ><strong>Product Name</strong> : {data.name}</a> <span className="price">{data.price}</span>
                                        </p>
                                    </>
                                })
                            }
                            <hr />
                            <p>
                                Total
                                <span className="price" style={{ color: "black" }}>
                                    <b>{price}</b>
                                </span>
                            </p>

                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Checkout
