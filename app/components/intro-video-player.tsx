"use client";

import { useEffect, useRef } from "react";

export function IntroVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let resumeWhenVisible = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const videoIsVisible = entry.intersectionRatio >= 0.25;
        if (!videoIsVisible) {
          if (!video.paused && !video.ended) {
            resumeWhenVisible = true;
            video.pause();
          }
        } else if (resumeWhenVisible) {
          resumeWhenVisible = false;
          void video.play().catch(() => {});
        }
      },
      { threshold: [0, 0.25] },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-contain"
      controls
      playsInline
      preload="metadata"
      poster="/images/intro-video-thumbnail.jpeg"
      onEnded={(event) => {
        event.currentTarget.currentTime = 0;
        event.currentTarget.load();
      }}
    >
      <source src="/videos/intro-video.mp4" type="video/mp4" />
      Your browser does not support embedded videos.
    </video>
  );
}
