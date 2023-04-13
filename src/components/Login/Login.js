import { responsiveFontSizes } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./Login.css"

const Login = () => {


  let dispatch = useDispatch();
  let data = useForm();
  let navigate = useNavigate();
  let users = useSelector(state => state.userSection.users);

  const loginKaro = async (data) => {
    // let userExits = users.find(user => {

    //   if (user.email == data.email && user.password == data.password) {
    //     return true;
    //   }
    // })


    let resp = await axios.post('/login', data);

    if (resp.data) {
      dispatch({
        type: "USER_LOGIN_HOGYA",
        payload: resp.data.newuser
      })

      toast("LOGED IN SUCCESSFULLY");
      navigate("/Cards")
    } else {
      alert("User Not Found");

    }

  }


  return (
    <>
      <div className='containerrr'>
        <form onSubmit={data.handleSubmit(loginKaro)} className="signup" >
          <h1>Please Login Here</h1>
          <h2 className='head'>
            If You Dont Have An Account <Link to={"/signup/"}>Sign up</Link>
          </h2>
          <div className="signup__field">

            <input
              {...data.register("username", { required: true })}
              className="signup__input"
              type="username"
              name="username"
              id="username"
              required=""
            />

            <label className="signup__label" htmlFor="username">
              Username
            </label>
            {data.formState.errors.username && <div className="error" style={{ color: "red" }}>Please Enter your email</div>}
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
            {data.formState.errors.email && <div className="error" style={{ color: "red" }}>Please Enter your email</div>}
          </div>
          <div className="signup__field">
            <input
              {...data.register('password', {
                required: true, minLength: 3,
                //  validate: (data) => {
                //   let code = data[0].charCodeAt();
                //   if (code >= 65 && code <= 90) {
                //     return true;
                //   } else {
                //     return false;
                //   }
                // }
              })}
              className="signup__input"
              type="password"
              name="password"
              id="password"
              required=""
            />

            <label className="signup__label" htmlFor="password">
              Password
            </label>
            {data.formState.errors.password && data.formState.errors.password.type == "required" && <div className="error" style={{ color: "red" }}>Please Enter your password</div>}
            {data.formState.errors.password && data.formState.errors.password.type == "minLength" && <div className="error" style={{ color: "red" }}>Please Enter At'Least 8 Character's</div>}
            {data.formState.errors.password && data.formState.errors.password.type == "validate" && <div className="error" style={{ color: "red" }} >Please Enter First Letter Capital</div>}
          </div>
          <div className="signup__field" style={{ marginTop: "-30px" }}>
            <span><Link to={"/ForgotPassword/"}>Forgot Password?</Link></span>
          </div>
          <button className='button'>Login</button>
        </form>

      </div>
    </>
  )
}

export default Login
