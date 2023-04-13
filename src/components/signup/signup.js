import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./signup.css";
import axios from 'axios';



export default () => {

  let data = useForm();

  // let users = useSelector(store => store.userSection.users);
  // console.log(users);
  let dispatch = useDispatch();
  let navigate = useNavigate();


  const signupKaro = async (userData) => {
    
    if (userData.type == "Admin" && userData.password != "Admin") {
       toast("You Can't Login As Admin");
    } else if (userData.type == "Admin" && userData.password === "Admin") {
      let resp = await axios.post('/create_user', userData)
      if (resp) {
        toast("You Successfully Signed Up As Admin");
        // console.log(resp);
        dispatch({
          type: "USER_ADD_KIA",
          payload: userData.resp
        });
      }
      navigate("/Login");
    } else {
      let resp = await axios.post('/create_user', userData)
      if (resp) {
        toast("Successfully Signed Up");
        // console.log(resp);
        dispatch({
          type: "USER_ADD_KIA",
          payload: userData.resp
        });
      }
      navigate("/Login");
    }
    data.reset();
  }


  return <>
    <div className='containerrr'>
      <form onSubmit={data.handleSubmit(signupKaro)} className="signup" >
        <h1>Create account</h1>
        <h2 className='head'>
          Already have an account? <Link to={"/login/"}>Sign in</Link>
        </h2>
        <div className="signup__field">
          Select Type
          <select  {...data.register("type", { required: true })} >
            <option>User</option>
            <option>Admin</option>
          </select>
        </div>
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
        <button className='button'>Sign up</button>
      </form>

    </div>
  </>
}