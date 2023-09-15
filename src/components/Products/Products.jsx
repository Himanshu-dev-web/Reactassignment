import React, { useEffect, useRef, useState } from 'react'
import "./Products.css"
import {Productbtn,Prodstar,Leftarrow,Rightarrow} from "../App"

const Products = () => {


  
const [categories, setCategories] = useState([]);
const [products, setProducts] = useState([]);


const fetchCategories = async() => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setCategories(jsonData); // Update state with the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    // console.log(categories);
} 


const fetchProducts = async() => {
  try {
    const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json();
    console.log(jsonData);

    setProducts(jsonData); // Update state with the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
   console.log(products[0]);
} 

useEffect(() => {
    fetchCategories();
    fetchProducts();
}, []);



const cardContainerRef = useRef(null);

const handleScroll = (direction) => {
  const container = cardContainerRef.current;
  if (container) {
    const scrollAmount = 300; // Adjust the scroll amount as needed
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
      container.scrollLeft += scrollAmount;
    }
  }
};
  return (
    <>
        <div className='products-container' id='p1'>

              <div className='top-div'> 
                  <div className='top-div-title'>
                    <h2>New Products</h2>
                    <hr />
                    <img className='Prodstar' src={Prodstar} alt="" />
                  </div>
                  <div className='top-div-arrow'>
                    <button onClick={() => handleScroll('left')} href=""><span><img src={Rightarrow} alt="" /></span></button>
                   <button onClick={() => handleScroll('right')} href=""><span><img src={Leftarrow} alt="" /></span></button>
                  </div>

              </div>

              <div className='bottom-div'>

              <div className='categories'>
                <p>Apparel</p>
                 <ul className='categories-ul'>
                    {categories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
                 </ul>
              </div>
              <div className='categories-mobile'>
                <p>Apparel</p>
                 <ul className='categories-ul'>
                    {categories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
                 </ul>
              </div>
             
              <div className='Products-list'>
                    <div ref={cardContainerRef} className="card-container">
                        {products.map((card) => (
                          <div key={card.id}  className="card-outer">
                          <div className="card">
                            <img className='card-btn' src={Productbtn} alt="" />
                            <img className='prod-img' src={card.image} alt="" />
                          </div>
                          <p>{card.title}</p>
                          <p>Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</p>
                          <p>${card.rating.rate}</p>
                          </div>
                        ))}
                      </div>
              </div>




                  <div className='top-div-arrow'>
                  <button onClick={() => handleScroll('left')} href=""><span><img className='l-arr' src={Rightarrow} alt="" /></span></button>
                   <button onClick={() => handleScroll('right')} href=""><span><img className='r-arr'  src={Leftarrow} alt="" /></span></button>
                      </div> 
                  </div>
        </div>
    </>
  )
}

export default Products