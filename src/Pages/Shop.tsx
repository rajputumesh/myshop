import React, { FC, useState, useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Product from "../Compoment/Product";
import {categoryproduct, gatproducts, getcategory} from '../functions/api';


const Shop:FC = () => {
    let { category_id } = useParams();
    console.log('category_id '+category_id);
    const [products, setProduct] = useState([]);
    const [categories, setcategory] = useState([]);

    useEffect(() => {
        allfunction();
    }, []);

    async function allproducts () {
        const products:any = await gatproducts();
        setProduct(products);
    };

    
    async function categoryclick(category_id: number) {
        const productlist:any = await categoryproduct(category_id);
        setProduct(productlist);
    }

    const allfunction = async () =>{
        if(category_id!=''){
            const productlist:any = await categoryproduct(category_id);
            setProduct(productlist);
        }else{
            const products:any = await gatproducts();
            console.log('products ='+products);
            setcategory(products);
        }

        const categorylist:any = await getcategory();
        setcategory(categorylist);
    }
    
    const product = products.map((data:{id: number; name: string, slug:string, image:string, price:number, saleprice:number})=>{
        return(
            <Product key={data.id} 
            name={data.name} 
            slug={data.slug} 
            image={data.image} 
            price={data.price} 
            saleprice={data.saleprice} id={data.id} />
        )
    });

    const category = categories.map((data:{id: number; name: string, image:string})=>{
        const {id, name, image} = data;
        const imgpath = "http://myshop.hombrehr.com/storage/categories";
        return(
            <div className="mx-1" key={id} style={{border:'1px solid gray'}}>
                <NavLink className="nav-link" to={'/categories/'+id} onClick={() => categoryclick(id)}>
                    <img className="mr-3" src={imgpath+'/'+image} alt={name} style={{height:'50px'}}/>
                    {name}
                </NavLink>
            </div>
        )
    });

    return (
        <div className="product my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="">
                            <h4>All Categories
                                <hr />
                            </h4>
                            {category}
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <h4>Our Product
                            <div className="pull-right">
                                <NavLink to='/products' onClick={() => allproducts()} className='btn btn-outline-success'>
                                    View All
                                </NavLink>
                            </div>
                            <hr />
                        </h4>
                        <div className="row d-flex flex-wrap">
                            {product}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Shop;


