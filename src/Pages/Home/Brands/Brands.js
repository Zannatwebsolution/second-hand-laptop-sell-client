import React from 'react';
import Brand from '../Brand/Brand';

const Brands = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className="grid gap-5 mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Brand></Brand>
            </div>
        </div>
    );
};

export default Brands;