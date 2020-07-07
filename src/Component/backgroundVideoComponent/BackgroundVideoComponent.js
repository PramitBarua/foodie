import React from "react";
import backgroundVideo from "../../Assets/Video/coverr-baker-pouring-flour-1586435075957.mp4";

import styles from "./BackgroundVideoComponent.module.scss";

function BackgroundVideoComponent() {
  return (
    <div className={styles.videoContainer}>
      <video data-test="backgroundVideo" loop autoPlay>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default BackgroundVideoComponent;
