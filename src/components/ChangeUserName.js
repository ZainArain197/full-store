import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ChangeUserName = () => {
    let param = useParams()
    let data = useForm();
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const nameRestkro = async (userData) => {

        if (param.resetname) {
            let post = await axios.post('/Reset_name?id=' + param.resetname, userData)
            if (post.data) {
                dispatch({
                    type: "name_edited",
                    payload: post.data.a
                })
                data.reset(userData)
                toast("Your Name Has Changed Successfully");
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
                <form onSubmit={data.handleSubmit(nameRestkro)} className="inputs">
                    <div className="inputs__item">
                        <label htmlFor="new-name" className="inputs__label">
                            Change Your User Name
                        </label>

                        <input
                            {...data.register('newname', { required: true })}
                            className="inputs__input"
                            type="text"
                            name="newname"
                            id="newname"
                            required=""
                        />
                        {data.formState.errors.newname && data.formState.errors.newname.type == "required" && <div className="error" style={{ color: "red" }}>Please Enter Your Name</div>}

                    </div>

                    <div className="inputs__item inputs__item--cta">
                        <button className="btn" >Reset Name</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ChangeUserName
