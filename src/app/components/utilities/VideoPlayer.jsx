'use client';

import YouTube from 'react-youtube';

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: '370',
    height: '250',
  };

  return (
    <div className=" mt-4 ">
      <h1 className="text-cyan-950 font-bold mb-2">Watch Trailer</h1>
      <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} onError={() => alert('Video is broken, please try later')} />
    </div>
  );
};

export default VideoPlayer;
