import { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import classes from "./FooterAd.module.css";
import { VideoList } from "../../../DataFiles/videos";
import FooterAdDetail from "./FooterAdDetail";
let videoObj;

const FooterAd = () => {
  const [showDetail, setShowDetail] = useState(false);

  const adDetailHandler = (video) => {
    setShowDetail(true);
    videoObj = video;
  };

  return (
    <Fragment>
      <div className={classes.card}>
        {VideoList.map((video, index) => (
          <div
            className={classes["card-frame"]}
            key={index}
            onClick={() => adDetailHandler(video)}
          >
            {<div className={classes.hoverinfo}>{video.text}</div>}
            <ReactPlayer width="19.2vw" height="20vw" url={video.url} />
          </div>
        ))}
      </div>
      {showDetail && (
        <FooterAdDetail video={videoObj} onShowDetail={setShowDetail} />
      )}
    </Fragment>
  );
};

export default FooterAd;
