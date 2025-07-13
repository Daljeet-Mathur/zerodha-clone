import React from 'react';


function Team() {
    return (
        <>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-4 founderimg mt-5 pt-5'  >
                        <img src='images\images\nithinKamath.jpg' alt='img' />
                        <h3 className='mt-3'>Nithin Kamath</h3>
                        <h4>Founder, CEO</h4>
                    </div>
                    <div className='col-6'>
                        <div className='people-body'>
                            <h1 className='mb-5 pb-3'>People</h1>
                            <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                            <p>Playing basketball is his zen.</p>
                            <p>Connect on <a href='/'>Homepage</a>/<a href='/'>TradingQnA</a>/<a href='/'>Twitter</a> </p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Team;