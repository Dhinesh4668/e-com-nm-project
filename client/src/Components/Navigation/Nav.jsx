import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import {MdLocalOffer, MdShoppingBag, MdHomeFilled} from 'react-icons/md'

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-body-secondary sticky-top '>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          DK 🛒 E-COMM
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* linking  */}
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/product'>
                Products  <MdShoppingBag size={25} />
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/offers'>
                Offers  <MdLocalOffer size={25}/>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/cart'>
                 Cart  <FaShoppingCart size={25} />
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/user'>
                user  <FaUserCircle size={25} />
              </Link>
            </li>
          </ul>
        </div>

        {/* search */}
        <div className='input-group' style={{
          width: 'auto'
        }}>
          <input
            type='text'
            className='form-control '
            placeholder='Search products'
          />
          <button className='btn btn-outline-secondary' type='button'>
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
