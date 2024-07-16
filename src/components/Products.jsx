import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem'
import Category from './Category';

export default function Products() {

    const [finalCategory, setFinalCategory] = useState([]);
    const [finalProducts, setFinalProducts] = useState([]);
    const [categoryName, setCategoryName] = useState(''); //for selecting the category.
  
    const getCategory = () => {
        axios.get('https://dummyjson.com/products/categories')  //It is a promise.
            .then((res) => res.data) //AXIOS always returns Data in the "data" key.
            .then((data) => {
                setFinalCategory(data);
                // console.log("finalCategory sent:", data)
            })
    }

    const getProducts = function () {
        axios.get('https://dummyjson.com/products')
            .then((response) => { return (response.data) })
            .then((data) => {
                setFinalProducts(data.products);
                // console.log(data.products);
            })
    }


    // This hook is called automatically when the page is loaded and blank array dependency is will load it only once because data is available.
    useEffect(() => {
        getCategory();  //You can also write this function code directly here. and it is called only once asap the DOM is ready.
        getProducts();
    }, [])

    useEffect(() => {
        if (categoryName !== "")
            axios.get(`https://dummyjson.com/products/category/${categoryName}`)
                .then((response) => { return (response.data) })
                .then((data) => {
                    setFinalProducts(data.products);
                    // console.log(`products by ${categoryName}: `, finalProducts);
                })
    }, [categoryName]) //Executed automatically on start and re-render the DOM whenever categoryName is updated.

    const pItems = finalProducts.map((value, index) => {
                        return(
                            <ProductItem key={value.id} productData={value}/>
                        )
                    })

        return (
            <div className='py-[40x]'>
                <div className='max-w-[1320px] mx-auto'>
                    <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
                    <div className='row align-items-stretch'>
                        <div className='col-xs-12 col-lg-4'>
                            <Category finalCategory={finalCategory} setCategoryName={setCategoryName} />
                        </div>
                        <div className='col-xs-12 col-lg-8'>
                        <div className='product-list row align-items-stretch'>
                                {finalProducts.length > 0 ? pItems : "No Product Found!"}                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }