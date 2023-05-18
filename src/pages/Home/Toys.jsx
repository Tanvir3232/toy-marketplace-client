import React from 'react';

const Toys = () => {
    return (
        <div className='my-6'>
            <div className="tabs tabs-boxed md:flex justify-center">
                <div className='grid md:grid-cols-3 gap-2'>
                    <a className="tab font-bold text-gray-600 hover:text-gray-950 text-2xl px-4  bg-blue-300">Math Toys</a>
                    <a className="tab font-bold text-gray-600 hover:text-gray-950 text-2xl px-4  bg-blue-300 tab-active">Language Toys</a>
                    <a className="tab font-bold text-gray-600 hover:text-gray-950 text-2xl px-4  bg-blue-300">Science Toys</a>
                </div>
            </div>
        </div>
    );
};

export default Toys;