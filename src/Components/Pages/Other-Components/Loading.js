import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <progress className="progress w-56"></progress>
            <h1 className='text-xl font-bold text-black mt-4'>Please Wait...</h1>
        </div>
    );
};

export default Loading;