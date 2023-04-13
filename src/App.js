import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import meraStore from './Store/Store';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import { ToastContainer } from 'react-toastify';
import Details from './components/Details';
import Checkout from './components/CheckOut/Checkout';
import Signup from './components/signup/signup';
import Login from './components/Login/Login';
import AddProducts from './components/AddProducts/AddProducts';
import Admin from './components/Admin/Admin';
import Adminproducts from './components/Admin/Adminproducts';
import Adminusers from './components/Admin/Adminusers';
import Userorder from './components/CheckOut/Userorder';
import AllOrders from './components/Admin/AllOrders';
import ForgotPassword from './components/ForgotPassword';
import ChectOtp from './components/ChectOtp';
import UserProfile from './components/UserProfile';
import ResetPass from './components/ResetPass';
import ChangeUserName from './components/ChangeUserName';
import ChangeEmail from './components/ChangeEmail';
import SafeRoutes from './components/SafeRoutes';
import PageNotFound from './components/PageNotFound';



function App() {
  return (
    <>
      <Provider store={meraStore}>
        <BrowserRouter>

          <Header />

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/PageNotFound' element={<PageNotFound />} />
            <Route path='/ForgotPassword' element={<ForgotPassword />} />
            <Route path='/ChectOtp' element={<ChectOtp />} />

            {/* i wrap this in SafeRoutes component to stop moving on other pages */}

            <Route element={<SafeRoutes />} >


              <Route path='/Admin' element={<Admin />} />
              <Route path='/Adminproducts' element={<Adminproducts />} />
              <Route path='/Adminusers' element={<Adminusers />} />
              <Route path='/AllOrders' element={<AllOrders />} />
              <Route path='/AddProducts' element={<AddProducts />} />
              <Route path='/AddProducts/:edithoraha' element={<AddProducts />} />

              <Route path='/UserProfile' element={<UserProfile />} />
              
              <Route path='/ChangeUserName/:resetname' element={<ChangeUserName />} />
              <Route path='/ChangeEmail/:resetEmail' element={<ChangeEmail />} />
              <Route path='/ResetPass/:reset' element={<ResetPass />} />
              
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/Details/:id' element={<Details />} />
              <Route path='/Cards' element={<Cards />} />
              <Route path='/cart/:id' element={<CardsDetails />} />
              <Route path='/Checkout/' element={<Checkout />} />
              <Route path='/Userorder/' element={<Userorder />} />


            </Route>
          </Routes>
          <Footer />

          <ToastContainer></ToastContainer >
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;