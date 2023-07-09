import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config/firebase'
const Login = () => {
  const {register,handleSubmit} = useForm()
  const navigate = useNavigate()
  function login(data){
    signInWithEmailAndPassword(auth,data.email,data.password).then((user)=>{
      console.log(user);
      setTimeout(()=>{
        navigate('/home')
      },3000)
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <>
         <div className='container  register'>
        <div className="row">
            <div className="col-12 col-md-8 mx-auto">
                <form className='form' onSubmit={handleSubmit(login)}>
                    <h1 align='center'>Logindan o'tish</h1>
                    
                    <input
                    {...register('email')}
                    type="email" className='form-control' placeholder='email' />
                    <br />
                    <input
                    {...register('password')}
                    type="password" className='form-control' placeholder='password' />
                    <br />
                    <button className='btn btn-primary w-100' type='submit'>Register</button>
                    <Link to={'/'} align='center'>Ro'yxatdan o'tish uchun shu linkni bosing</Link>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login