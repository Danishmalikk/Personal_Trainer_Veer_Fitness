import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SecondComponentImage from "../static/Second_Page_Portrait.jpeg";

gsap.registerPlugin(ScrollTrigger);

const SecondComponent = () => {
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
      <div>
        <img ref={imageRef} src={SecondComponentImage} width={740} height={200} />
      </div>
      <div className="flex flex-col gap-6 text-xl mt-72 ml-20">
        <h1 ref={el => textRefs.current[0] = el} className="text-white">
          Louise Parker has transformed into 'The Parker <br /> Practice'. Don’t
          worry though, we're still the <br /> same family company, founded and
          run by <br /> Louise and the team!
        </h1>
        <h1 ref={el => textRefs.current[1] = el} className="text-white"> DON’T DIET, CHANGE. </h1>
        <h1 ref={el => textRefs.current[2] = el} className="text-white">
          Reset your habits and transform your lifestyle. <br />
          With our unique programmes you’ll have <br /> access to specialist
          advice on how to think, act <br /> and feel healthier. No more fad
          diets that don’t work...
        </h1>
      </div>
    </div>
  );
}

export default SecondComponent;