import { useCallback, useRef, useState } from "react";
import Play from "../../../assets/play.png";
import classes from "./VideoPlayer.module.css";

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const playOrPause = useCallback(() => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, []);

  const onPlay = useCallback(() => setIsPlaying(true), []);

  const onPause = useCallback(() => setIsPlaying(false), []);

  return (
    <div className={classes["video-wrapper"]}>
      <video
        onPlay={onPlay}
        onPause={onPause}
        ref={videoRef}
        className={classes.video}
        src={src}
      />
      <div className={classes.controls} onClick={playOrPause}>
        <img
          src={Play}
          alt="play button"
          className={`${classes["video-control"]} ${
            isPlaying ? classes["control-hidden"] : classes["control-shown"]
          }`}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
