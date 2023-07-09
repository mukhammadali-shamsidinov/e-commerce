import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Register from './pages/Auth/Register/Register'
import Main from './pages/Main/Main'
import Details from './pages/Details/Details'
import Contact from './pages/Contact/Contact'
import Login from './pages/Auth/Login/Login'
import {addDoc, collection, onSnapshot} from 'firebase/firestore'
import { db } from './config/firebase'
import Basket from './pages/Basket/Basket'
import { v4 } from 'uuid'
import Swal from 'sweetalert2'
import Profile from './pages/Profile/Profile'

export const Context = createContext()
const App = () => {
const [products,setProducts] = useState([])
const [details,setDetails] = useState(null)
const [isDis,setIsDis] = useState(false)
const navigate = useNavigate()
function detailsPage(item){
  console.log(item);
  setDetails(item)
    navigate(`/details/${item.id}`)
 
}

function addToBasket(data){
 let x = JSON.parse(localStorage.getItem('user'))

  console.log(x.uid);
  addDoc(collection(db,`${x.uid}`),{
    title:data.title,
    image:data.image,
    price:data.price
  }).then(()=>{
    console.log('success');
    Swal.fire({
      icon:'success',
      title:"Added to Basket"
    })
    
  }).catch(err=>{
    Swal.fire({
      icon:'error',
      title:"not Added to Basket"
    })
  })
}

useEffect(()=>{
  onSnapshot(collection(db,'products'),(snapshot)=>{
    setProducts(snapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
  })
},[])
  return (
    <Context.Provider value={{products,detailsPage}}>
    <div className='app'>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Main />} />
        <Route path='/details/*' element={<Details details={details} addToBasket={addToBasket}  />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
    </Context.Provider>

  )
}

export default App