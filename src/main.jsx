import React from 'react'
import ReactDOM from 'react-dom/client'
// import Main from './App.jsx'
import './index.css'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Blog from "./Ecommerce/Blog.jsx";
import Contact from "./Ecommerce/Contact.jsx";
import About from "./Ecommerce/About.jsx";
import Header from "./Ecommerce/Header.jsx";
import Product from './Ecommerce/Product.jsx';
import Parent from './Ecommerce/Parent.jsx';
import ProductDescription from './Ecommerce/ProductDescription.jsx';
import BlogDescription from './Ecommerce/BlogDescription.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(


    <BrowserRouter>
        <Header />
        <Routes>

            <Route path="/" element={<Parent />}>
                <Route index element={<Product />}></Route>
                <Route path="product/:id" element={<ProductDescription />}></Route>
            </Route>

            <Route path="/blogs" element={<Parent />}>
                <Route index element={<Blog />}></Route>
                <Route path="blog/:id" element={<BlogDescription />}></Route>
            </Route>            
            <Route path="/contact" element={<Contact />}></Route>            
            <Route path="/about" element={<About />}></Route>            
            {/* <Route path="/cart" element={<Cart />}></Route>             */}
        </Routes>
    </BrowserRouter>

    
)