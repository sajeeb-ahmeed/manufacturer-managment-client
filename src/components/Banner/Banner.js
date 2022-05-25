import React from 'react';
import "./Banner.css"
import { Link } from 'react-router-dom';
import plumber from '../../img/plumbing.png'
const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="cursor">
        <Link to='/all-products'>
          <img src={plumber} className=" img-fluid rounded-lg shadow-2xl" alt='' />
        </Link>

      </div>

    </div>
  );
};

export default Banner;