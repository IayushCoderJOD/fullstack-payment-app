import React from 'react';

const AppBar = () => {
    return (
        <div style={{
            background:
                'rgb(10, 0, 89)',
            backgroundImage:
                'linear-gradient(90deg, rgba(10, 0, 89, 1) 0%, rgba(111, 172, 190, 1) 96%, rgba(0, 212, 255, 1) 100%)',
        }} className="shadow h-14 flex justify-between "
        >
            <div className="pt-2 h-full ml-4 text-2xl font-semibold">
                <span className="text-blue-200 text-3xl font-bold">JebSee</span>{' '}
                <span className='text-white'>Wallets</span>
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    Hello
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        U
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppBar;
