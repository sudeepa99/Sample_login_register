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
        <form className='flex flex-col gap-4 justify-center px-60' onSubmit={handleRegister}>
            <div className='flex flex-col'>
                <label htmlFor='name' className='text-left text-lg'>Name </label>
                <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='bg-amber-200 border border-gray-400 rounded-md hover:bg-green-800 text-white pl-2'
                />
                
            </div>
            <div className='flex flex-col'>
                <label htmlFor='address' className='text-left text-lg'>Address </label>
                <input
                type='text'
                id='address'
                name='address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className='bg-amber-200 border border-gray-400 rounded-md hover:bg-green-800 text-white pl-2'
                />      
            </div>
            <div className='flex flex-col'>
                <label htmlFor='email' className='text-left text-lg'>Email</label>
                <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
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
                onChange={(e) =>setPassword(e.target.value)}
                className='bg-amber-200 border border-gray-400 rounded-md hover:bg-green-800 text-white pl-2'
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='confirm_passsword' className='text-left text-lg'>Confirmation Password</label>
                <input
                type='password'
                id='confirm_password'
                name='confirm_password'
                value={confirm_password}
                onChange={(e) =>setConfirmPassword(e.target.value)}
                className='bg-amber-200 border border-gray-400 rounded-md hover:bg-green-800 text-white pl-2'
                />
            </div>
            {error && <p>{error}</p>}
            
        </form>
    </div>
  )
}
