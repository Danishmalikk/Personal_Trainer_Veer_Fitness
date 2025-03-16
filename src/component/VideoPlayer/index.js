import React from "react";
import { VideoPlayer } from "@graphland/react-video-player";

const VideoPlay = () => {
  const videoSources = [
    {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      type: "video/mp4",
    },
    // Add more video sources as needed
  ];

  const videoProps = {
    theme: "city", // 'city', 'fantasy', 'forest', 'sea'
    height: "100%",
    width: "100%",
    autoPlay: false,
    loop: false,
    sources: videoSources,
    controlBar: {
      skipButtons: {
        forward: 5,
        backward: 5,
      },
    },
    playbackRates: [0.5, 1, 1.5, 2],
    disablePictureInPicture: false,
    onReady: () => {
      console.log("Video player is ready!");
    },
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl">
          <VideoPlayer {...videoProps} />
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Transform Your Body With Us
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Watch our transformation stories and learn about our training methods
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
