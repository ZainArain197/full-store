import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Header = () => {

    let cu = useSelector(store => store.userSection.cu)
    let dispatch = useDispatch();
  
    // ya menu ka code hai materilize menu --------------------------------------------

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    // menu ko band krny k lia
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getdata = useSelector((state) => state.cartReducer.carts);
    // console.log( "data a raha hai",getdata);


    // to calculate total-------------------------------------------------------------------------------------

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

    //----------------------------------------------------------------------------------------------------

    const dlt = (data) => {

        dispatch({
            type: "RMV_CART",
            payload: data
        })
        toast("Product Removed")

    }

    return (
        <>
            <Navbar className="navbar" style={{ padding: "20px", width: "100%" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Home</NavLink>
                    <Nav className="me-auto">
                        {
                            cu.username &&
                            <NavLink to="/Cards" className="text-decoration-none text-light" >Shoes</NavLink>
                           
                        }
                        {cu.username == undefined &&
                            <>
                                {/* <NavLink to="/signup " className="text-decoration-none text-light" style={{ marginLeft: "20px", width: "100%" }} >Signup</NavLink> */}
                                <NavLink to="/Login " className="text-decoration-none text-light" style={{ marginLeft: "20px", width: "100%" }}>Login</NavLink>
                            </>
                        }
                        {cu.type === "Admin" &&cu.password==="Admin" &&
                            <NavLink to="/Admin " className="text-decoration-none text-light" style={{ marginLeft: "20px", width: "100%" }}>Admin</NavLink>
                        }
                        {
                            cu.username &&
                            <>
                            <NavLink to="/UserProfile" className="text-decoration-none text-light" style={{ marginLeft: "20px", width: "100%" }} >Profile</NavLink>
                            <NavLink className="text-decoration-none text-light" style={{ marginLeft: "20px", width: "100%" }} to="/login" onClick={() => {
                                dispatch({
                                    type: "LOGOUT_HOGY"
                                });
                            }
                            }>Logout</NavLink>
                            </>
                        }
                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary"
                        // onclock py data show kry
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa-solid fa-cart-shopping text-light " style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>
                </Container>
                {/* menu */}
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "25rem", padding: 10, color: "black" }}>
                                <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                    <i className='fas fa-close smallclose' style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}
                                        onClick={handleClose}
                                    ></i>

                                </div>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th> Your Cart </th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {
                                            getdata.map((data, id) => {

                                                return (
                                                    <>
                                                        <tr  >
                                                            <td>  <NavLink to={`/cart/${data._id}`}  > <img src={data.imgdata} style={{ height: "60px", marginTop: "10px" }} /></NavLink></td>
                                                            <td >

                                                                <p style={{ color: "black" }}><strong>Product Name : </strong> {data.name}</p>

                                                                <p style={{ color: "black" }}> <strong>Quantity : </strong> {data.qnty}</p>
                                                                <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(data)} >
                                                                    <i className='fas fa-trash largetrash'></i>
                                                                </td>
                                                            </td>


                                                        </tr>
                                                    </>


                                                )


                                            })
                                        }

                                        <p className='text-center' style={{ color: "black" }}> <strong>Total </strong> : ${price}</p>
                                    </tbody>

                                </Table>



                            </div> :
                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose' style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}
                                    onClick={handleClose}
                                ></i>
                                <p style={{ fontSize: 22 }}>Your Cart Is Empty!</p>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }




                </Menu>
            </Navbar>





        </>
    )
}

export default Header
