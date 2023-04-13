import { border } from '@mui/system';
import axios from 'axios';
import { currencies } from 'currency-formatter';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserProfile = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let cu = useSelector(store => store.userSection.cu)
  let [user, setUser] = useState([cu]);
  let [typee, setTypee] = useState("password");
  let [hideshow, setHideshow] = useState("(👁)");

  const DeleteAccount = async (data) => {
    console.log(data._id);
    let text = "Are You Your You Want Delete Your Account";
    if (window.confirm(text) == true) {
      let resp = await axios.delete('/Delete_user_Account?someID=' + data._id);
      if (resp.data) {
        toast("Your Account Deleted Successfully")
        dispatch({
          type: "Account_deleted",
        })
        navigate("/signup")
      } else {
        toast("Can't Delete Your Account At The Moment");
      }
    } else {
      toast("Deletion Got cancelled")
    }


  }

  const showPassword = (e) => {
    let checkType = e.target.value;
    console.log(checkType);
    if (checkType == "password") {
      setTypee("text")
      setHideshow(<i class="fa-solid fa-eye-slash"></i>)
    } else {
      setTypee("password")
      setHideshow("(👁)")
    }
  }

  return (
    <>
      {
        cu.username == undefined && <h1>Login First</h1>
      }

      {
        cu.username &&
        <div className="panel">
          <img
            className="panel__avatar"
            src="http://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-01-icon.png"
            alt="Profile"
          />
          {
            user.map((data, ind) => {
              return <>
                <div className="inputs">
                  <h3>Welcome, {data.type}! {data.username}</h3>
                  <div className="inputs__item inputs__item--new">
                    <strong><span>Name :</span></strong><span style={{ marginLeft: "50px" }}>{data.username}</span><Link to={'/ChangeUserName/' + data._id}><span style={{ marginLeft: "20px", color: "black" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg></span></Link>
                  </div>
                  <div className="inputs__item inputs__item--new">
                    <strong> <span>Email :</span></strong><span style={{ marginLeft: "50px" }}>{data.email}</span><Link to={'/ChangeEmail/' + data._id}><span style={{ marginLeft: "20px", color: "black" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg></span></Link>
                  </div>
                  <div className="inputs__item inputs__item--new">
                    <strong> <span>Password :</span></strong>< input type={typee} style={{ marginLeft: "50px", backgroundColor: " #084646", width: "110px", border: "none" }} defaultValue={data.password} /><button value={typee} onClick={(e) => showPassword(e)} >{hideshow}</button><Link to={'/ResetPass/' + data._id}><span style={{ marginLeft: "20px", color: "black" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg></span></Link>
                  </div>

                  <div className="inputs__item inputs__item--cta">
                    <button className="btn" onClick={() => DeleteAccount(data)} >Delete Account</button>
                  </div>
                </div>
              </>
            })
          }

        </div>
      }
    </>

  )
}

export default UserProfile
