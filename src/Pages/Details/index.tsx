import React, { useState } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { Focusable } from "react-js-spatial-navigation";

const Details: React.FC = () => {
  const { videoId } = useParams();
  const [player, setPlayer] = useState<any>(null);

  const opts = {
    height: "576",
    width: "1024",
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 0,
      modestbranding: 1,
      enablejsapi: 1,
      showinfo: 0,
    },
  };

  const onReady = (event: any) => {
    event.target.pauseVideo();
    setPlayer(event.target);
  };

  const play = () => {
    player.playVideo();
  };

  const pause = () => {
    player.pauseVideo();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <YouTube videoId={videoId} opts={opts as any} onReady={onReady} />

      <div>
        <Focusable
          onClickEnter={() => {
            play();
          }}
        >
          <div
            style={{
              backgroundColor: "#ff2020",
              color: "#ffffff",
              padding: "10px",
              marginBottom: "5px",
            }}
            onClick={() => {
              play();
            }}
          >
            play
          </div>
        </Focusable>
        <Focusable
          onClickEnter={() => {
            pause();
          }}
        >
          <div
            style={{
              backgroundColor: "#ff2020",
              color: "#ffffff",
              padding: "10px",
            }}
            onClick={() => {
              pause();
            }}
          >
            pause
          </div>
        </Focusable>
      </div>
    </div>
  );
};

export default Details;
