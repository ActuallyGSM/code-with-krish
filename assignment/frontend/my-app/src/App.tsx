import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import OrderManagement from './components/OrderManagement';
import CustomerOnboarding from './components/CustomerOnboarding';
import LoginComponent from './components/LoginComponent';
import CreateProducts from './components/CreateProducts';


// import './App.css'



function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <Navigation nav={"Order Management"} url={"/order-management"} />
              <Navigation nav={"Customer Onboarding"} url={"/customer-onboarding"} />
              <Navigation nav={"Login"} url={"/login"} />
              <Navigation nav={"Create Products"} url={"/create-products"} />

            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/order-management" element={<OrderManagement />}></Route>
          <Route path="/customer-onboarding" element={<CustomerOnboarding />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/create-products" element={<CreateProducts />} />

        </Routes>
      </BrowserRouter>
    </>
  );

}



interface navProps {
  nav: string;
  url: string;
}

function Navigation({ nav, url }: navProps) {

  return (
    <li>
      <Link to={url}>{nav}</Link>
    </li>
  );
}



export default App;

