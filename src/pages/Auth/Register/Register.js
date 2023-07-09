import React from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from '../../../config/firebase.js'
const Register = () => {
  const {register,handleSubmit} = useForm()
  const navigate = useNavigate()

  function save(data){
console.log(data);
createUserWithEmailAndPassword(auth,data.email,data.password).then((user)=>{
  user.user.displayName = data.username
  user.user.photoURL = data.avatar
  Swal.fire({
    icon: 'success',
    title: 'Ro\'yxatdan o\'tdingiz',
    showConfirmButton: false,
    timer: 1500
  })
  let use = user.user
  console.log(user);
  localStorage.setItem('user',JSON.stringify(use))
  setTimeout(()=>{
    navigate('/home')
  },3000)
}).catch(err=>{
  console.log(err.message);
})

  }
  return (
    <div className='container  register'>
        <div className="row">
            <div className="col-12 col-md-8 mx-auto">
                <form onSubmit={handleSubmit(save)}>
                    <h1 align='center'>Ro'yxatdan o'tish</h1>
                    <input
                    {...register('avatar',{
                      required:true,
                      minLength:4
                    })}
                    type="text" className='form-control' placeholder='avatar' />
                    <br />
                    <input
                    {...register('username',{
                      required:true,
                      minLength:4
                    })}
                    type="text" className='form-control' placeholder='username' />
                    <br />
                    <input 
                    {...register('email')}
                    type="email" className='form-control' placeholder='email' />
                    <br />
                    <input
                    {...register('password')}
                    type="password" className='form-control' placeholder='password' />
                    <br />
                    <button className='btn btn-primary w-100'>Register</button>
                    <Link to={'/login'} align='center'>Login qilish uchun shu linkni bosing</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register