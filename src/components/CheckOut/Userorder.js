import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "./userorder.css"
const Userorder = () => {


  const getuser = useSelector((state) => state.userSection.cu);
  const getdetails = useSelector((state) => state.orderandpaymentSection.details);
  const getfinalorder = useSelector((state) => state.orderandpaymentSection.finalCart);
console.log(getfinalorder);

  useEffect(() => {


    for (let i of getfinalorder) {
      // console.log(i);
      let send = axios.post('/final_cart', i)
      if (send) {
        console.log(send, "fefsef");
      }
    }
  }, [])


  //FOR TOTAL OF ALL PRODUCTS
  const [price, setPrice] = useState(0);
  const total = () => {
    let price = 0;
    getfinalorder.map((data, id) => {
      price = data.price * data.qnty + price
    });
    setPrice(price);
  }
  useEffect(() => {
    total();
  }, [total])

  //I STORED GETUSER IN ARRAY SO I CAN MAP ON IT
  let user = [getuser];
  //-----------------------------------

  return (
    <>
      <h2>Payment Details:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name On Card</th>
            <th>Card Number</th>
            <th>Province/State</th>
            <th>City</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            getdetails.map((details, indx) => {
              return <>
                <tr>
                  <td >{details.cardname}</td>
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
      <h2>Order Details:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product Picture</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Order Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            getfinalorder.map((details, indx) => {


              return <>
                <tr >
                  <td><img src={details.imgdata} style={{ height: "40px" }} /></td>
                  <td >{details.name}</td>
                  <td>{details.price}</td>
                  <td >{details.qnty}</td>
                  <td>{"pending"}</td>
                  <td>{price}</td>
                </tr>
              </>
            })
          }
        </tbody>
      </table>
      <h2>User Details:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((details, indx) => {
              return <>
                <tr >
                  <td >{details.username}</td>
                  <td>{details.email}</td>
                </tr>
              </>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Userorder
