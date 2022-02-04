import React, { FC, useState, useContext, useEffect} from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {getcategory} from '../functions/api';

const Header: FC = () => {
    interface StateInterface {
        name: string;
    }

    const [categories , setcategory] = useState([]);
    useEffect( () => {
        allfunction();
    }, []);
    
    const allfunction = async () => {
        const category:any = await getcategory();
        setcategory(category);
    };  

    const category = categories.map((data:{id: number; name: string, image:string})=>{
        const {id, name} = data;
        return(
            <li className="nav-item" key={id} >
                <NavLink className="nav-link text-white" to={'/categories/'+id}>
                    {name}
                </NavLink>
            </li>
        )
    });
  return (
    <>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Container className="d-flex flex-end">
                <NavLink className="navbar-brand" to="/">Meri Shop</NavLink>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">Cart</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </Nav>
        <div className="py-2 bg-primary">
            <Container className="content-center">
                <ul className="nav d-flex justify-content-center">
                    {category}
                </ul>
            </Container>
        </div>
    </>
  );
};

export default Header;
