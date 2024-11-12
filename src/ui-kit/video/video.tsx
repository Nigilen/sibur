'use client'

import { FC, useState } from 'react';
import styles from './video.module.css';
import Image, { StaticImageData } from 'next/image';
import cn from 'classnames';
import playBtn from '@/src/assets/decor/play-btn.svg';

interface Props {
  video: string;
  preloader: StaticImageData;
  classNames?: string;
};

export const Video: FC<Props> = ({ video, preloader, classNames }) => {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <div className={cn(styles.video, classNames)}>
      {!isPlay ? 
        <div className={styles.preloader} style={{backgroundImage: `url(${preloader.src})`}}>
          <button
            className={styles.play}
            onClick={() => setIsPlay(!isPlay)}
          >
            <Image className={styles.play_icon} src={playBtn} width={94.37} height={96} alt="" unoptimized />
          </button>
        </div>
      : 
        <iframe
          className={styles.video_iframe}
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