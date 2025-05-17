import React from 'react';
import { BsCollectionFill } from 'react-icons/bs';

function Categories() {
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>CATEGORIES</h3>
            </div>
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>TOTAL CATEGORIES</h3>
                        <BsCollectionFill className='card_icon' />
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ACTIVE CATEGORIES</h3>
                        <BsCollectionFill className='card_icon' />
                    </div>
                    <h1>10</h1>
                </div>
            </div>
            {/* Add your categories table or other content here */}
        </main>
    );
}

export default Categories;