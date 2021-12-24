import React from 'react';
import Header from '../header/Header';
import ShoopJacket from '../ShoopJacket/ShoopJacket/ShoopJacket';
import HomeAppliances from '../HomeAppliances/HomeAppliances/HomeAppliances';

import Televisions from '../Televisions/Televisions/Televisions';
import FlashDeals from '../FlashDeals/FlashDeals';
import SmartPhones from '../SmartPhones/SmartPhones';
import Laptops from '../Laptops/Laptops';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import OurBrands from '../OurBrands/OurBrands';
import OurResponsibility from '../OurResponsibility/OurResponsibility';

const Home = () => {

    return (

        <>
            <Header />
            {/* <ProductBanner /> */}
            {/* <Products /> */}
            {/* <PopularProduct /> */}
            {/* <TrendingProducts /> */}

            <FlashDeals />
            <Category />
            <ShoopJacket />
            <SmartPhones />
            <Laptops />
            <HomeAppliances />
            <Televisions />
            <OurBrands />
            <OurResponsibility />
            <Footer />
        </>
    );
};

export default Home;