import React from 'react';

function Ticket() {
    return (
        <>
            <div className='container Ticket mb-5 pb-5'>
                <h1 className='tickethd mt-5'>To create a ticket, select a relevant topic</h1>
                <div className='row'>
                    <div className='col-4 mt-5'>
                        <h1 className='fs-5 mb-3'><i class="fa-regular fa-square-plus"></i>Account Opening</h1>
                        <a href="/"> Resident individual</a>
                        <a href="/"> Minor</a>
                        <a href="/"> Non Resident Indian (NRI)</a>
                        <a href="/"> Company, Partnership, HUF and LLP</a>
                        <a href="/"> Glossary</a>
                    </div>

                    <div className='col-4 mt-5'>
                        <h1 className='fs-5 mb-3'><i class="fa-solid fa-user-plus"></i>Your Zerodha Account</h1>
                        <a href="/">Your Profile</a>
                        <a href="/">Account modification</a>
                        <a href="/">Client Master Report (CMR) and Depository Participant (DP)</a>
                        <a href="/">Nomination</a>
                        <a href="/">Transfer and conversion of securities</a>
                    </div>

                    <div className='col-4 mt-5'>
                        <h1 className='fs-5 mb-3'><i class="fa-solid fa-user-plus"></i>Kite</h1>
                        <a href='/'>IPO</a>
                        <a href='/'>Trading FAQs</a>
                        <a href='/'>Margin Trading Facility (MTF) and Margins</a>
                        <a href='/'>Charts and orders</a>
                        <a href='/'> Alerts and Nudges</a>
                        <a href='/'> General</a>
                    </div>

                    <div className='col-4 mt-5'>
                        <h1 className='fs-5 mb-3'><i class="fa-solid fa-user-plus"></i>Funds</h1>
                        <a href='/'>Add money</a>
                        <a href='/'>Withdraw money</a>
                        <a href='/'>Add bank accounts</a>
                        <a href='/'>eMandates</a>
                    </div>

                    <div className='col-4 mt-5'>
                        <h1 className='fs-5 mb-3'><i class="fa-solid fa-user-plus"></i>Console</h1>
                        <a href='/'>Portfolio</a>
                        <a href='/'>Corporate actions</a>
                        <a href='/'>Funds statement</a>
                        <a href='/'>Reports</a>
                        <a href='/'>Profile</a>
                        <a href='/'>Segments</a>
                    </div>

                    <div className='col-4 mt-5'>
                        <h1 className='fs-5 mb-3'><i class="fa-solid fa-user-plus"></i>Coin</h1>
                       <a href='/'> Mutual funds</a>
                       <a href='/'> National Pension Scheme (NPS)</a>
                       <a href='/'> Fixed Deposit (FD)</a>
                       <a href='/'> Features on Coin</a>
                       <a href='/'> Payments and Orders</a>
                       <a href='/'> General</a>
                    </div>



                </div>
            </div>
        </>
    );
}

export default Ticket;