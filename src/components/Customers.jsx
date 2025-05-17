import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';

function Customers() {
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>CUSTOMERS</h3>
            </div>
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>TOTAL CUSTOMERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>150</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>NEW THIS MONTH</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>15</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ACTIVE CUSTOMERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>120</h1>
                </div>
            </div>
            {/* Add your customers table or other content here */}
        </main>
    );
}

export default Customers;