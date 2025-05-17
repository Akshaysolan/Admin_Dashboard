import React from 'react';
import { BsBoxSeam } from 'react-icons/bs';

function Products() {
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>PRODUCTS</h3>
            </div>
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>TOTAL PRODUCTS</h3>
                        <BsBoxSeam className='card_icon' />
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>OUT OF STOCK</h3>
                        <BsBoxSeam className='card_icon' />
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>LOW STOCK</h3>
                        <BsBoxSeam className='card_icon' />
                    </div>
                    <h1>8</h1>
                </div>
            </div>
            {/* Add your products table or other content here */}
        </main>
    );
}

export default Products;