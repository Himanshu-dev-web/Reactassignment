import React, { useState } from 'react'
import './Navbar.css';

const Navbar = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const navbarData = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products',
      id: 'product',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ],
    },
    { name: 'Contact US', id: 'contact' },
  ];


  return (
    <>
    <div className='nav'>
   
   <div className='social-section'>
        <div className='social-section-one'>
          <a><span><img src="/src/asset/topnav/Layer 156.svg" alt="" /></span>Free Delivery</a>
          <a className='line'><span><img src="/src/asset/Line 11.png" alt="" /></span></a>
          
          <a>Return Policy</a>
        </div>
        <div className='social-section-two'>
          <a>Login</a>
          <a>Follow Us</a>
          <a><span><img src="/src/asset/topnav/Group 6.svg" alt="" /></span></a>
          <a><span><img src="/src/asset/topnav/Vector (1).svg" alt="" /></span></a>
          <a><span><img src="/src/asset/topnav/" alt="" /></span></a>
          <a><span><img src="/src/asset/topnav/In.svg" alt="" /></span></a>
        </div>
   </div>
   
   
    <div className='title-part'>
        <p className=''>ShopKart</p>
        <div className='title-part-wb'> 
          <p>Wishlist (0)</p>
          <p>BaG (0)</p>
        </div>
    </div>
    <div className='nav-hr'>
      <img className='star' src="/src/asset/Star 1.png" alt="" />
      <img className='line' src="/src/asset/Line17.png" alt="" />
      {/* <hr /> */}
    </div>
     <div className="navbar">
      {navbarData.map((item) =>
        item.child ? (
          <div className="dropdown" key={item.id}>
            <button className="dropbtn">{item.name}</button>
            <div className="dropdown-content">
              {item.child.map((childItem) => (
                <a key={childItem.id} href={`#${childItem.id}`}>
                  {childItem.name}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <a key={item.id} href={`#${item.id}`}>
            {item.name}
          </a>
        )
      )}
    </div>

    </div>
    </>
  )
}

export default Navbar