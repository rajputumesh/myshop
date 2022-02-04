import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";

interface StateInterface {
    email: string;
    password: string;
}
const Login:FC = () => {
    
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    
    const changeHandler = (event: { target: { name: any; value: any; }; }) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
      
    const  submitForm = async () =>{
        try {
            const response = await fetch('http://myshop.hombrehr.com/api/user/login', {
                method: "post",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }),
                body: JSON.stringify(form)
            });
            if (response.status === 200) {
                let responseBody: any = await response.json();
                console.log(responseBody);
            }
            console.log('hiii');
        } catch (ex) {
            console.log(ex);
        }
    }
    return (
        <div className="my-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 px-lg-4">
                        <div className="card">
                            <div className="card-header"><i className="fa fa-user"></i> Login Now</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="mt-3" htmlFor="">Email</label>
                                    <input className="form-control" type="email" name="email" id="email" placeholder="Email id" onChange={changeHandler}/>
                                </div>
                                <div className="form-group">
                                    <label className="mt-3" htmlFor="">Password</label>
                                    <input className="form-control" type="text" name="password" id="password" placeholder="Password" onChange={changeHandler}/>
                                </div>
                                <div className="form-group my-3">
                                    <button className="btn btn-primary px-5" onClick={submitForm}>Login</button>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-between">
                                    <div><NavLink to='/forget_password' className='text-decoration-none'><i className="fa fa-key"></i> Froget Password</NavLink></div>
                                    <div> New User <NavLink to='/register' className='text-decoration-none'><i className="fa fa-lock"></i> Register Now</NavLink></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;
