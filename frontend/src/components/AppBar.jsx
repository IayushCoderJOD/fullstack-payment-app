import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLoggedOut } from '../assets/Slices';
import { useDispatch } from 'react-redux';

const AppBar = () => {
    const [showLogout, setShowLogout] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div style={{
            background:
                'rgb(10, 0, 89)',
            backgroundImage:
                'linear-gradient(90deg, rgba(10, 0, 89, 1) 0%, rgba(111, 172, 190, 1) 96%, rgba(0, 212, 255, 1) 100%)',
        }} className="shadow h-14 pr-2 flex justify-between "
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
                    <div onMouseOut={() => {
                        setTimeout(() => {
                            setShowLogout(false)
                        }, 3000)

                    }} onMouseOver={() => {
                        setShowLogout(true)
                    }} className="flex flex-col justify-center h-full text-xl">
                        U
                    </div>
                    {showLogout && <div onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/signup")
                        dispatch(userLoggedOut())
                    }} className='bg-black text-white cursor-pointer rounded-lg align-middle text-center flex items-center p-3 absolute top-14 right-1 text-lg hover:bg-gray-800'>
                        Logout
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default AppBar;
