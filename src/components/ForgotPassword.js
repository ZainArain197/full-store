import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {


    let data = useForm();
    let navigate = useNavigate();
    const loginKaro = async (data) => {
        console.log(data);
        let resp = await axios.post("/forget_password", data);
        if (resp.data) {
            alert("User Found");
        } else {
            alert("User Not Found");

        }
        navigate("/ChectOtp")
    }


    return (
        <>
            <div className='containerrr'>
                <form onSubmit={data.handleSubmit(loginKaro)} className="signup" >
                    <h2>Type Your Email?</h2>
                    <div className="signup__field" style={{ marginTop: "30px" }}>
                        <input
                            {...data.register("email", { required: true })}
                            className="signup__input"
                            type="email"
                            name="email"
                            id="email"
                            required=""
                        />

                        <label className="signup__label" htmlFor="email">
                            Email
                        </label>
                        {data.formState.errors.email && <div className="error" style={{ color: "red" }}>Please Enter your email</div>}
                    </div>

                    <button className='button'>Request OTP</button>
                </form>


            </div>

        </>
    )
}

export default ForgotPassword
