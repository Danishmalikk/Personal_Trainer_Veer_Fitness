import React from "react";
import SecondComponentImage from "../static/Second_Page_Portrait.jpeg";

const SecondComponent = () => {
  return (
    <div className="flex gap-2">
      <div>
        <img src={SecondComponentImage} width={740} height={200} />
      </div>
      <div className="flex flex-col gap-6 text-xl mt-72 ml-20 ">
        <h1>
          Louise Parker has transformed into 'The Parker <br /> Practice'. Don’t
          worry though, we're still the <br /> same family company, founded and
          run by <br /> Louise and the team!
        </h1>
        <h1> DON’T DIET, CHANGE. </h1>
        <h1>
          Reset your habits and transform your lifestyle. <br />
          With our unique programmes you’ll have <br /> access to specialist
          advice on how to think, act <br /> and feel healthier. No more fad
          diets that don’t work...
        </h1>
        <h1>
          Join thousands of clients all around the world <br /> who have
          followed the Louise Parker Method <br /> over the past 20 years.
          Regain your <br />
          confidence, feel fabulous and lose weight once <br /> and for all!
        </h1>
      </div>
    </div>
  );
};

export default SecondComponent;
