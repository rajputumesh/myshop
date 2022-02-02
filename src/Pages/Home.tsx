import React, {FC ,useState, useContext, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Product from "../Compoment/Product";
import {getcategory, gatproducts, getbrands} from '../functions/api';

const Home:FC = () => {
    
    const [products , setproduct] = useState([]);
    const [brands , setbrand] = useState([]);
    const [categories , setcategory] = useState([]);

    useEffect(() => {
        allfunction();
    }, []);

    const allfunction = async () =>{
        const productlist:any = await gatproducts();
        setproduct(productlist);
        
        const brandlist:any = await getbrands();
        setbrand(brandlist);

        const categorylist:any = await getcategory();
        setcategory(categorylist);
    }

    const category = categories.map((data:{id: number; name: string, image:string})=>{
        const {id, name, image} = data;
        const imgpath = "http://myshop.hombrehr.com/storage/categories";
        return(
            <div className="mx-1" key={id} style={{border:'1px solid gray'}}>
                <NavLink className="nav-link text-white" to={'/categories/'+data.id}>
                    <img src={imgpath+'/'+image} alt={name} style={{height:'100px'}}/>
                </NavLink>
            </div>
        )
    });

    //console.log('products '+products);
    //console.log('brands '+brands);
    
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
    const brand = brands.map((data:{id: number; name: string, image:string})=>{
        const {id, name, image} = data;
        const imgpath = "http://myshop.hombrehr.com/storage/brands";
        return (
            <div className="mx-1" key={id} style={{border:'1px solid gray'}}>
                <NavLink to={'/brand/'+id}>
                    <img src={imgpath+'/'+image} alt={name} style={{height:'90px'}}/>
                </NavLink>
            </div>
        )
    });
    return (
        <div>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://rukminim1.flixcart.com/flap/1688/280/image/c114e26bce72191d.jpg?q=50" alt="Los Angeles" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                    <img src="https://rukminim1.flixcart.com/flap/1688/280/image/08675e90338e98af.jpg?q=50" alt="Chicago" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                    <img src="https://rukminim1.flixcart.com/flap/1688/280/image/1b4cc9f62ac9ee97.jpg?q=50" alt="New York" className="d-block w-100" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            <div className="section py-5">
                <div className="container">
                    <div className="category">
                        <h4>Categories
                            <div className="pull-right">
                                <NavLink to='/category' className='btn btn-outline-success'>
                                    View All
                                </NavLink>
                            </div>
                        </h4>
                        <div className="table-responsive w-100">
                            <div className="d-flex justify-content-start mt-4">
                                {category}
                            </div>
                        </div>
                    </div>
                    <div className="product py-5">
                        <h4>Latest Product
                            <div className="pull-right">
                                <NavLink to='/products' className='btn btn-outline-success'>
                                    View All
                                </NavLink>
                            </div>
                        </h4>
                        <div className="row d-flex flex-wrap justify-content-center mt-4">
                            {product}
                        </div>
                    </div>

                    <div className="brand">
                        <h4>Brands
                            <div className="pull-right">
                                <NavLink to='/brands' className='btn btn-outline-success'>
                                    View All
                                </NavLink>
                            </div>
                        </h4>
                        <div className="table-responsive  mt-4">
                            <div className="d-flex justify-content-start w-100">
                                {brand}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;