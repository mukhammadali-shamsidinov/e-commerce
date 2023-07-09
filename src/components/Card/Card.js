import React, { useContext } from "react";
import { Context } from "../../App";

const Card = () => {
  const {products,detailsPage} = useContext(Context)
  console.log(products);
  return (
    <div className="container">
      <h1 className="text-center">Products</h1>
      <div className="row g-3">
        {products.length > 0 ? products.map(item=>(
           <div className="col-12 col-md-3 col-sm-12" key={item.id}>
           <div className="card" style={{ width: "18rem",height:'50vh' }}>
             <img src={item.image} className="card-img-top" alt="..." style={{height:'50%'}} />
             <div className="card-body" style={{height:'50%'}}>
               <h5 className="card-title">{item.title}</h5>
               <p className="card-text">
                {item.descr.substr(0,50)}...
               </p>
               <div className="d-flex">
               <button href="#" className="btn btn-primary">
                Savatga Qo'shish
               </button>
               &nbsp;
               <button className="btn btn-danger" onClick={()=>detailsPage(item)}>
                 Batafsil
               </button>
               </div>
 
             </div>
           </div>
         </div>
        ))
      :
      <h1>Loading...</h1>  
      }
       

      </div>
    </div>
  );
};

export default Card;
