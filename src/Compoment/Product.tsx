import React from "react";
import { NavLink } from "react-router-dom";

interface IProps {
    id:number;
    name:string;
    saleprice:number;
    price:number;
    slug:string;
    image:string;
  }

const Product = (props: IProps) => {
    const {id, name, price, saleprice, slug, image} = props;
    const imgpath = "http://myshop.hombrehr.com/storage/products";

    return (
        <div className="col-md-3 col-sm-6 my-2">
            <div className="card">
                <div className="text-center" style={{borderBottom:'1px solid gray'}}>
                    <NavLink  to={'/product/'+id}>
                        <img className="w-100" src={imgpath+'/'+image} alt={name} style={{height:'200px'}}/>
                    </NavLink>
                </div>
                <div className="pt-3">
                    <ul className="px-2" style={{listStyle:'none',paddingLeft:0}}>
                        <li><h6>₹{saleprice} <small><s>₹{price}</s></small></h6></li>
                        <li>
                            <NavLink  to={'/product/'+id} style={{textDecoration:'none'}}>
                                <p>{name.substring(0,21)}</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Product;