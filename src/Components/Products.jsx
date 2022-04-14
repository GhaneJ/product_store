import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Product = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            setPosts(await response.json());
            setLoading(false);
        };
        loadPosts();
    }, []);

    return (
        <div>
            <div className="container py-6">
                <div className="row">
                <div className="row mt-5 mb-5">
                <h2 className=" text-center mb-3">De Senaste produkterna</h2>
                <div className="d-flex justify-content-center">
                    <input className="form-control w-50 mb-5"
                        type="text"
                        placeholder="Sök..."
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                </div>
                {loading ? (
                    <h4 className=" text-center">Loading ...</h4>
                ) : (
                    posts
                        .filter((value) => {
                            if (searchTitle === "") {
                                return value;
                            } else if (
                                value.title.toLowerCase().includes(searchTitle.toLowerCase())
                            ) {
                                return value;
                            }
                        })
                        .map((item) => (
                            <div className="col-md-3 mb-5">
                                <div className="card h-100 text-center p-4" key={item.id}>
                                    <img src={item.image} className="card-img-top" alt={item.title} height="200px" width="200px" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="lead">
                                            ${item.price}
                                        </p>
                                        <NavLink to={`/products/${item.id}`} className="btn btn-outline-dark">Se mer...</NavLink>
                                    </div>
                                </div>
                            </div>
                        )))}
            </div>
                </div>
            </div>
        </div>
    )
}

export default Product
