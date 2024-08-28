import { createBrowserRouter,Outlet } from "react-router-dom";
import NavBar from "../components/main/navBar";
import Library from "../app/library";
import ShoppingCart from "../app/shoppingCart";
import Payment from "../app/payment";
import Footer from "../components/main/footer";
import Home from "../app/home";
import History from "../app/history";
import ContactUs from "../app/contact-us";


const router = createBrowserRouter([
  
  {
    path: '/',
    element: (
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        <NavBar />
        <Outlet />
        <Footer/>
      </div>
    ),
    children: [
      {
        path:'',
        element:<Home/>
      },
      {
        path: 'library',
        element: <Library/>,
      },
      {
        path: 'shopping-cart',
        element: <ShoppingCart/>,
      },
      {
        path: 'payment',
        element: <Payment/>,
      },
      {
        path: 'history',
        element: <History/>,
      },
      {
        path: 'contact-us',
        element: <ContactUs/>,
      },
    ],
  },
],
{
  basename: process.env.PUBLIC_URL,
});
export default router;
