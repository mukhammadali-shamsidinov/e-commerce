import React, { useEffect, useState } from 'react'
import './Basket.css'
import Navbar from '../../components/Navbar/Navbar'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../config/firebase'
import StripeConnect from '../../components/Stripe/Stripe'
const Basket = () => {
    const [basket,setBasket] = useState([])
    const [cost,setCost] = useState(0)
    const [x] = useState(JSON.parse(localStorage.getItem('user')))
 
    const deleteUser = async (userId) => {
        try {
          await deleteDoc(doc(db, x.uid, userId));
          console.log("Document successfully deleted!" + x.uid);
        } catch (error) {
          console.error("Error removing document: ", error);
        }
      };

    useEffect(()=>{
        onSnapshot(collection(db,x.uid),(snapshot)=>{
            setBasket(snapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
 
        })
      
        const totalPrice = basket.reduce((acc, curr) => (acc + curr.price) / 2, 0);
        console.log(totalPrice);
        setCost(totalPrice)

       
          

  
    },[basket])
  return (
    <>
    <Navbar />
        <div className='container'>
            <div className="row">
                <div className="col col-md-8">
                <table className='table table-striped table-danger mt-5'>
            <thead>
                <tr>
                    <th>url</th>
                    <th>title</th>
                    <th>price</th>
                    <th>action</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {basket?.map(item=>(
                    <tr>
                        <td>
                            <img src={item.image} alt="img" width={100} height={50} />
                        </td>
                        <td>
                            {item.title}
                        </td>
                        <td>
                            ${item.price / 2}
                        </td>
                        <td>
                            <button className='btn btn-dark rounded-xl'>+</button>
                           {" "} {0} {" "}
                            <button className='btn btn-dark'>-</button>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>deleteUser(item.id)}>
                                delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
                </div>
                <div className="col col-md-4 mt-5">
                    <div className="card">
                       
                        <img src="/images/logo.png" alt="" />
                        <h1>Checkout</h1>
                        <StripeConnect />
                        <button className='btn btn-outline-info'>price:${cost.toFixed(2)}</button>
                    </div>
                </div>
            </div>

    </div>
    </>

  )
}

export default Basket