import React, { useState,useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { productdetail } from "../functions/api";


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
    
    useEffect( () => {
        allfunction();
    }, []);
    
    const allfunction = async () => {
        const pro = await productdetail(proid);
        setproduct(pro);
    }; 
    
    const imgpath = 'http://myshop.hombrehr.com/storage/products';
    const {id, name, price,image, saleprice, short_description, description} = product;
        

    const [quantity=1 , setQuantity] = useState();
    const changeQuantity = (type: string,qty:number) =>{
        if(type=='plus')
        {   
            const changeqty:any = qty+1;
            setQuantity(changeqty);
        }else if(type=='minus')
        {
            const changeqty:any = qty-1;
            setQuantity(changeqty);
        }
    }
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
                        <div className="d-flex my-4">
                            <h4>QUANTITY</h4>
                            <div className="">
                                <div className="input-group mb-3 mx-3" style={{width:'150px'}}>
                                    <span className="input-group-text bg-warning" onClick={()=>changeQuantity('minus',quantity)}>-</span>
                                    <input type="number" className="form-control text-center" value={quantity} />
                                    <span className="input-group-text bg-warning" onClick={()=>changeQuantity('plus',quantity)}>+</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary"><i className="fa fa-shopping-cart" ></i> Add TO Cart</button>
                        </div>
                        <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: description
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Detail;