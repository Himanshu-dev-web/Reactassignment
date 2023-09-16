import React, { useState } from 'react'
import './Navbar.css';
import { Car,Line11,Insta,Linkdin,Fb,Twitter,Hamburgur
  , Star1,Cross } from "../App"
const Navbar = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
    console.log(!isCollapsed);
  };

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSubMenu = (item) => {
    if (item.child) {
      setIsSubMenuOpen(!isSubMenuOpen);
      setSelectedItem(selectedItem === item.id ? null : item.id);
    }
  };

  const renderSubMenu = (submenu) => {
    return (
      <ul className={`sub-menu ${isSubMenuOpen ? 'open' : ''}`}>
        {submenu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  };
  
  const navbarData = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    {
      name: 'OUR PRODUCTS',
      id: 'p1',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p1' },
        { name: 'Product 3', id: 'p1' },
        { name: 'Product 4', id: 'p1' },
      ],
    },
    { name: 'CONTACT US', id: 'contact' },
  ];


  return (
    <>
    <div className='nav'>
   
   <div className='social-section'>
        <div className='social-section-one'>
          <a><span><img src={Car}  alt="" /></span>Free Delivery</a>
          <a className='line'><span><img src={Line11} alt="" /></span></a>
          
          <a>Return Policy</a>
        </div>
        <div className='social-section-two'>
          <a>Login</a>
          <a>Follow Us</a>
          <a><span><img src={Insta} alt="" /></span></a>
          <a><span><img src={Linkdin} alt="" /></span></a>
          <a><span><img src={Fb} alt="" /></span></a>
          <a><span><img src={Twitter} alt="" /></span></a>
          
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
      <hr />
      <img className='star' src={Star1} alt="" />
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

    <div className={`mobile-nav `}>
      <div className='title-part'>
          <p className=''>ShopKart</p>
          <div className='title-part-wb'> 
          {
            isCollapsed ? (
              <img onClick={() => toggleNavbar()} src={Hamburgur} alt="" />
            ):
            (
              <img onClick={() => toggleNavbar()} src={Cross} alt="" />
            )
          }
          </div>
      </div>

       {/* <img src="/src/asset/topnav/Group 16.svg" alt="" /> */}

{
  !isCollapsed ? (
    <div className="vertical-menu">
      <ul className="menu-list">
        {navbarData.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleSubMenu(item)}
            className={selectedItem === item.id ? 'selected' : ''}
          >
            {item.name}
            {item.child && selectedItem === item.id && renderSubMenu(item.child)}
          </li>
        ))}
      </ul>
    </div>
  ):(
    <>
      
    </>
  )
}
       
    </div>

    

    </>
  )
}

export default Navbar