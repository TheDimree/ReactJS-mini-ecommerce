import React from 'react'

export default function category({finalCategory, setCategoryName}) {
  // console.log("finalCategory:", finalCategory)
  const productCategories = finalCategory.map(function (value, index) {
    return (
      <li onClick={()=> setCategoryName(value.name)} key={index} className='bg-[#ccc] p-[7px] cursor-pointer text-[18px] font-serif font-[500] mb-2'>{value.name}</li> 
    )
  });
  
  return (
    <div>
      <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
      <ul>
      {productCategories}
      </ul>
    </div>
  )
}