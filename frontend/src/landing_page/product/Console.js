import React from 'react';

function Console() {
    return ( 
        <>
         <div className='container kite'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-4'>
                        <h1>Console</h1>
                        <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                        <a href='/' >Learn more  <i class="fa-solid fa-arrow-right-long ms-2" ></i></a>
                    </div>
                    <div className='col-8  text-end'>
                        <img src='images\images\console.png' alt='imga' />
                    </div>
                </div>
            </div>
        </>
     );
}

export default Console;