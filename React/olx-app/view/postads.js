import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { postAdToDb } from '../../config/firebase';

function Postads() {

  const navigate = useNavigate();
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [image, setImage] = useState()

  const postAd = async () => {
  
  await postAdToDb({ title, description, price, image })
  navigate('/')
  }


  return (
    <>
    
      <div className="loginbodydiv"> 
      <div className='loginimge'>
        <img src='https://scontent.fkhi28-1.fna.fbcdn.net/v/t31.18172-8/11127561_927194317311202_8576484707969385855_o.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9a8829&_nc_ohc=oXS0KQmrAUYAX_5YUHs&_nc_ht=scontent.fkhi28-1.fna&oh=00_AfA1Lbkfed0blSMf-xVp_l2Jcut_dxBL5rU7IfxE_Ph7Vg&oe=65DB88C8' />
      </div>
       <div className="wrapper">
    <div className="formdiv">
   
      <h2>Add Post</h2>
        <div className="input-field">
        <input type="text" onChange={(e) => setTitle(e.target.value)} required />
        <label>Product Name</label>
      </div>
      <div className="input-field">
        <input type="text"  onChange={(e) => setDescription(e.target.value)} required />
        <label>Enter description</label>
      </div>
      <div className="input-field">
        <input type="number"  onChange={(e) => setPrice(e.target.value)}  required/>
        <label>Enter Price</label>
      </div>
      <div className="input-field">
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        
      </div>
      
      <button onClick={postAd}>Post </button>
      
    </div>
  </div>

  </div>

      </>

);
}

export default Postads;