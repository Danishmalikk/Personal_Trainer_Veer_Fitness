import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThirdComponentImage from "../static/Third_Page_Portrait.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Third = () => {
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // MD breakpoint in Tailwind

    // Cleanup function for ScrollTriggers
    const cleanupScrollTriggers = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

    // Desktop Animations
    if (!isMobile) {
      gsap.fromTo(imageRef.current, 
        { opacity: 0, x: -100 }, 
        { opacity: 1, x: 0, duration: 1, scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
          toggleActions: "play reverse play reverse"
        }}
      );

      textRefs.current.forEach((textRef, index) => {
        gsap.fromTo(textRef, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 1, scrollTrigger: {
            trigger: textRef,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            toggleActions: "play reverse play reverse"
          }}
        );
      });
    } 
    // Mobile Animations
    else {
      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );

      // Text animations with stagger
      gsap.fromTo(textRefs.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

    // Cleanup on component unmount
    return () => {
      cleanupScrollTriggers();
    };
  }, []);

  return (
    <div className="flex gap-2 flex-col md:flex-row" ref={containerRef}>
      <div className="flex flex-col gap-6 text-xl md:mt-72 mt-4 md:mr-10 md:ml-10 p-3 md:p-0">
        <h1 ref={el => textRefs.current[0] = el} className="text-white">
          as you regain control, prioritise your wellbeing <br /> and make time to focus on you.
        </h1>

        <h1 ref={el => textRefs.current[1] = el} className="text-white"> CHANGE & LOSE WEIGHT </h1>
        <h1 ref={el => textRefs.current[2] = el} className="text-white">
          We'll create a plan that works for your lifestyle <br />
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