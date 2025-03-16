import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import user from '../../assets/images/user.jpg';
// Import your video files
import video1 from '../../assets/video/IMG_0174.MP4';
import video2 from '../../assets/video/IMG_0996.MP4';
import video3 from '../../assets/video/IMG_1337.MP4';
import video4 from '../../assets/video/IMG_1421.MP4';
import video5 from '../../assets/video/IMG_1515.MP4';
import video6 from '../../assets/video/IMG_1894.MOV';
import video8 from '../../assets/video/IMG_2031.MP4';
import video9 from '../../assets/video/IMG_2772.MP4';
import video10 from '../../assets/video/IMG_2817.MP4';
import video11 from '../../assets/video/IMG_8073.MP4';
import video12 from '../../assets/video/IMG_8192.MOV';

const testimonials = [
  {
    image: user,
    quote: "Training with Veer has been life-changing! His personalized approach and constant motivation helped me lose 15kg in 4 months. His expertise in nutrition and workout planning is exceptional!",
    name: "Rahul Sharma",
    memberSince: "Client since 2021"
  },
  {
    image: user,
    quote: "As a busy professional, I needed a flexible training program. Veer's online coaching and detailed workout plans made it possible to achieve my fitness goals while managing my schedule.",
    name: "Priya Patel",
    memberSince: "Client since 2019"
  },
  {
    image: user,
    quote: "Veer's dedication to his clients is unmatched. His scientific approach to muscle building helped me gain 10kg of lean muscle in 6 months. The results speak for themselves!",
    name: "Amit Kumar",
    memberSince: "Client since 2020"
  },
  {
    image: user,
    quote: "I've tried many trainers before, but Veer's knowledge and attention to form correction sets him apart. My strength has improved significantly, and I'm finally seeing the results I wanted.",
    name: "Neha Singh",
    memberSince: "Client since 2022"
  },
  {
    image: user,
    quote: "The transformation journey with Veer has been amazing. His diet plans are practical and sustainable. I've not just lost weight but learned how to maintain a healthy lifestyle.",
    name: "Rajesh Verma",
    memberSince: "Client since 2021"
  },
  {
    image: user,
    quote: "From a beginner to now competing in bodybuilding, Veer's guidance has been instrumental. His expertise in contest prep and posing is outstanding!",
    name: "Deepak Sharma",
    memberSince: "Client since 2020"
  }
];

const videoTestimonials = [
  {
    videoUrl: video1,
    thumbnail: user,
    name: "Ishita",
    title: "Lost 25kg in 6 months",
    description: "From struggling with weight to achieving my dream physique"
  },
  {
    videoUrl: video2,
    thumbnail: user,
    name: "Manpreet",
    title: "Complete Body Transformation",
    description: "My journey from skinny to strong and confident"
  },
  {
    videoUrl: video3,
    thumbnail: user,
    name: "Anjali",
    title: "Muscle Building Journey",
    description: "Gained 15kg of lean muscle mass in 8 months"
  },
  {
    videoUrl: video4,
    thumbnail: user,
    name: "Neha Singh",
    title: "Strength Training Success",
    description: "From beginner to advanced powerlifting"
  },
  {
    videoUrl: video4,
    thumbnail: user,
    name: "Neha Singh",
    title: "Strength Training Success",
    description: "From beginner to advanced powerlifting"
  },
  {
    videoUrl: video5,
    thumbnail: user,
    name: "Saloni",
    title: "Strength Training Success",
    description: "From beginner to advanced powerlifting"
    },
    {
    videoUrl: video6,
    thumbnail: user,
    name: "Riya",
    title: "Strength Training Success",
    description: "From beginner to advanced powerlifting"
  },
  {
    videoUrl: video8,
    thumbnail: user,
    name: "Priya Singh",
    title: "Strength Training Success",
    description: "From beginner to advanced powerlifting"
  },
  {
    videoUrl: video9,
    thumbnail: user,
    name: "Ridima",
    title: "Strength Training Success",
    description: "From beginner to advanced powerlifting"
  },
  {
    videoUrl: video10,
    thumbnail: user,
    name: "Idha",
    title: "Strength Training Success",
    description: "From beginner to advanced powerlifting"
  },
  {
    videoUrl: video11,
    thumbnail: user,
    name: "Neha Singh",
    title: "Strength Training Success",
    description: "From beginner to advanced powerlifting"
  },
  {
    videoUrl: video12,
    thumbnail: user,
    name: "Aman",
    title: "Strength Training Success",
    description: "From beginner to advanced powerlifting"
  }

];

function VideoGrid() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleVideoPlay = (event, index) => {
    const videos = document.querySelectorAll('video');
    const clickedVideo = event.target;
    
    videos.forEach((video) => {
      if (video !== clickedVideo) {
        video.pause();
      }
    });
    
    setCurrentlyPlaying(index);
  };

  const nextVideo = () => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => video.pause());
    setCurrentlyPlaying(null);
    setCurrentSlide((prev) => 
      prev + 1 >= videoTestimonials.length ? 0 : prev + 1
    );
  };

  const prevVideo = () => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => video.pause());
    setCurrentlyPlaying(null);
    setCurrentSlide((prev) => 
      prev - 1 < 0 ? videoTestimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev + 4 >= videoTestimonials.length ? 0 : prev + 4
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev - 4 < 0 ? 
      Math.floor((videoTestimonials.length - 1) / 4) * 4 : 
      prev - 4
    );
  };

  // Desktop view shows 4 videos, mobile shows 1
  const visibleVideos = isMobile 
    ? [videoTestimonials[currentSlide]]
    : videoTestimonials.slice(currentSlide, currentSlide + 4);

  return (
    <div className="relative w-full max-w-[90rem] mx-auto my-4 sm:my-8 lg:my-16">
      <h3 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-12 relative px-4">
        <span className="text-primary">Success</span> Stories
        <div className="absolute w-12 sm:w-16 lg:w-24 h-1 bg-primary left-1/2 -translate-x-1/2 bottom--4"></div>
      </h3>
      
      <div className="relative px-2 sm:px-8 lg:px-12">
        {/* Navigation Buttons */}
        <button
          onClick={isMobile ? prevVideo : prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary/80 text-white p-2 sm:p-3 rounded-full hover:bg-primary transition-colors z-40"
          aria-label="Previous video"
        >
          <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Video Grid/Single Video */}
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'} gap-3 sm:gap-6`}>
          {visibleVideos.map((video, index) => (
            <div 
              key={isMobile ? currentSlide : currentSlide + index} 
              className="relative h-[480px] sm:h-[300px] lg:h-[400px] bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <video
                className="w-full h-full object-cover"
                src={video.videoUrl}
                poster={video.thumbnail}
                controls
                playsInline
                onPlay={(e) => handleVideoPlay(e, isMobile ? currentSlide : currentSlide + index)}
              />

              {/* Video Info Overlay */}
              <div className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white z-20 bg-gradient-to-t from-black/80 to-transparent transform transition-transform duration-300 
                ${currentlyPlaying === (isMobile ? currentSlide : currentSlide + index) ? 'translate-y-full' : 'translate-y-full group-hover:translate-y-0'}`}
              >
                <h4 className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1">
                  {video.name}
                </h4>
                <p className="text-primary font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">
                  {video.title}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  {video.description}
                </p>
              </div>

              {/* Play Button Overlay */}
              <div className={`absolute inset-0 flex items-center justify-center z-30 pointer-events-none transition-opacity
                ${currentlyPlaying === (isMobile ? currentSlide : currentSlide + index) ? 'opacity-0' : 'group-hover:opacity-0'}`}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/80 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={isMobile ? nextVideo : nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary/80 text-white p-2 sm:p-3 rounded-full hover:bg-primary transition-colors z-40"
          aria-label="Next video"
        >
          <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1 sm:gap-2 mt-4 sm:mt-6">
          {Array.from({ length: isMobile ? videoTestimonials.length : Math.ceil(videoTestimonials.length / 4) }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const videos = document.querySelectorAll('video');
                videos.forEach(video => video.pause());
                setCurrentlyPlaying(null);
                setCurrentSlide(isMobile ? i : i * 4);
              }}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                (isMobile ? currentSlide : Math.floor(currentSlide / 4)) === i 
                  ? 'bg-primary w-4 sm:w-6' 
                  : 'bg-gray-300 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <h2 className="text-center font-header md:text-5xl text-2xl  font-bold text-primary mb-16 relative">
          Client Transformations
          <div className="absolute w-32 h-1 bg-primary left-1/2 -translate-x-1/2 bottom--6"></div>
        </h2>

        {/* Video Grid */}
        <VideoGrid />

        {/* Written Testimonials */}
        <div className="grid grid-cols-1 gap-8 pt-16 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img 
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary transition-all duration-300" 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-primary/0 transition-all duration-300"></div>
                </div>
              </div>
              <blockquote className="text-center mb-6">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</p>
                <p className="text-primary font-medium">{testimonial.memberSince}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;