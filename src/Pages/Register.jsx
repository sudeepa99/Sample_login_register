import React from 'react'
import RegisterForm from '../Components/RegisterForm'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const log_navigate = useNavigate();

    const handleLogNavigate = () =>{
        log_navigate('/login')
    };
  return (
    <div className='justify-center h-screen text-center border-gray-600 border-dashed shadow-lg ml-80 mr-80 border-2/3 rounded-xl shadow-blue-300 opacity-2 bg-gradient-to-r from-gray-100 to-gray-500'>
        <h1 className='pt-20 text-5xl font-bold text-blue-950 '>Register</h1>
        <div className='flex flex-col justify-between '>
        <RegisterForm/>
        </div>
        
        <div className='flex flex-row justify-center gap-3 mt-3 text-lg text-center'>
            <p>Already have an account?</p>
            <button type='submit' className='font-bold hover:text-blue-950'  onClick={handleLogNavigate}>Login</button>
        </div>
    </div>
  )
}
