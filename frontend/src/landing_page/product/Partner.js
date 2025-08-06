import React from 'react';

function Partner() {
    return (<>

        <div className='container partner'>
            <div className='text-center'>
                <h1>The Zerodha Universe</h1>
                <p className='mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row text-center'>
                <div className='col-4 parnter-body'>
                    <a href='/'>
                        <img src='images\images\zerodhaFundhouse.png' alt='img' />
                        <p>Our asset management venturethat is creating simple and transparent indexfunds to help you save for your goals.</p>
                    </a>
                </div>

                <div className='col-4 parnter-body'>
                    <a href='/'>
                        <img src='images\images\sensibullLogo.svg' style={{height:"40px"}} alt='img'/>
                        <p>Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </a>
                </div>

                <div className='col-4 parnter-body'>
                    <a href='/'>
                        <img src='images\images\tijori.svg' alt='img'/>
                        <p>Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.</p>
                    </a>
                </div>

                <div className='col-4 parnter-body'>
                    <a href='/'>
                        <img src='images\images\streakLogo.png' alt='img'/>
                        <p>Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.</p>
                    </a>
                </div>

                <div className='col-4 parnter-body'>
                    <a href='/'>
                        <img src='images\images\smallcaseLogo.png' alt='img' />
                        <p>Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.</p>
                    </a>
                </div>

                <div className='col-4 parnter-body'>
                    <a href='/'>
                        <img src='images\images\dittoLogo.png' alt='img'/>
                        <p>Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.</p>
                    </a>
                </div>
                 <div className='mt-5 '>
                    <button type="button" class="btn btn-primary cs-btn px-4 text-center fs-5">Sign up for free</button>
                    </div>
            </div>
           
        </div>
    </>);
}

export default Partner;