"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch("http://45.155.227.12:2052/live/1273519595/9287307569/99.m3u8?token=UlBIRkhIMG9sRnpkMTZD");
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, []);

  return (
    <div>
      <h1>My Custom Player</h1>
        <ReactPlayer
          width={500}
          height={400}
          url={"http://45.155.227.12:2052/live/1273519595/9287307569/99.m3u8?token=UlBIRkhIMG9sRnpkMTZD"}
          controls={true}
          light={false}
          pip={true}
        />
    </div>
  );
};

export default VideoPlayer;