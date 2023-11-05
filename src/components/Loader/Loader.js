import React from 'react';

const Loader = () => {
    return (
        <div className='relative min-h-screen'>
            <span className="loading loading-ring loading-lg absolute top-[45%] left-[45%]"></span>
        </div>
    );
};

export default Loader;