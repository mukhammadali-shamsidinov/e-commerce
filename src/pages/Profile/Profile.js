import React, { useEffect, useState } from 'react'
import './Profile.css'
import Navbar from '../../components/Navbar/Navbar'
const Profile = () => {
    const [x] = useState(JSON.parse(localStorage.getItem('user')))
    useEffect(()=>{
        console.log(x);
    },[])
  return (
    <div className='profile'>
        <Navbar />
 <div className="container mt-5">
  <div className="row">
    <div className="col-md-8 mx-auto offset-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{x.displayName}</h5>
          <img
            src={x.photoURL}
            className="img-fluid mb-3 w-50"
            alt="User Profile Picture"
          />
          <p className="card-text">Name: {x.displayName}</p>
          <p className="card-text">Email: {x.email}</p>
          <p className="card-text">createdAt {x.createdAt}</p>
          <a href="#" className="btn btn-primary">
            Profile
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Profile