import React from 'react';
import "./Pricing.css"

function Pricing() {
    return (
        <>
         <div className='container'>
            <div className='row'>
                <div className='col-4 pricingpage text-center'>
                     <img src='images\images\pricing0.svg'  style={{width: "250px"}} alt='img' />
                     <h1>Free equity delivery</h1>
                     <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className='col-4 pricingpage text-center'>
                     <img src='images\images\intradayTrades.svg' style={{width: "250px"}} alt='img'/>
                     <h1>Intraday and F&O trades</h1>
                     <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className='col-4 pricingpage text-center'>
                     <img src='images\images\pricing0.svg  ' style={{width: "250px"}} alt='img' />
                     <h1>Free direct MF</h1>
                     <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
         </div>
        </>
    );
}

export default Pricing;