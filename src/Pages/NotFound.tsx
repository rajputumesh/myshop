import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const NotFound:FC = () => {

    return (
        <div className="my-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1>Page Not Found</h1>
                        <h4>this page is under construction page </h4>
                        <div><NavLink to='/'>Return Home</NavLink></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NotFound;