import React from 'react';


function Trust() {
    return (
        <>
            <div className='container trust'>
                <div className='row justify-content-between'>
                    <div className='col-5'>
                        <h1>Trust with confidence</h1>
                        <div className='trust-body'>
                            <h3>Customer-first always</h3>
                            <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                        </div>
                        <div className='trust-body'>
                            <h3>No spam or gimmicks</h3>
                            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <span>Our philosophies.</span></p>
                        </div>
                        <div className='trust-body'>
                            <h3>The Zerodha universe</h3>
                            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </div>
                        <div className='trust-body'>
                            <h3>Do better with money</h3>
                            <p>With initiatives like <span>Nudge</span> and <span>Kill Switch</span>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        </div>
                    </div>
                    <div className='col-6 mt-5 pt-4 text-center'>
                        <img src='\images\images\ecosystem.png' style={{ width: "100%" }} alt='img' />
                        <div>
                            <a href='/' className='me-5 mt-5'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                            <a href='/' className='mt-5'>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5 mb-5'>
                    <img src='images\images\pressLogos.png'  alt='img' />
                </div>

            </div>
        </>
    );
}

export default Trust;