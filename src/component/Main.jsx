import React from "react";
import HomePage from "./HomePage";
import SecondComponent from "./SecondComponent";
import Third from "./Third";
import Stripe from "./Stripe";


const Main = () => {
  return (
    <div className="">
         <HomePage/>
         <Stripe/>
         <SecondComponent/>
         <Third/>
    </div>
  );
};

export default Main;
