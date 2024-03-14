import React from 'react'

const Button = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className='border p-1 text-center font-semibold bg-blue-900  text-gray-100 rounded-md ' >{label}</button>
    )
}

export default Button