import { useNavigate } from "react-router-dom";
import { useEffect,useState} from 'react';
import { getAds } from '../../config/firebase'

function Dashboard() {

  const [olxproductdata,setOlxproductdata] = useState([]);
  const navigate = useNavigate()
  
  useEffect(() => {
  
    const fetchFirebaseData = async () => {
      try {
        const firebaseAds = await getAds();
        setOlxproductdata(firebaseAds);
      } catch (error) {
        console.error("Error fetching Firebase data:", error.message);
      }
    };
    fetchFirebaseData();
  }, []);

  if (!olxproductdata.length){
    
    return <div className='olxloader'><img  src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif'  /></div>
  }

  return (
    <>
   
    <section>
      <div className="bannerdiv">
          <img src="https://images.olx.com.pk/thumbnails/422461769-800x600.webp" />
      </div>
      <div className="dashallcatdiv">
          <img src="../img/AllCategories.png" />
      </div>

      <div className="mainproductdatadiv">
         <div className="productheaderdiv">
          <h2>Mobile Phones</h2>
          <a href="">view more &gt;</a>          
         </div>
 

         <div className="allproductcard-div">
          
          {olxproductdata.map( i => {
            return <div className="productcard" key={i.id}  onClick={() => navigate(`detail/${i.id}`)}>
            <div className="productimgdiv">
            <img src={i.imageUrl}  />
              </div>
              <div className="cardpricediv">
                <h4></h4>
                 <img src="../img/heart.png" />
                </div>
                <p className="producttitle">{i.title}</p>
                <p className="loactionpara">RS {i.price} </p>
                
                
            </div>
  
          })}

         </div>


      </div>

    </section>
    
    </>
  );
}

export default Dashboard;