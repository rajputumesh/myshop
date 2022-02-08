import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { signUp } from "../redux/actions/userAction";


const Register: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const changeHandler = (event: { target: { name: any; value: any } }) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    dispatch(signUp(form, navigate));
  };
  // const  submitForm = async () => {
  //     console.log(form)
  //     try {
  //         const response = await fetch('http://myshop.hombrehr.com/api/user/register', {
  //         method: "post",
  //         headers: new Headers({
  //             "Content-Type": "application/json",
  //             Accept: "application/json"
  //         }),
  //         body: JSON.stringify(form)
  //         });
  //         if (response.status === 200) {
  //         let responseBody: any = await response.json();
  //             console.log(responseBody);
  //         }
  //         console.log('hiii');
  //     } catch (ex) {
  //         console.log(ex);
  //     }
  // }
  return (
    <div className="my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 px-lg-4">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-user"></i> Register Now
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label className="mt-3" htmlFor="">
                    UserName
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="User name"
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="mt-3" htmlFor="Phone">
                    Phone
                  </label>
                  <input
                    className="form-control"
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="mt-3" htmlFor="">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Id"
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label className="mt-3" htmlFor="">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group my-3">
                  <button className="btn btn-primary px-5" onClick={submitForm}>
                    Register
                  </button>
                </div>
              </div>
              <div className="card-footer">
                <div className="pull-right">
                  Already Register{" "}
                  <NavLink to="/login" className="text-decoration-none">
                    <i className="fa fa-lock"></i> Login Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
