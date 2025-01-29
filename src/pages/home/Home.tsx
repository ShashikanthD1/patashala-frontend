import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import banners from '../../assets/school_finder.jpg';

function Banner() {
    return (

        <section className='banner_sec'>
            <article className='container'>
                <div className='row align-ceter-row'>
                    <div className='col-sm-6'>
                        <figure className='left_side'>
                            <img src={banners} alt="School Finder Banner" />
                        </figure>
                    </div>
                    <div className='col-sm-6'>
                        <div className='banner_text_Search'>
                            <div className='banner_text'>
                                <h2>Finding the best school for your kid is now just a <Link to="#">click away!</Link></h2>
                            </div>
                            <div className='search_schools'>
                                <p>Find Schools Near Me</p>
                                <button className='search_btn'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Banner;


