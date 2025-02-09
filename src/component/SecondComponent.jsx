import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SecondComponentImage from "../static/Second_Page_Portrait.jpeg";

gsap.registerPlugin(ScrollTrigger);

const SecondComponent = () => {
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
      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            toggleActions: "play reverse play reverse"
          }
        }
      );

      // Text animations
      textRefs.current.forEach((textRef, index) => {
        gsap.fromTo(textRef,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: textRef,
              start: "top 80%",
              end: "bottom 60%",
              scrub: true,
              toggleActions: "play reverse play reverse"
            }
          }
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
      <div>
        <img ref={imageRef} src={SecondComponentImage} width={740} height={200} />
      </div>
      <div className="flex flex-col gap-6 text-xl md:mt-72 mt-4 md:ml-20 p-3 md:p-0">
        <h1 ref={el => textRefs.current[0] = el} className="text-white">
          Louise Parker has transformed into 'The Parker <br /> Practice'. Don't
          worry though, we're still the <br /> same family company, founded and
          run by <br /> Louise and the team!
        </h1>
        <h1 ref={el => textRefs.current[1] = el} className="text-white"> DON'T DIET, CHANGE. </h1>
        <h1 ref={el => textRefs.current[2] = el} className="text-white">
          Reset your habits and transform your lifestyle. <br />
          With our unique programmes you'll have <br /> access to specialist
          advice on how to think, act <br /> and feel healthier. No more fad
          diets that don't work...
        </h1>
      </div>
    </div>
  );
}

export default SecondComponent;