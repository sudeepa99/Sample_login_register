import React, {useState} from 'react'
import axios from 'axios';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            alert(response.data.message);
            // Handle successful login, e.g., navigate to a dashboard or save the token
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An error occurred during login';
            setError(errorMessage);
        }
    };
  return (
    <div className='flex flex-col pt-5'>
      <form className='flex flex-col gap-4 justify-center px-60' onSubmit={handleLogin}>
        <div className='flex flex-col'>
            <label htmlFor='email' className='text-left text-lg'>Email</label>
                <input 
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='bg-amber-200 border border-gray-400 rounded-md hover:bg-green-800 text-white pl-2'
            />
        </div>
        <div className='flex flex-col'>
            <label htmlFor='password' className='text-left text-lg'>Password</label>
                <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-amber-200 border border-gray-400 rounded-md hover:bg-green-800 text-white pl-2'
            />
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
