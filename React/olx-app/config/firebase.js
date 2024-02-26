import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCAgJycBTb_Mz07rwi2kSY0Vz1xyr-C8gM",
  authDomain: "expertizochuhan.firebaseapp.com",
  projectId: "expertizochuhan",
  storageBucket: "expertizochuhan.appspot.com",
  messagingSenderId: "785847332446",
  appId: "1:785847332446:web:fde596bfe25411eb3f0ecf",
  measurementId: "G-RPQWMF8VN5"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export async function register(userInfo) {
  try {
    
  const { email, password, age, fullname, userDp } = userInfo;

  const storageRef = ref(storage, `users/${userDp.name}`);
  await uploadBytes(storageRef, userDp);

  const url = await getDownloadURL(storageRef);

  const usercredential =  await createUserWithEmailAndPassword(auth, email, password)
    const uid = usercredential.user.uid
  await addDoc(collection(db, "users"), {
    userID : uid,
    fullname,
    email,
    age,
    userDp :   url,
  });
    alert("Successfully Registered");
  
  }   catch(e) {
    alert(e.message);
  };
}



export async function login(userInfo) {
    try {  
  const { email, password } = userInfo;

   await signInWithEmailAndPassword(auth, email, password);

    alert('Logged In Successfully');
  
}   catch(e) {
  alert(e.message);
};
}


export async function postAdToDb(ad) {
  try {
  const { title, description, price, image } = ad;
  const storageRef = ref(storage, `ads/${image.name}`);
  await uploadBytes(storageRef, image);

  const url = await getDownloadURL(storageRef);
   await addDoc(collection(db, "ads"), {
    
  title,
  description, 
  price, 
  imageUrl:   url,
  });
  alert("Ad posted successfully!");
  } catch (e) {
  alert(e.message);
  }
  }


    export async function getAds() {
      try {
        const querySnapshot = await getDocs(collection(db, "ads"));

        const ads = [];
    
        querySnapshot.forEach((doc) => {
          const ad = doc.data();
          ad.id = doc.id;
          ads.push(ad);
        });
    
        return ads;
      } catch (e) {
        console.error(e.message);
        alert(e.message);
      }
    }
    


    export async function getusers() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));

        const ads = [];
    
        querySnapshot.forEach((doc) => {
          const ad = doc.data();
          ad.id = doc.id;
          ads.push(ad);
        });
    
        return ads;
      } catch (e) {
        console.error(e.message);
        alert(e.message);
      }
    }
