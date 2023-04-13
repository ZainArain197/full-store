import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { BsDash, BsPlus } from "react-icons/bs";


const CardsDetails = () => {

  const getdata = useSelector((state) => state.cartReducer.carts);
  // console.log(getdata);
  // console.log(getdata);

  //---------------------------------------------------------------------------------------------------------

  // delete button

  const dispatch = useDispatch();
  const moveHome = useNavigate();

  const dlt = (detailData) => {

    dispatch({
      type: "RMV_CART",
      payload: detailData
    });
    // to navigate on home
    moveHome("/Cards");
    toast("Product Removed From Your Cart")

  }

  // quantity increace k lia-------------------------------------------------------------------------

  const send = (detailData) => {
    // console.log(detailData);
    // carts.push(detailData);
    // console.log(carts);
    // detailData kuch b ho sakta hai
    let qnty=0;
    dispatch({
      type: "increment",
      payload: detailData,qnty
    })

  }

  // to decrmnt  item one by one-------------------------------------------------------------------------

  const remove = (detailData) => {
    // detailData kuch b ho sakta hai
    dispatch({
      type: "aik_Item_Ko_Urado",
      payload: detailData
    });
  }
//-------------------------------------------------------------------------------------------


const [price, setPrice] = useState(0);
// console.log(price);
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

//-------------------------------------------------------------------------------------------

const Checkout = ()=>{
  moveHome("/Checkout");
  toast("Please Confirm Your Order")
}

  return (
    <>
      <div className="cart">
        <div className="containerr">
         
          {getdata.length > 0 ? <>
            <h3 className='head'>Your cart</h3>
            <div className="row">
              <div className="col-9">
                <div className="cart__heading">
                  <div className="row">
                    <div className="col-2">Picture</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div>
                {getdata.map(detailData => (

                  <div className="row verticalAlign" key={detailData.id} >
                    <div className="col-2">
                      <div className="cart__image">
                        <img src={detailData.imgdata} alt="" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__name">
                        {detailData.name}
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__price">
                        $ {detailData.price}
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="details__info cart__incDec">
                        <div className="details__incDec">
                          <span className="dec" onClick={detailData.qnty <= 1 ? () => dlt(detailData.id) : () => remove(detailData)}><BsDash /></span>
                          <span className="quantity">{detailData.qnty}</span>
                          <span className="inc" onClick={() => send(detailData)}><BsPlus /></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__total text-center">
                        $ {detailData.price * detailData.qnty}
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__remove" >
                        <i  className='fas fa-trash' onClick={() => dlt(detailData)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-3 summary-col">
                <div className="summary">
                  <div className="summary__heading">
                    Summary
                  </div>
                  <div className="summary__details">
                    <div className="row mb-10">
                      <div className="col-6">
                        Total Items:
                      </div>
                      <div className="col-6">{getdata.length}</div>
                    </div>
                    <div className="row mb-10">
                      <div className="col-6">
                        Total Price
                      </div>
                      <div className="col-6">
                        $ {price}
                      </div>
                    </div>
                    <button type="button" className="checkout" 
                    onClick={Checkout}
                    >Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </> : <h1 style={{textAlign :"center"}}>Your cart is empty!</h1>}
        </div>
      </div>


    </>
  )
}

export default CardsDetails
