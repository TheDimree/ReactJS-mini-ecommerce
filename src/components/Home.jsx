import React, { useState, useEffect } from 'react'
import axios from 'axios';
export default function Home({ productData }) {

    const [productCategories, setProductCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/categories');
                // Assuming the response.data is an array of category names or IDs
                const categories = response.data.map(category => category.name); // Adjust according to actual response structure
                setProductCategories(categories);
                console.log(categories)
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        getCategories();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center text-[40px] font-bold mb-[30px]">Shop By Categories</h1>
            <div className="product-list row align-items-stretch home-product-list">
            {productCategories.map((value, index) => (
          <div key={index} className="col-xs-12 col-md-6 col-lg-4">
            <div className="card card--product">
              <div className="card-body">
                <img
                  src={`./img/${value}.jpg`}
                  className="card-img-top"
                  alt={value}
                  width="100%"
                />
                {/* {console.log(`./img/${value}.jpg`)} */}
                <div className="title">
                  <span>{value}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
            </div>
        </div>
    )
}