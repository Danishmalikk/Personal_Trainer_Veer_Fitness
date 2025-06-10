import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Method from '../Method/Method'
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const dynamicWidth = "85%";
  const aboutRef = useRef(null);
  const progressBarRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(aboutRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });

    progressBarRefs.current.forEach((progressBarRef, index) => {
      gsap.fromTo(progressBarRef, 
        { width: "0%" }, 
        { width: dynamicWidth, duration: 2, scrollTrigger: {
          trigger: progressBarRef,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true
        }}
      );
    });
  }, [dynamicWidth]);

  return (
    <div ref={aboutRef} className='px-14'>
      <div className="bg-grey-50" id="about">
        <Method/>
        <div className="container flex flex-col p-3 md:p-0 items-center py-10 md:py-20 lg:flex-row max-w-[1190px] mx-auto">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I'm Veer, a Certified Gym Trainer & Fitness Coach
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              Passionate about helping people achieve their fitness goals, I specialize in strength training, weight loss, and muscle building. With years of experience in the fitness industry, I create personalized workout and nutrition plans tailored to your needs. Whether you're a beginner or an athlete, I'm here to guide you toward a healthier and stronger version of yourself. Let’s train smart and push limits together!
              Let me know if you'd like any modifications! 💪🔥
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start">
                <a href="https://wa.me/8770238852" target="_blank" className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </a>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <a href="/">
                  <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Strength Training</h4>
                <h3 className="font-body text-3xl font-bold text-primary">90%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div ref={el => progressBarRefs.current[0] = el} className="h-3 rounded-full bg-primary" style={{ width: dynamicWidth }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Cardio & Endurance</h4>
                <h3 className="font-body text-3xl font-bold text-primary">80%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div ref={el => progressBarRefs.current[1] = el} className="h-3 rounded-full bg-primary" style={{ width: dynamicWidth }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Muscle Building</h4>
                <h3 className="font-body text-3xl font-bold text-primary">95%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div ref={el => progressBarRefs.current[2] = el} className="h-3 rounded-full bg-primary" style={{ width: dynamicWidth }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Nutrition & Diet</h4>
                <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div ref={el => progressBarRefs.current[3] = el} className="h-3 rounded-full bg-primary" style={{ width: dynamicWidth }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;