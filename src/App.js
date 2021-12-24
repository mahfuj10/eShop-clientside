import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home/Home';
import Login from './pages/Login/Login/Login';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetails from './pages/ProductDetails/ProductDetails/ProductDetails';
import TelevisionRoute from './pages/CategoryRoute/TelevisionRoute/TelevisionRoute';
import LaptopsRoute from './pages/CategoryRoute/LaptopsRoute/LaptopsRoute';
import AirConditionRoute from './pages/CategoryRoute/AirConditionRoute/AirConditionRoute';
import ClothRoute from './pages/CategoryRoute/ClothRoute/ClothRoute';
import PhoneRoute from './pages/CategoryRoute/PhoneRoute/PhoneRoute';
import AuthProvider from './pages/Context/AuthProvider/AuthProvider';
import MyCart from './pages/MyCart/MyCarts';
import MyWishdom from './pages/MyWishdom/MyWishdom';
import FredgeRoute from './pages/CategoryRoute/FredgeRoute/FredgeRoute';
import MicroOvenRoute from './pages/CategoryRoute/MicroOvenRoute/MicroOvenRoute';
import DrawerMachineRoute from './pages/CategoryRoute/DrawerMachineRoute/DrawerMachineRoute';
import BagsRoute from './pages/CategoryRoute/BagsRoute/BagsRoute';
import WatchRoute from './pages/CategoryRoute/WatchRoute/WatchRoute';
import ShoesRoute from './pages/CategoryRoute/ShoesRoute/ShoesRoute';
import LampRoute from './pages/CategoryRoute/LampRoute/LampRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import CheckOut from './pages/CheckOut/CheckOut/Checkout';
import Navigation, { searchContext } from './pages/Shared/Navigation/Navigation';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import AllProducts from './pages/AllProducts/AllProducts/AllProducts';
import { useState } from 'react';

function App() {

  const [searchProduct, setSearchProduct] = useState('');

  return (
    <searchContext.Provider value={[searchProduct, setSearchProduct]}>
      <AuthProvider>
        <BrowserRouter>

          <Navigation />
          <Switch>

            <Route exact path='/'>
              <Home />

            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/single-product/:id'>
              <ProductDetails />
              {/* <ProductReview /> */}
              {/* <RelatedProduct />  */}
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <PrivateRoute path='/cart'>
              <MyCart />
            </PrivateRoute>

            <PrivateRoute path='/wishdom'>
              <MyWishdom />
            </PrivateRoute>

            <Route path="/Television">
              <TelevisionRoute />
            </Route>

            <Route path="/allproducts">
              <AllProducts />
            </Route>

            <Route path="/Laptops">
              <LaptopsRoute />
            </Route>

            <Route path="/Air Condition">
              <AirConditionRoute />
            </Route>

            <Route path="/Clothes">
              <ClothRoute />
            </Route>

            <Route path="/Micro Oven">
              <MicroOvenRoute />
            </Route>

            <Route path="/Washin Machine">
              <DrawerMachineRoute />
            </Route>

            <Route path="/Bags">
              <BagsRoute />
            </Route>

            <Route path="/Smart Phone">
              <PhoneRoute />
            </Route>

            <Route path="/Watch">
              <WatchRoute />
            </Route>

            <Route path="/Shoes">
              <ShoesRoute />
            </Route>

            <Route path="/LED lamp">
              <LampRoute />
            </Route>


            <Route path="/Fredge">
              <FredgeRoute />
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <PrivateRoute path="/checkout">
              <CheckOut />
            </PrivateRoute>

          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </AuthProvider>
    </searchContext.Provider>
  );
}

export default App;
