import React from 'react'
import RegisterForm from '../Components/RegisterForm'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const log_navigate = useNavigate();

    const handleLogNavigate = () =>{
        log_navigate('/login')
    };
  return (
    <div className='justify-center text-center  ml-80 mr-80 h-screen border-2/3 border-dashed border-gray-600 rounded-xl shadow-lg shadow-blue-300 opacity-2 bg-gradient-to-r from-gray-100 to-gray-500'>
        <h1 className='text-5xl pt-20 font-bold text-blue-950 '>Register</h1>
        <div className='flex flex-col justify-between '>
        <RegisterForm/>
        <button
        type='submit' className='bg-slate-900 rounded-lg py-1 justify-center text-lg text-white px-10 hover:opacity-50 mt-3'>Register</button>
        </div>
        
        <div className='flex flex-row gap-3 text-center justify-center text-lg mt-3'>
            <p>Already have an account?</p>
            <button type='submit' className='hover:text-blue-950 font-bold'  onClick={handleLogNavigate}>Login</button>
        </div>
    </div>
  )
}
