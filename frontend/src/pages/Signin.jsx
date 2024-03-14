import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    return (
        <div style={{
            background:
                'rgb(10, 0, 89)',
            backgroundImage:
                'linear-gradient(90deg, rgba(10, 0, 89, 1) 0%, rgba(111, 172, 190, 1) 96%, rgba(0, 212, 255, 1) 100%)',
        }} className=' w-screen h-screen flex justify-center'>
            <div className='flex flex-col justify-center'>
                <div className='bg-white w-[350px] rounded-lg shadow-2xl text-center p-3 h-fit'>
                    <Heading label={"Sign in"} />
                    <SubHeading subLabel={"Enter your information to create an account"} />
                    <InputBox onChange={(e) => {
                        setUsername(e.target.value)
                    }} label={"Email"} placeholder={"ayush@example.com"} />
                    <InputBox onChange={(e) => {
                        setPassword(e.target.value)
                    }} label={"Password"} placeholder={"1232424"} />
                    <div className='pt-4' >
                        <Button onClick={async () => {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                                username,
                                password
                            })
                            localStorage.removeItem("token")
                            localStorage.setItem("token", response.data.token)
                            navigate("/dashboard")

                        }} label={"Sign in"} />
                    </div>
                    <BottomWarning label={"Doesn't have an account?"} buttonText={"signup"} to={"/signup"} />
                </div>
            </div>
        </div>
    )
}

export default Signin