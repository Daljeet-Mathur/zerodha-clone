import React from 'react';
import Hero from './Hero';
import Kite from './Kite';
import Console from './Console';
import Coin from './Coin';
import Connect from './Connect ';
import Mobile from './Mobile';
import Partner from './Partner';


import "./Product.css"


function Products() {
    return (
        <>
            <Hero />
            <Kite />
            <Console />
            <Coin />
            <Connect />
            <Mobile />
            <Partner/>
        </>
    );
}

export default Products;