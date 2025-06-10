import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './component/Quiz/Quiz';
import Header from './component/Header';
import Footer from './component/Footer';
import Contact from './component/Contact/Contact';
import Programmes from './component/Programme/Programmes';
import About from './component/About/About';
import { OurPractice } from './component/OurPractice/OurPractice';
import Blog from './component/Blog/Blog';
import Testimonials from './component/Testimonials/Testimonials';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Header/>
      <Routes> 
        <Route path='/' element={<App/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/programmes' element={<Programmes/>} />
        {/* <Route path='/method' element={<Method/>} /> */}
        <Route path='/about' element={<About/>} />
        <Route path='/ourpractice' element={<OurPractice/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
  </BrowserRouter>
);

reportWebVitals();
