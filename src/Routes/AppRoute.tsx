import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Detail from "../Pages/Detail";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import { propTypes } from "react-bootstrap/esm/Image";

const AppRoute:FC = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories/:category_id" element={<Shop />} />
                <Route path="/brand/:id" element={<Shop />} />
                <Route path="/products" element={<Shop />} />
                <Route path="/product/:proid" element={<Detail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )

}

export default AppRoute;