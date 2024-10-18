'use client'

import { FC, useState } from 'react';
import styles from './video.module.css';

type Props = {
  video: string;
};

export const Video: FC<Props> = ({ video }) => {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <div className={styles.video}>
      {!isPlay ? 
        <div className={styles.preloader}>
          <button
            className={styles.play}
            onClick={() => setIsPlay(!isPlay)}
          >
            <img src="./play-btn.svg" alt="" />
          </button>
        </div>
      : 
        <iframe
          width="100%"
          height="100%"
          src={video}
          allow="clipboard-write"
          allowFullScreen
        ></iframe>
      }
    </div>
  );
};