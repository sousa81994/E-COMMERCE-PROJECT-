import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';

const About = () => {
  return (
  <div>
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className=' fw-bold mb-4' style={{color: 'black'}}>About Us</h1>
                    <p className="lead mb-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ratione ipsa cupiditate, expedita laboriosam reiciendis, magni dignissimos ullam dolore corrupti at totam, voluptatem obcaecati quas a voluptas id magnam nam.
                    </p>
                    <NavLink to="/contact"><Button>Contact Us</Button></NavLink>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img src="https://www.susangreenecopywriter.com/wp-content/uploads/2013/01/photo-1518081461904-9d8f136351c2.jpg" alt="About Us" height="400px"/>
                </div>
            </div>
        </div>
  </div>
  )
};

export default About;
