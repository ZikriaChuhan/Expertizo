import {createBrowserRouter,RouterProvider, Outlet, useNavigate} from "react-router-dom";
import Dashboard from '../../View/dashboard';
import Detail from "../../View/detail";
import Login from "../../View/login";
import Footer from '../../Components/footer';
import Header from '../../Components/header';
import Register from "../../View/register";
import Postads from "../../View/postads";
import Checkout from "../../View/checkout";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
          path: "/detail/:id",
          element: <Detail />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register /> ,
        },
        {
          path: "/postads",
          element: <Postads /> ,
        },
        {
          path: "/checkout",
          element: <Checkout /> ,
        },
    ]
  },
   
  ]);

  function Layout() {
    
    const navigate = useNavigate();
    const [user, setUser ]= useState()
    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
    setUser(user)
    });
    }, []);

    useEffect(() => {
    const { pathname} = window.location;
    if (user) {
    if (pathname ==="/login" || pathname === "/register") {
    navigate("/");
    }
    } else {
    if (pathname === "/postads" ) {
    navigate("/login");
    }
    }
    }, [window.location.pathname, user]);


    return (
    <div>
       <Header /> 
       <Outlet /> {/* children */}
       <Footer />
    </div>
    );
    }
    function Router() {
    return <RouterProvider router={router} />;
    }

  export default Router;
