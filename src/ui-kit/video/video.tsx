'use client'

import { FC, useEffect, useRef, useState } from 'react';
import styles from './video.module.css';
import Image, { StaticImageData } from 'next/image';
import cn from 'classnames';
import playBtn from '@/src/assets/decor/play-btn.svg';

interface Props {
  video: string;
  preloader?: StaticImageData;
  classNames?: string;
};

export const Video: FC<Props> = ({ video, preloader, classNames }) => {
  const [isPlay, setIsPlay] = useState(false);
  const ref = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.contentWindow!.postMessage(JSON.stringify({
        type: 'player:play',
        data: {}
      }), '*')
    }
  }, [isPlay === true]);

  const handlePlay = () => {
    setIsPlay(!isPlay);
  };

  return (
    <div className={cn(styles.video, classNames)}>
      {!isPlay &&
        <div className={styles.preloader} style={preloader && {backgroundImage: `url(${preloader?.src})`}}>
          <button
            className={styles.play}
            onClick={handlePlay}
          >
            <Image className={styles.play_icon} src={playBtn} width={94.37} height={96} alt="" unoptimized />
          </button>
        </div>
      }

      {isPlay &&
        <iframe
          ref={ref}
          className={styles.video_iframe}
          width="100%"
          height="100%"
          src={video}
          allow="clipboard-write, autoplay"
          allowFullScreen
        ></iframe>
      }
    </div>
  );
};