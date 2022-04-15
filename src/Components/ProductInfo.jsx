import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data/Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index'
import { NavLink } from 'react-router-dom';

const ProductInfo = () => {
    const [cartBtn, setCartBtn] = useState("Lägg till kundvagn")
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Lägg till kundvagn") {
            dispatch(addItem(product))
            setCartBtn("Ta bort från kundvagn")
        }
        else {
            dispatch(delItem(product))
            setCartBtn("Lägg till kundvagn")
        }
    }

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.image} alt={product.title} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr />
                        <h2 className="my-4">{product.price} kr</h2>
                        <p className="lead">{product.description}</p>
                        <button onClick={() => handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                        <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
                            Gå till kundvagn
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInfo
