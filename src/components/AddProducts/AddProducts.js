import React, { useEffect } from 'react';
import "./AddProducts.css";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { v4 } from "uuid";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const AddProducts = () => {
    let param = useParams()
    let data = useForm();
    let navigate = useNavigate();

    useEffect(function () {


        if (param.edithoraha) {

            axios.get('/productLao?id=' + param.edithoraha).then((resp) => {
                data.reset(resp.data)
                console.log(resp.data)
            })

        }

    }, [])

    const submitData = async (userData) => {
        // data a raha hai.
        // console.log(userData);

        if (param.edithoraha) {
            let form = new FormData;

            form.append("name", userData.name);
            form.append("discription", userData.discription);
            form.append("price", userData.price);
            form.append("qnty", userData.qnty);
            form.append("stock", userData.stock);
            form.append("imgdata", userData.imgdata[0]);

            let post = await axios.post('/product_Update?id=' + param.edithoraha, form)
            if (post.data.success) {
                data.reset(userData)

            }
            navigate("/Adminproducts")
            // console.log("edit ha raha ha");
        } else {


            let form = new FormData;

            form.append("name", userData.name);
            form.append("discription", userData.discription);
            form.append("price", userData.price);
            form.append("qnty", userData.qnty);
            form.append("stock", userData.stock);
            form.append("imgdata", userData.imgdata[0]);


            // console.log(...form.entries());
    
            let resp = await axios.post('/Add_product', form)
            console.log(form)
            if (resp) {
                console.log("succes ha");
            }

            data.reset();
        }
    }





    return (
        <>
            <>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />

                <div className="rowq">
                    <div className="col-75">
                        <div className="container">
                            <form onSubmit={data.handleSubmit(submitData)}>
                                <div className="rowq">
                                    <div className="col-50">
                                        <h3>Add Products</h3>
                                        <label htmlFor="name">
                                            <strong>Shoe's Name :</strong>
                                        </label>

                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Enter Shoe Name"
                                            {...data.register("name", { required: true })}
                                        />
                                        <label htmlFor="image">
                                            <strong> Picture :</strong>
                                        </label>
                                        <input
                                            type="file"
                                            id="image"
                                            placeholder="Enter Image"
                                            {...data.register("imgdata",{require:true})}
                                        />
                                        <label htmlFor="price" style={{ marginTop: "10px" }}>
                                            <strong> Price :</strong>
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            placeholder="Enter Price"
                                            {...data.register("price", { required: true })}
                                        />
                                        <label htmlFor="Quantity" style={{ marginTop: "10px" }}>
                                            <strong> Quantity :</strong>
                                        </label>
                                        <input
                                            type="number"
                                            id="qnty"
                                            defaultValue={0}
                                            placeholder="Enter Quantity "
                                            {...data.register("qnty")}
                                        />
                                        <label htmlFor="Available Stock" style={{ marginTop: "10px" }}>
                                            <strong> Available Stock :</strong>
                                        </label>
                                        <input
                                            type="number"
                                            id="stock"
                                            defaultValue={10}
                                            placeholder="Enter Stock "
                                            {...data.register("stock")}
                                        />

                                        <div className="row">
                                            <div className="col-50">
                                                <label htmlFor="discription" style={{ marginTop: "10px" }}>
                                                    <strong> Discription :</strong></label>
                                                <textarea style={{ height: "80px", width: "500px" }} id=" Discription" type='text' placeholder="Enter Shoe Discription"
                                                    {...data.register("discription", { required: true })}
                                                    defaultValue="a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc."
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <button className='btn'>Add Products</button>
                            </form>
                        </div>
                    </div>

                </div>
            </>

        </>
    )
}

export default AddProducts
