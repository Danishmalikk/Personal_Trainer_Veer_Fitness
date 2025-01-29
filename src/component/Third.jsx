import React from "react";
import ThirdComponentImage from "../static/Third_Page_Portrait.jpeg";

const Third = () => {
  return (
    <div className="flex gap-2">

      <div className="flex flex-col gap-6 text-xl mt-72 ml-40 mr-40">   
        <h1> CHANGE & TRANSFORM </h1>
        <h1>
            In depth, live weekly live-coaching sessions<br /> will help you overcome challenges, make
            <br /> positive changes, and feel fabulous.
        </h1>
        <h1> CHANGE & RENEW </h1>
        <h1>
        We’ll create a plan that works for your lifestyle <br />
        as you regain control, prioritise your wellbeing <br /> and make time to focus on you.
        </h1>
        <h1> CHANGE & LOSE WEIGHT </h1>
        <h1>
        We’ll create a plan that works for your lifestyle <br />
        as you regain control, prioritise your wellbeing <br /> and make time to focus on you.
        </h1>
      </div>

      <div>
        <img src={ThirdComponentImage} width={740} height={200} />
      </div>
    </div>
  );
};

export default Third;
