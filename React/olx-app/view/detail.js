import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { db } from "../../config/firebase"; 
import {useDispatch } from 'react-redux';
import { addToCart } from "../../store/cartSlice";


import React from 'react';
import './detail.css';



function Detail() {
  const [olxproductdetail, setOlxproductdetail] = useState({});
  const { id } = useParams();

  const dispatch = useDispatch();




  useEffect(() => {
    getProductDetail();
  }, [id]);

  const getProductDetail = async () => {
    try {
      const productDocRef = doc(db, "ads", id);
      const productDocSnapshot = await getDoc(productDocRef);

      if (productDocSnapshot.exists()) {
        const productData = productDocSnapshot.data();
        setOlxproductdetail(productData);
       
      } else {
        console.log("Product not found");
      }
    } catch (error) {
      console.error("Error fetching product detail:", error.message);
    }
  };


    return(
      <>
    <div className="container adDetailBox">
        <div className="adInfoBox">
            <div className="adThumb"><img src={olxproductdetail.imageUrl} /></div>
            
            <div className="adDecription">
            <h2>Rs {olxproductdetail.price} </h2>
            <h3>{olxproductdetail.title}</h3>
            </div>


          

           

        </div>
       <div>      
         <div className="adContact">
            <div className="avatar-sec">
            <div><img src={olxproductdetail.imageUrl}/></div>
            <div><h4>Ail sdsd</h4><p><a>asdaa@gmail.com</a></p></div>
            </div>
            <button className="btnDark"><img src='https://github.com/DanishShaikh93/Expertizo/blob/main/assignments/React%20Js/class%20work/olx-app/src/images/telephone.png?raw=true' alt="phone"/> Show Phone Number</button>
           
            <button className="btnLight" onClick={() => dispatch(addToCart({ ...olxproductdetail, id }))}>
            Add to cart 
            </button>
        </div>

        <div className="adDecription">
          
         <h2>{olxproductdetail.title}</h2>
            <h3>Rs {olxproductdetail.price} </h3>
      </div>

        <div className="adDecription">

            <h3>Description</h3>
            <p className="para" >{olxproductdetail.description}</p>
        </div>

        <div className="adContact">
        <h3>Details</h3>
            <p>Brand: <strong>Not Selected</strong></p>
            <p>Category: <strong>Not Selected</strong></p>
            <p>Stock: <strong>Not Selected</strong></p>
            <p>Rating: <strong>Not Selected</strong></p>
            </div>

            
        
      
        </div>
 

</div>


  
      </>
    );
}

export default Detail;