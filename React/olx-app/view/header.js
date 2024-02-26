import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db, getusers } from '../../config/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice'


function Header() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [user, setUser] = useState(null)
  const [currentUser , setCurrentUser] = useState()
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer.cart)

  const removeItem = (itemId) => {
    // Dispatch an action to remove the item from the cart
    dispatch(removeFromCart(itemId));
  };

  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
    if (user) {
   
    setUser(user)
    } else {
    setUser(null)
    }
    });
    }, [])


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
              const loggedInUserId = user.uid;
              const q = query(collection(db, "users"), where("userID", "==", loggedInUserId));
              const querySnapshot = await getDocs(q);
              querySnapshot.forEach((doc) => {
                  setCurrentUser(doc.data());
              });
          } else {
              setCurrentUser("");  // Clear currentUser when the user is not authenticated
          }
      });

      // Cleanup the subscription on component unmount
      return () => unsubscribe();
  }, []);
  


    const logoutUser = () => {
      signOut(auth);
      setCurrentUser("");
      }


    return (
      <>
      <header>
       
        <div className="firslogodiv">
            <img className="bluelogo" onClick={() => navigate("/")} src="https://www.liblogo.com/img-logo/max/ol8430f3c1-olx-logo-file-olx-new-logo-png-wikimedia-commons.png" />

            <svg xmlns="http://www.w3.org/2000/svg"  alt="OLX Motors" className="motorslogo">

            <defs><linearGradient id="a" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#ddd" /> <stop offset="1" stopColor="#fff" /></linearGradient></defs>

            <path fill="url(#a)" d="M0 16.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0z" opacity=".57"></path>

               <a> <path stroke="rgba(0,0,0,0)" d="M40 20.5h1v-6.2l3 6.2h.6l2.8-6.2v6.2h1v-8.3h-1L44.1 19l-3-6.8H40zm18.3-4.2A4.1 4.1 0 0 0 54 12a4.1 4.1 0 0 0-4.2 4.3 4.1 4.1 0 0 0 4.2 4.3 4.1 4.1 0 0 0 4.2-4.3zm-7.3 0a3 3 0 0 1 3-3.3 3 3 0 0 1 3.2 3.3 3 3 0 0 1-3 3.3 3 3 0 0 1-3.2-3.3zm8.2-3.3h2.3v7.5h1V13H65v-1h-5.7zm15 3.3A4.1 4.1 0 0 0 70 12a4.1 4.1 0 0 0-4.2 4.3 4.1 4.1 0 0 0 4.2 4.3 4.1 4.1 0 0 0 4.2-4.3zm-7.2 0a3 3 0 0 1 3-3.3 3 3 0 0 1 3 3.3 3 3 0 0 1-3 3.3 3 3 0 0 1-3-3.3zm13.2-1.7c0 1-.6 1.6-1.8 1.6h-1.6V13h1.6c1.2 0 1.8.6 1.8 1.6zM75.7 12v8.4h1V17H78l2 3.4h1.3l-2-3.5a2.4 2.4 0 0 0 2-2.4c0-1.4-1-2.5-3-2.5zm12.7 6c0-3-4.5-1.7-4.5-3.8 0-1 .7-1.4 1.6-1.4a1.5 1.5 0 0 1 1.6 1.2h1.2a2.5 2.5 0 0 0-2.7-2.1c-1.7 0-2.8 1-2.8 2.3 0 3 4.5 1.7 4.5 4 0 .7-.6 1.3-1.7 1.3a1.5 1.5 0 0 1-1.7-1.4h-1.2c0 1.4 1.3 2.4 3 2.4a2.5 2.5 0 0 0 2.7-2.4z"></path>
                
                <path  d="M24.7 13.5a1.1 1.1 0 0 0-1.4-.7l-.6.2-1-2.2-.4-.1a16 16 0 0 0-4.8-.7 12 12 0 0 0-4.3.7l-.3.1-1 2.3h-.5a1.1 1.1 0 0 0-.6 2v.2a4 4 0 0 0-.4 1.5v4a2.1 2.1 0 0 0 0 .6.7.7 0 0 0 .8.5h1.6a.7.7 0 0 0 .8-.5 2.1 2.1 0 0 0 0-.7v-.3a47.1 47.1 0 0 0 8.3 0v.3a2.1 2.1 0 0 0 0 .7.7.7 0 0 0 .8.5h1.6a.7.7 0 0 0 .7-.5 2.1 2.1 0 0 0 .1-.7v-4a3.7 3.7 0 0 0-.4-1.5V15h.3a1.1 1.1 0 0 0 .7-1.5zm-12.2-2.1a11.3 11.3 0 0 1 4-.6 15.2 15.2 0 0 1 4.6.6l.9 1.8a17.6 17.6 0 0 1-4.3.4H17a28.2 28.2 0 0 1-5.4-.3zm-.6 9.3a2.2 2.2 0 0 1 0 .4h-1.7a2.2 2.2 0 0 1 0-.4V20a1 1 0 0 0 .3 0l1.4.2v.4zm11.4 0a2.2 2.2 0 0 1 0 .4h-1.6a2.2 2.2 0 0 1 0-.4v-.4H23a1 1 0 0 0 .4-.2zm.5-6.5l-1.2.4.5 1a3 3 0 0 1 .3 1.2V18l-.1.7c0 .3-.2.7-.5.7-3 .3-4.5.5-6 .5s-3-.2-6.2-.5c-.2 0-.3-.3-.4-.6V18a17 17 0 0 1 0-1 3.2 3.2 0 0 1 .3-1.3l.5-1-1-.2a.3.3 0 0 1-.2-.4.3.3 0 0 1 .4-.3l1.1.4a23.6 23.6 0 0 0 5 .3h1.4a17.9 17.9 0 0 0 4.6-.5h.3l1-.4a.3.3 0 0 1 .4.3.3.3 0 0 1-.2.4z"></path>
                <path d="M12 16a1.2 1.2 0 1 0 1.1 1.2A1.2 1.2 0 0 0 12 16zm0 1.6a.4.4 0 1 1 .3-.4.4.4 0 0 1-.4.4zm9.6-1.6a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2zm0 1.6a.4.4 0 1 1 .5-.4.4.4 0 0 1-.5.4zm-7.8.2h6v.8h-6z"></path></a>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="motorslogo1" alt="OLX Property" >
                <defs><linearGradient id="a" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#ddd" /> <stop offset="1" stopColor="#fff" /></linearGradient></defs>
                <path fill="url(#a)" d="M0 16.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0z" opacity=".57"></path>
                <a>
                <path stroke="rgba(0,0,0,0)" d="M41.1 16.64v-3.07h1.6c1.25 0 1.78.58 1.78 1.55 0 .94-.53 1.52-1.78 1.52zm4.5-1.52c0-1.37-.93-2.45-2.9-2.45H40v8.36h1.1v-3.49h1.6c2.08 0 2.9-1.15 2.9-2.42zm5.82.01c0 .94-.54 1.6-1.77 1.6h-1.6v-3.16h1.6c1.25 0 1.77.61 1.77 1.57zm-4.47-2.46v8.36h1.1v-3.42h1.31l2 3.42h1.3l-2.1-3.5a2.36 2.36 0 0 0 2-2.4c0-1.36-.94-2.45-2.9-2.45zm15.3 4.18a4.12 4.12 0 0 0-4.2-4.28 4.13 4.13 0 0 0-4.2 4.28 4.13 4.13 0 0 0 4.2 4.27 4.12 4.12 0 0 0 4.2-4.27zm-7.3 0a3.05 3.05 0 0 1 3.1-3.33 3.05 3.05 0 0 1 3.07 3.33 3.06 3.06 0 0 1-3.08 3.32 3.06 3.06 0 0 1-3.09-3.32zm9.82-.2v-3.08h1.6c1.25 0 1.78.58 1.78 1.55 0 .94-.53 1.52-1.77 1.52zm4.5-1.53c0-1.36-.93-2.44-2.9-2.44h-2.7v8.35h1.1v-3.49h1.6c2.08 0 2.9-1.15 2.9-2.42zm5.85-2.46h-4.5v8.37h4.5v-.9h-3.4v-2.88h3.04v-.9h-3.04v-2.8h3.4zm6.14 2.48c0 .93-.54 1.6-1.78 1.6h-1.6v-3.17h1.6c1.25 0 1.78.61 1.78 1.57zm-4.48-2.47v8.36h1.1v-3.42h1.32l1.98 3.42h1.3l-2.1-3.5a2.36 2.36 0 0 0 2-2.4c0-1.36-.94-2.45-2.9-2.45zm6.78.9h2.29v7.46h1.1v-7.47h2.27v-.89h-5.66zm9.04 4.3v3.16h1.1v-3.15l2.72-5.2h-1.2l-2.07 4.23-2.07-4.24h-1.2z"></path>
                
                <path d="M25.03 21.92v-9.35l-4.99-1.66v1.05l4 1.33v8.59h-5V7.85h-8.38v14.08h-.4v1h15.17v-1zm-6.98-11.68v11.68h-6.4V8.84h6.4z"></path>
                <path d="M15.17 10.3h1.61v.8h-1.6zm-2.42 0h1.6v.8h-1.6zm2.42 1.6h1.61v.81h-1.6zm-2.42 0h1.6v.81h-1.6zm2.42 2.42h1.61v.81h-1.6zm-2.42 0h1.6v.81h-1.6zm2.42 1.62h1.61v.8h-1.6zm-2.42 0h1.6v.8h-1.6zm2.42 2.42h1.61v.8h-1.6zm-2.42 0h1.6v.8h-1.6zm8.87-4.04h.8v.81h-.8zm-1.62 0h.8v.81H20zm1.62 1.62h.8v.8h-.8zm-1.62 0h.8v.8H20zm1.62 2.42h.8v.8h-.8zm-1.62 0h.8v.8H20z"></path>
                </a>
              
                </svg>

                

        </div>


        <div className="searchdiv">
        <img className="blacklogo" src="../img/olxblacklogo.png" onClick={() => navigate("/")} />

        <div className="pakinput1">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 1024 1024" className="searchlogo"><path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 78.15-139.54 78.15-224.19 0-199.98-162.7-362.67-362.67-362.67S85.33 248.03 85.33 448c0 199.98 162.69 362.67 362.67 362.67 84.63 0 162.41-29.38 224.17-78.15l206.14 206.15h60.36v-60.33l-54.23-54.23z"></path></svg>
        <div className='countryDropdown'>
                    <form>
                    <select value={selectedCountry} onChange={handleCountryChange}>
                    <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
                
                    </select>

                    </form>
                <img src="https://www.olx.com.pk/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg"  alt="Dropdown trigger" className="k089035e" />

                </div>
              
        </div>


        <div className="pakinput" >
        
            <input className="loactioninput" placeholder="Find Cars Mobile Phones and more..." />

            <img src="../img/searchicon.png" className="searchicon" />
        </div>

      
        {user && currentUser ?
        <div className="useremailname1">
        
        <img src={currentUser.userDp} className="userimg"  />

        <div className="dropdown-content">
        <h3 >{currentUser.fullname}</h3>
        <p onClick={logoutUser}>Log Out</p>
        </div>
        </div>
        :
      <span className="loginimg" onClick={() => navigate("/login")}>Login</span>
      
        }


        
        <img onClick={() => navigate("/postads")} src="../img/loginimg.png" className="sellimg"  />


        <div onClick={() => setToggle(!toggle)}   className="basketlogo">
        
            <img width="30px" height="30px"
            src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" />
           <h3 className="cartlength"> {cart.length} </h3>
        </div>
        {toggle && <div style={{ border: '1px solid black' }} className="basketcart">
        <div className="shopping-cart-header">

        <h2>Order Summary</h2>
             
    
    </div>
    {cart.length > 0 ? (
        <ul className="shopping-cart-items">
          {cart.map((item) => (
            <li className="clearfix" key={item.id}>
              <img src={item.imageUrl} alt={item.title} />
              <div className="item-div">
              <span className="item-name">{item.title}</span>
              <button  className="item-btn" onClick={() => removeItem(item.id)}>x</button>
              </div>
              <span className="item-price">Rs. {item.price * item.quantity}</span>
              <span className="item-quantity">Qty: {item.quantity}</span>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

<div class='line'></div>
          <i className="fa fa-shopping-cart cart-icon"></i><span className="cartlength1">{cart.length}</span>
      <div className="shopping-cart-total">
        <span className="lighter-text">Total:</span>
        <span className="main-color-text">Rs. {totalPrice.toFixed(2)}</span>
      </div>
      <div class='line'></div>
          <a  className="button" onClick={() => navigate("/checkout")}>Checkout</a>

          
        </div>}
        </div>      
      </header>

      <nav>
        <div className="allcatdiv">
         <div className="catdropdowndiv">
         <h3>All categories</h3><img src="https://www.olx.com.pk/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg" className="catimg" alt="Dropdown arrow" />
         </div>
         <div className="allcatlinkdiv">
          <a href="#">Mobile Phones</a>
          <a href="#">Cars</a>
          <a href="#">Motorcycles</a>
          <a href="#">House</a>
          <a href="#">Video-Audios</a>
          <a href="#">Tablets</a>
          <a href="#">Land & Plots</a>
         </div>
        </div>
      </nav>


      </>
    );
  }
  
  export default Header;




  