import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const Signup = () => {
    return (
        <div style={{
            background:
                'rgb(10, 0, 89)',
            backgroundImage:
                'linear-gradient(90deg, rgba(10, 0, 89, 1) 0%, rgba(111, 172, 190, 1) 96%, rgba(0, 212, 255, 1) 100%)',
        }} className=' w-screen h-screen flex justify-center'>
            <div className='flex flex-col justify-center'>
                <div className='bg-white w-[350px] rounded-lg shadow-2xl text-center p-3 h-fit'>
                    <Heading label={"Sign up"} />
                    <SubHeading subLabel={"Enter your information to create an account"} />
                    <InputBox label={"First Name"} placeholder={"Ayush"} />
                    <InputBox label={"Last Name"} placeholder={"Tyagi"} />
                    <InputBox label={"Email"} placeholder={"ayush@example.com"} />
                    <InputBox label={"Password"} placeholder={"1232424"} />
                    <div className='pt-4' >
                        <Button label={"Sign up"} />
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Signin"} to={"/signin"} />
                </div>
            </div>
        </div>
    )
}

export default Signup