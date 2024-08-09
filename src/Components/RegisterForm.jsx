import React,{useState} from 'react'
import axios from 'axios';

export default function RegisterForm() {
    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [address, setAddress] =useState('');
    const [password, setPassword] =useState('');
    const [confirm_password, setConfirmPassword] =useState('');
    const [error, setError] = useState('');


    const handleRegister = async(e)=>{
        e.preventDefault();

        if(password!==confirm_password){
            setError('Passwords do not match');
            return;
        }

        try{
            const response = await axios.post('http://localhost:5000/api/users/register',
                {name,
                address,
                email,
                password,
                confirm_password,
                }
            );
            alert(response.data.message);
        }catch(error){
            const errorMessage = error.response?.data?.message || 'An error occurred during registration';
            setError(errorMessage);
        }

    };
    
  return (
    <div className='flex flex-col pt-5'>
        <form className='flex flex-col justify-center gap-4 px-60' onSubmit={handleRegister}>
            <div className='flex flex-col'>
                <label htmlFor='name' className='text-lg text-left'>Name </label>
                <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='pl-2 text-white border border-gray-400 rounded-md bg-amber-200 hover:bg-green-800'
                />
                
            </div>
            <div className='flex flex-col'>
                <label htmlFor='address' className='text-lg text-left'>Address </label>
                <input
                type='text'
                id='address'
                name='address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className='pl-2 text-white border border-gray-400 rounded-md bg-amber-200 hover:bg-green-800'
                />      
            </div>
            <div className='flex flex-col'>
                <label htmlFor='email' className='text-lg text-left'>Email</label>
                <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
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
                onChange={(e) =>setPassword(e.target.value)}
                className='pl-2 text-white border border-gray-400 rounded-md bg-amber-200 hover:bg-green-800'
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='confirm_passsword' className='text-lg text-left'>Confirmation Password</label>
                <input
                type='password'
                id='confirm_password'
                name='confirm_password'
                value={confirm_password}
                onChange={(e) =>setConfirmPassword(e.target.value)}
                className='pl-2 text-white border border-gray-400 rounded-md bg-amber-200 hover:bg-green-800'
                />
            </div>
            <button
            type='submit' className='justify-center px-10 py-1 mt-3 text-lg text-white rounded-lg bg-slate-900 hover:opacity-50'>Register</button>
            {error && <p>{error}</p>}
            
        </form>
    </div>
  )
}
