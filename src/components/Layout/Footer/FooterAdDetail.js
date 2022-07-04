import { Fragment, useState } from "react";
import Modal from "../../UI/Modal";
import VideoPlayer from "../../UI/video-player/VideoPlayer";
import classes from "./FooterAdDetail.module.css";
import { IoLogoInstagram } from "react-icons/io";

const ActionBar = () => {
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.info}>
          <div className={classes.title}>fatbros</div>
          <div className={classes.date}>June 13</div>
        </div>
        <div className={classes["insta-link"]}>
          <a
            href="https://www.instagram.com/reel/Ce0q2rBl1MZ/?utm_source=ig_web_copy_link"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoInstagram size="1.7vw" />
          </a>
        </div>
      </div>
      <div className={classes["insta-body"]}>
        <div className={classes.date}>Fat Fries 🌽🍟</div>
        <div className={classes.date}>🎥: @grabsport</div>
        <div className={classes.date}>
          📍2528 S FIGUEROA ST., LOS ANGELES 90007
        </div>
        <div className={classes.date}>
          📍2528 S FIGUEROA ST., LOS ANGELES 90007
        </div>
        <div className={classes.date}>
          📍2528 S FIGUEROA ST., LOS ANGELES 90007
        </div>
      </div>
    </div>
  );
};

const FooterAdDetail = ({ video, onShowDetail }) => {
  const [isModalOn, setIsModalOn] = useState(true);

  const closeModalHandler = () => {
    setIsModalOn(false);
    onShowDetail(false);
  };

  return (
    <Fragment>
      {isModalOn && (
        <Modal onClose={closeModalHandler}>
          <div className={classes.post}>
            <div className={classes["video-container"]}>
              <VideoPlayer src={video.url} />
            </div>
            <ActionBar />
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default FooterAdDetail;
