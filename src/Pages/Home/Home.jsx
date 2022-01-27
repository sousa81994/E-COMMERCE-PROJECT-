import React from 'react';
import Newsletter from '../../components/Newsletter';
import Slider from '../../components/Slider';
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer';



function Home() {
    return (
        <>
            <Slider />
            <Categories />
            <Newsletter />
        </>

    )
}

export default Home;

