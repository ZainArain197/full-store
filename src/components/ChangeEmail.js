import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ChangeEmail = () => {
    let param = useParams()
    let data = useForm();
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const emailRestkro = async (userData) => {

        if (param.resetEmail) {
            let post = await axios.post('/Reset_email?id=' + param.resetEmail, userData)
            if (post.data) {
                dispatch({
                    type: "Email_edited",
                    payload: post.data.a
                })
                data.reset(userData)
                toast("Your Email Has Changed Successfully");
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
                <form onSubmit={data.handleSubmit(emailRestkro)} className="inputs">
                    <div className="inputs__item">
                        <label htmlFor="new-Email" className="inputs__label">
                            Change Your User Email
                        </label>

                        <input
                            {...data.register('newemail', { required: true })}
                            className="inputs__input"
                            type="email"
                            name="newemail"
                            id="newemail"
                            required=""
                        />
                        {data.formState.errors.newemail && data.formState.errors.newemail.type == "required" && <div className="error" style={{ color: "red" }}>Please Enter A Valid New Email</div>}

                    </div>

                    <div className="inputs__item inputs__item--cta">
                        <button className="btn" >Reset Email</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ChangeEmail
