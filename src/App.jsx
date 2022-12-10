import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import $ from 'jquery';


import About from './componants/About/About';
import Blog from './componants/Blog/Blog';
import BlogDetails from './componants/BlogDetails/BlogDetails';
import Brands from './componants/Brands/Brands';
import Contact from './componants/Contact/Contact';
import Footer from './componants/Footer/Footer';
import Gallery from './componants/Gallery/Gallery';
import Home from './componants/Home/Home';
import Navbar from './componants/Navbar/Navbar';
import News from './componants/News/News';
import NewsDetails from './componants/NewsDetails/NewsDetails';
import Offers from './componants/Offers/Offers';
import Products from './componants/Products/Products';
import Services from './componants/Services/Services';
import Carrer from './componants/Carrer/Carrer';
import Cart from './componants/Cart/Cart';
import Notification from './componants/Notification/Notification';
import Notfound from './componants/Notfound/Notfound';
import RefundConditions from './componants/RefundConditions/RefundConditions';
import ShippingTerms from './componants/ShippingTerms/ShippingTerms';
import Signin from './componants/Signin/Signin';
import Checkout from './componants/Checkout/Checkout';
import Categories from './componants/Categories/Categories';
import Profile from './componants/Profile/Profile';
import Orders from './componants/Orders/Orders';
import Wallet from './componants/Wallet/Wallet';
import Replace from './componants/Replace/Replace';
import Wishlist from './componants/Wishlist/Wishlist';
import Address from './componants/Address/Address';
import Payment from './componants/Payment/Payment';
import User from './componants/User/User';
import ProductDetails from './componants/ProductDetails/ProductDetails';
import ServiceDetails from './componants/ServiceDetails/ServiceDetails';



function App() {

  useEffect(() => {

    $('#btnTopFooter').click(function () {
      $('html , body').animate({ scrollTop: 0 }, 300);
    })

    return () => {
      $('#btnTopFooter').click(function () {
        $('html , body').animate({ scrollTop: 0 }, 300);
      })
    }

  }, [])

  return (
      <>
        <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='home' element={<Home />} />

                <Route path='products' element={<Products />}>

                    <Route path='' element={<Categories />}/>
                    <Route path='womens' element={<Categories />}/>
                    <Route path='mens' element={<Categories />}/>
                    <Route path='mobiles' element={<Categories />}/>
                    <Route path='pclabtop' element={<Categories />}/>
                    <Route path='electronics' element={<Categories />}/>
                    <Route path='sports' element={<Categories />} />
                    <Route path='homekitchen' element={<Categories />} />
                    <Route path='supermarket' element={<Categories />} />
                    <Route path='skincare' element={<Categories />}/>
                    <Route path='personalcare' element={<Categories />}/>
                    <Route path='headphones' element={<Categories />}/>
                    <Route path='appliance' element={<Categories />}/>
                    <Route path='toys' element={<Categories />}/>
                    <Route path='books' element={<Categories />}/>
                    <Route path='tv' element={<Categories />}/>
                    <Route path='ferganced' element={<Categories />}/>
                    <Route path='kids' element={<Categories />}/>
                    <Route path='hotsales' element={<Categories />}/>
                    <Route path='brandShow' element={<Categories />}/>
                    <Route path='*' element={<Notfound />}/>

                </Route>

                <Route path='products/:id' element={<ProductDetails />}/>

                <Route path='services' element={<Services />}>
                    
                    <Route path='' element={<Categories />}/>
                    <Route path='womens' element={<Categories />}/>
                    <Route path='mens' element={<Categories />}/>
                    <Route path='mobiles' element={<Categories />}/>
                    <Route path='pclabtop' element={<Categories />}/>
                    <Route path='electronics' element={<Categories />}/>
                    <Route path='sports' element={<Categories />} />
                    <Route path='homekitchen' element={<Categories />} />
                    <Route path='supermarket' element={<Categories />} />
                    <Route path='skincare' element={<Categories />}/>
                    <Route path='personalcare' element={<Categories />}/>
                    <Route path='headphones' element={<Categories />}/>
                    <Route path='appliance' element={<Categories />}/>
                    <Route path='toys' element={<Categories />}/>
                    <Route path='books' element={<Categories />}/>
                    <Route path='tv' element={<Categories />}/>
                    <Route path='ferganced' element={<Categories />}/>
                    <Route path='kids' element={<Categories />}/>
                    <Route path='hotsales' element={<Categories />}/>
                    <Route path='brandShow' element={<Categories />}/>
                    <Route path='*' element={<Notfound />}/>

                </Route>

                <Route path='services/:id' element={<ServiceDetails />}/>

                <Route path='offers' element={<Offers />}>

                  <Route path='' element={<Categories />}/>
                  <Route path='womens' element={<Categories />}/>
                  <Route path='mens' element={<Categories />}/>
                  <Route path='mobiles' element={<Categories />}/>
                  <Route path='pclabtop' element={<Categories />}/>
                  <Route path='electronics' element={<Categories />}/>
                  <Route path='sports' element={<Categories />} />
                  <Route path='homekitchen' element={<Categories />} />
                  <Route path='supermarket' element={<Categories />} />
                  <Route path='skincare' element={<Categories />}/>
                  <Route path='personalcare' element={<Categories />}/>
                  <Route path='headphones' element={<Categories />}/>
                  <Route path='appliance' element={<Categories />}/>
                  <Route path='toys' element={<Categories />}/>
                  <Route path='books' element={<Categories />}/>
                  <Route path='tv' element={<Categories />}/>
                  <Route path='ferganced' element={<Categories />}/>
                  <Route path='kids' element={<Categories />}/>
                  <Route path='hotsales' element={<Categories />}/>
                  <Route path='brandShow' element={<Categories />}/>
                  <Route path='*' element={<Notfound />}/>

                </Route>

                <Route path='brands' element={<Brands />}/>
                <Route path='gallery' element={<Gallery />}/>
                <Route path='cart' element={<Cart />} />
                <Route path='notification' element={<Notification />}/>
                <Route path='signin' element={<Signin />}/>
                <Route path='checkout' element={<Checkout />}/>

                <Route path='about' element={<About />} />
                <Route path='blogs' element={<Blog />}/>
                <Route path='blogs/:id' element={<BlogDetails />}/>
                <Route path='news' element={<News />}/>
                <Route path='news/:id' element={<NewsDetails />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='carrer' element={<Carrer />}/>
                <Route path='refund' element={<RefundConditions />}/>
                <Route path='shipping' element={<ShippingTerms />}/>

                <Route path='profile' element={<Profile />}>

                    <Route path='' element={<Orders />}/>
                    <Route path='orders' element={<Orders />}/>
                    <Route path='wallet' element={<Wallet />}/>
                    <Route path='replace' element={<Replace />}/>
                    <Route path='wishlist' element={<Wishlist />}/>
                    <Route path='address' element={<Address />}/>
                    <Route path='payments' element={<Payment />}/>
                    <Route path='user' element={<User />}/>
                    <Route path='*' element={<Notfound />}/>
                    
                </Route>

                <Route path='*' element={<Notfound />}/>

            </Routes>
            
        <Footer />
      </>
  );
}

export default App;
