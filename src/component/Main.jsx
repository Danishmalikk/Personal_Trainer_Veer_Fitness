import React from "react";
import HomePage from "./HomePage";
import SecondComponent from "./SecondComponent";
import Third from "./Third";
import Stripe from "./Stripe";
import About from "../component/About/About"
import Services from "./Services/Services";
import Traning from "./Traning/Traning";
import Blog from "./Blog/Blog";
import BlogPost from "./Blog/BlogPost";

const Main = () => {
  return (
    <div className="custome-container bg-black">
         <HomePage/>
         <About />
         <Services />
         <Traning />
         <Stripe/>
         {/* <SecondComponent/> */}
         {/* <Third/> */}
    </div>
  );
};

export default Main;
