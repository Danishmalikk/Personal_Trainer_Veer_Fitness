import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThirdComponentImage from "../static/Third_Page_Portrait.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Third = () => {
  const imageRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(imageRef.current, 
      { opacity: 0, x: -100 }, 
      { opacity: 1, x: 0, duration: 1, scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true
      }}
    );

    textRefs.current.forEach((textRef, index) => {
      gsap.fromTo(textRef, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: textRef,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true
        }}
      );
    });
  }, []);

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-6 text-xl mt-72 mr-10 ml-10">
        <h1 ref={el => textRefs.current[0] = el} className="text-white">
          as you regain control, prioritise your wellbeing <br /> and make time to focus on you.
        </h1>
        <h1 ref={el => textRefs.current[1] = el} text-white> CHANGE & LOSE WEIGHT </h1>
        <h1 ref={el => textRefs.current[2] = el} text-white>
          We’ll create a plan that works for your lifestyle <br />
          as you regain control, prioritise your wellbeing <br /> and make time to focus on you.
        </h1>
      </div>

      <div className="flex-1">
        <img ref={imageRef} src={ThirdComponentImage} width={720} alt="Third Component" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Third;