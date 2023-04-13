import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ResetPass = () => {
    let param = useParams()
    let data = useForm();
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const passwordRestkro = async (userData) => {

        if (param.reset) {
            let post = await axios.post('/Reset_Password?id=' + param.reset, userData)
            if (post.data) {
                // console.log(post.data.a);
                dispatch({
                    type: "Password_reset_hogaya",
                    payload: post.data.a
                })
                data.reset(userData)
                toast("Your Password Is Reset Successfully");
                navigate("/UserProfile")
            } else {
                toast("Some Error Occured Try Again")
            }
        }

    }
    return (
        <>
            <div className="panel">
                <img
                    className="panel__avatar"
                    src="http://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-01-icon.png"
                    alt="avatar"
                />
                <form onSubmit={data.handleSubmit(passwordRestkro)} className="inputs">
                    <div className="inputs__item">
                        <label htmlFor="previous-password" className="inputs__label">
                            Previous password
                        </label>

                        <input
                            {...data.register('previouspassword', {
                                required: true, minLength: 3, validate: (data) => {
                                    let code = data[0].charCodeAt();
                                    if (code >= 65 && code <= 90) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            })}
                            className="inputs__input"
                            type="password"
                            name="previouspassword"
                            id="previouspassword"
                            required=""
                        />
                        {data.formState.errors.previouspassword && data.formState.errors.previouspassword.type == "required" && <div className="error" style={{ color: "red" }}>Please Enter your password</div>}
                        {data.formState.errors.previouspassword && data.formState.errors.previouspassword.type == "minLength" && <div className="error" style={{ color: "red" }}>Please Enter At'Least 8 Character's</div>}
                        {data.formState.errors.previouspassword && data.formState.errors.previouspassword.type == "validate" && <div className="error" style={{ color: "red" }} >Please Enter First Letter Capital</div>}
                    </div>
                    <div className="inputs__item inputs__item--new">
                        <label htmlFor="new-password" className="inputs__label">
                            New password
                        </label>
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
                            className="inputs__input"
                            type="password"
                            name="newpassword"
                            id="newpassword"
                            required=""
                        />
                        {data.formState.errors.newpassword && data.formState.errors.newpassword.type == "required" && <div className="error" style={{ color: "red" }}>Please Enter your password</div>}
                        {data.formState.errors.newpassword && data.formState.errors.newpassword.type == "minLength" && <div className="error" style={{ color: "red" }}>Please Enter At'Least 8 Character's</div>}
                        {data.formState.errors.newpassword && data.formState.errors.newpassword.type == "validate" && <div className="error" style={{ color: "red" }} >Please Enter First Letter Capital</div>}
                    </div>
                    <div className="inputs__item inputs__item--new">
                        <label htmlFor="new-password" className="inputs__label">
                            Re-type New password!
                        </label>
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
                            className="inputs__input"
                            type="password"
                            name="confirmpassword"
                            id="confirmpassword"
                            required=""
                        />
                        {data.formState.errors.confirmpassword && data.formState.errors.confirmpassword.type == "required" && <div className="error" style={{ color: "red" }}>Please Enter Same password Again</div>}
                        {data.formState.errors.confirmpassword && data.formState.errors.confirmpassword.type == "validate" && <div className="error" style={{ color: "red" }} >Password's Are Not Matching</div>}
                    </div>
                    <div className="inputs__item inputs__item--cta">
                        <button className="btn" >Reset Password</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ResetPass
