import { useState, useEffect } from 'react'
import './Product.css'

function Product({addToCart }) {
  const [product, setProduct] = useState([]) 
  
  useEffect(()=>{
    const productFetch = async()=>{
      try {
        const productRes = await fetch('https://fakestoreapi.com/products') 
        const produtcsJson = await productRes.json() 
        setProduct(produtcsJson)
        console.log(produtcsJson)
      } catch (error) {
        console.error(error)
      }
    }
    productFetch();
  })

  const renderStars = (rating) =>{
    const fullstars = Math.floor(rating) 
    const halfstar = rating % 1 >= 0.5 ? 1:0 
    const emptystars = 5 - fullstars - halfstar 
    return(
      <span className='rating'>
        {'★'.repeat(fullstars)}
        {halfstar ? '⭐' : ''}
        {'☆'.repeat(emptystars)}
      </span>
    )
  }

  
  
  const handleImageError = (e) =>{
    e.target.src= 'https://placehold.co/600X400'
  }
  return (
    <div className='product-container'>
      <h1 className='heading-element'>Product Available</h1>
      
      <div >
       {product.length > 0 ? ( 
        product.map((item)=>(
          <div key={item.id} className='product-card'>
            <div className='imgBox'>
            <img src={item.image} onerror={handleImageError} className='image-item' alt="Image not found"/>
            </div>
            <div className='content-box'>
            <h3 className='item-heading'>{item.title}</h3>
            <p className='item-para'>{item.description}</p> 
            <p className='item-price'>Price: {item.price}</p> 
            <p className='item-rating'>Rating: {renderStars(item.rating.rate)} ({item.rating.rate})</p>
            <p className='item-review'>Reviews: {item.rating.count}</p>
             <button className='button-element' onClick={() => addToCart(item)}>Add Cart</button>
            </div>
          </div>
        ))
       ): (
        <p> Out of stock</p>
       )}

      </div>
    </div>
  )
}

export default Product;
