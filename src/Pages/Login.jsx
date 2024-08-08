import React from 'react'
import LoginForm from '../Components/LoginForm'
import Register from './Register'
import { useNavigate } from 'react-router-dom'


export default function Login() {

    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/register/')

    };
    return (
    
    <div className='justify-center text-center  ml-80 mr-80 h-screen border-2/3 border-dashed border-gray-600 rounded-xl shadow-lg shadow-blue-300 opacity-2 bg-gradient-to-r from-gray-100 to-gray-500' >
        <h1 className='text-5xl pt-20 font-bold text-blue-950 '>Login</h1>
        <div className='flex flex-col justify-between '>
        <LoginForm/>
        <button className='mt-2 text-end mr-60  text-sm hover:text-red-600'  type='submit'>Forget Password?</button>
        <button
        type='submit' className='bg-slate-900 rounded-lg py-1 justify-center text-lg text-white px-10 hover:opacity-50 mt-1'>Login</button>
        </div>
        
        <div className='flex flex-row gap-3 text-center justify-center text-lg mt-3'>
            <p>Don't have an account?</p>
            <button type='submit' className='hover:text-blue-950 font-bold' onClick={handleNavigate}>Register</button>
        </div>
      
    </div>
  )
}
