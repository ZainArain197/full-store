import React from 'react';
import { NavLink } from 'react-router-dom';


const Admin = () => {



  return (
    <>
      <NavLink to={`/AddProducts`}>  <button className='btn' style={{width:"300px"}} >Add New Products</button></NavLink>
      <NavLink to={`/Adminproducts`}>  <button className='btn' style={{width:"300px"}} >Product's</button></NavLink>
      <NavLink to={`/Adminusers`}>  <button className='btn' style={{width:"300px"}} >User's</button></NavLink>
      <NavLink to={`/AllOrders`}>  <button className='btn' style={{width:"300px"}} >Coustomer Order's</button></NavLink>
    </>
  )
}

export default Admin
