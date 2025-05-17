import React from 'react';
import { BsLayersFill } from 'react-icons/bs';

function Inventory() {
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>INVENTORY</h3>
            </div>
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>TOTAL ITEMS</h3>
                        <BsLayersFill className='card_icon' />
                    </div>
                    <h1>500</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>LOW STOCK</h3>
                        <BsLayersFill className='card_icon' />
                    </div>
                    <h1>25</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>OUT OF STOCK</h3>
                        <BsLayersFill className='card_icon' />
                    </div>
                    <h1>10</h1>
                </div>
            </div>
            {/* Add your inventory management content here */}
        </main>
    );
}

export default Inventory;