import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ChectOtp = () => {
    let data = useForm();
    let navigate = useNavigate();

    const otpCheckKaro = async (data) => {
        console.log(data);
        let resp = await axios.post("/check_otp", data);
        if (resp.data) {
            // alert("Password Has Changed Successfully");
            toast("Password Has Changed Successfully");

        } else {
            // alert(" Invalid OTP");
            toast("Invalid OTP");
        }
        data.reset();
    }


    return (
        <>
            <div className='containerrr'>
                <form onSubmit={data.handleSubmit(otpCheckKaro)} className="signup" >
                    <h2>Type Your OTP Code </h2>
                    <div className="signup__field">
                        <input
                            {...data.register("otp", {
                                required: true, validate: async (anydata) => {

                                    let otp = data.getValues().otp;

                                    let resp = await axios.get('/check-otp-for-validation?otp=' + otp);
                                    if (resp.data) {
                                        return true;
                                    } else {
                                        return false;
                                    }

                                }
                            })}
                            className="signup__input"
                            type="otp"
                            name="otp"
                            id="otp"
                            required=""
                        />

                        <label className="signup__label" htmlFor="otp">
                            Otp
                        </label>
                        {data.formState.errors.otp && data.formState.errors.otp.type == "required" && <div className="error" style={{ color: "red" }}>Please Enter your OTP</div>}
                        {data.formState.errors.otp && data.formState.errors.otp.type == "validate" && <div className="error" style={{ color: "red" }} >Invalid OTP</div>}
                    </div>
                    <div className="signup__field">
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
                        {data.formState.errors.email && <div className="error" style={{ color: "red" }}>Please Enter your valid email</div>}
                    </div>
                    <div className="signup__field">
                        <input
                            {...data.register('newpassword', {
                                required: true, minLength: 3, validate: (data) => {
                                    let code = data[0].charCodeAt();
                                    if (code >= 65 && code <= 90) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            })}
                            className="signup__input"
                            type="password"
                            name="newpassword"
                            id="newpassword"
                            required=""
                        />

                        <label className="signup__label" htmlFor="newpassword">
                            Password
                        </label>
                        {data.formState.errors.newpassword && data.formState.errors.newpassword.type == "required" && <div className="error" style={{ color: "red" }}>Please Enter your password</div>}
                        {data.formState.errors.newpassword && data.formState.errors.newpassword.type == "minLength" && <div className="error" style={{ color: "red" }}>Please Enter At'Least 8 Character's</div>}
                        {data.formState.errors.newpassword && data.formState.errors.newpassword.type == "validate" && <div className="error" style={{ color: "red" }} >Please Enter First Letter Capital</div>}
                    </div>
                    <div className="signup__field">
                        <input
                            {...data.register('confirmpassword', {
                                required: true, minLength: 3, validate: (Anydata) => {
                                    let nPassword = data.getValues().newpassword
                                    let cPassword = data.getValues().confirmpassword
                                    if (nPassword === cPassword) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            })}
                            className="signup__input"
                            type="password"
                            name="confirmpassword"
                            id="confirmpassword"
                            required=""
                        />

                        <label className="signup__label" htmlFor="confirmpassword">
                            Confirm Password
                        </label>
                        {data.formState.errors.confirmpassword && data.formState.errors.confirmpassword.type == "required" && <div className="error" style={{ color: "red" }}>Please Enter Same password Again</div>}
                        {data.formState.errors.confirmpassword && data.formState.errors.confirmpassword.type == "validate" && <div className="error" style={{ color: "red" }} >Password's Are Not Matching</div>}
                    </div>

                    <button className='button'>Proceed</button>
                </form>
            </div>
        </>
    )
}

export default ChectOtp
