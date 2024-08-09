import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dash_navigate = useNavigate();

    // const handleDashboardNavigate = () =>{
      
    // }
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            alert(response.data.message);
            // Handle successful login, e.g., navigate to a dashboard or save the token

            dash_navigate('/dashboard');
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An error occurred during login';
            setError(errorMessage);
        }
    };
  return (
    <div className='flex flex-col pt-5'>
      <form className='flex flex-col justify-center gap-4 px-60' onSubmit={handleLogin}>
        <div className='flex flex-col'>
            <label htmlFor='email' className='text-lg text-left'>Email</label>
                <input 
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='pl-2 text-white border border-gray-400 rounded-md bg-amber-200 hover:bg-green-800'
            />
        </div>
        <div className='flex flex-col'>
            <label htmlFor='password' className='text-lg text-left'>Password</label>
                <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='pl-2 text-white border border-gray-400 rounded-md bg-amber-200 hover:bg-green-800'
            />
        </div>
        <button
        type='submit'  className='justify-center px-10 py-1 mt-1 text-lg text-white rounded-lg bg-slate-900 hover:opacity-50'>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
