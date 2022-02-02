import React, { useState,useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { productdetail } from "../functions/api";

    interface ITutorialData {
        id?: number,
        title: string,
        image: string
        price: string
        saleprice: string
        short_description: string
        description: string,
        brand:[];
        category:[];
    }

const Detail = () => {
    const initialTutorialState = {
        id: null,
        name: "",
        image: "",
        price: "",
        saleprice: "",
        short_description: "",
        description: "",
        brand:"",
        category:""
      };
    let { proid } = useParams();
    const [product , setproduct] = useState(initialTutorialState);
    const [quantity=0 , setQuantity] = useState();
    useEffect( () => {
        allfunction();
    }, []);
    
    const allfunction = async () => {
        const pro = await productdetail(proid);
        setproduct(pro);
    }; 

    const changeQuantity = (type: string) =>{
        if(type=='plus')
        {
            const qty = quantity+1;
            setQuantity(qty);
        }
    }
    
    const imgpath = 'http://myshop.hombrehr.com/storage/products';
    const {id, name, price,image, saleprice, short_description, description} = product;
        
    return (
        <div className="product">
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-5">
                        <img src={imgpath+'/'+image} alt="" width="100%"/>
                    </div>
                    <div className="col-md-7">
                        <h2>{name} </h2>
                        <hr />
                        <p>{short_description}</p>
                        <h4>Sale Price - ₹{price} <small><s>
                            ₹{saleprice}</s></small></h4>
                        <div style={{width:'150px'}}>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-warning" onClick={()=>changeQuantity('minus')}>-</span>
                                <input type="number" className="form-control text-center" value={quantity} />
                                <span className="input-group-text bg-warning" onClick={()=>changeQuantity('plus')}>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Detail;