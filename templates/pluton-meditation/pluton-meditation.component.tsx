"use client";
// libs
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import dynamic from "next/dynamic";

//types
import { MeditationMeetingProps } from "./pluton-meditation.types";
import { DialogRef } from "@/components/dialog/dialog.types";
//styles
import styles from "./pluton-meditation.module.css";

//components
import { PlayerAudio, Typography, Dialog, Button } from "@/components";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

//organizm
import { Feedback } from "@/organizm";
import { getDopNumbers } from "@/utils/dop-numebrs";
import { serverMeditation } from "@/services";

export function PlutonMeditation({ className, children, ...otherProps }: MeditationMeetingProps) {
  const [image, setImage] = useState<string>();
  const controller = useRef<DialogRef>(null);
  const playerRef = useRef(null);
  const [play, setPlay] = useState<boolean>(false);
  const [data, setData] = useState<{
    image_1: string;
    image_2: string;
    audio_1: string;
    audio_2: string;
  }>();

  const handleClick = (image: string) => () => {
    setImage(image);
    controller.current?.open();
  };

  const load = async () => {
    const numbers = getDopNumbers("20.12.1998");
    const response = await serverMeditation(numbers[1], numbers[3]);

    setData(response.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className={cn([styles.meditationMeeting, className])} {...otherProps}>
      <Typography className={styles.title} variant="title">
        PlutoN Meditation
      </Typography>
      <Typography className={styles.text} variant="text">
        Привет, здесь находится урок по медитации. В практиках очень важно понять саму суть и делать
        их правильно - так результат случится гораздо быстрее. Всю информация о медитациях я
        подготовила для тебя в этом видео. Приятного просмотра!
      </Typography>

      {play ? (
        <div className={styles.playerWrapper}>
          <ReactPlayer
            playing={true}
            className={styles.reactPlayer}
            ref={playerRef}
            url={"https://youtu.be/9ziK-pYgU2Q?si=mDWT7DiFyQOj1-2A"}
            config={{
              youtube: {
                playerVars: {},
              },
            }}
            controls
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <div className={styles.intro}>
          <img src="intro-youtube.jpg" alt="intro youtube" />
          <svg
            className={styles.introPlay}
            width="116"
            height="116"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setPlay(true)}
          >
            <circle cx="58" cy="58" r="58" fill="#E0D0B9" />
            <path
              d="M98.5 53.1699C101.833 55.0944 101.833 59.9056 98.5 61.8301L42.25 94.3061C38.9167 96.2306 34.75 93.825 34.75 89.976L34.75 25.024C34.75 21.175 38.9167 18.7694 42.25 20.6939L98.5 53.1699Z"
              fill="#E8FEFF"
            />
          </svg>
        </div>
      )}

      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Typography className={styles.itemTitle} variant="title">
            Базовое число:
          </Typography>
          <Typography className={styles.itemText} variant="text">
            Базовое число указывает нам наш жизненный путь, а именно к чему мы должны придти в
            течение жизни - наше предназначение. В нем зашифрованы все наши врожденные качества и
            таланты, которые нам нужно раскрыть. В нем зашифрован наш характер, предрасположенности,
            наши сильные и слабые стороны( «плюсы и минусы»), а также основные задачи стоящие перед
            нами в жизни. Как это расшифровать? В плюсе мы правильно раскрываем свой потенциал и
            идеи своим предназначенным путем. В минусе мы негативно проживаем свою матрицу. Человек
            никогда не сможет раскрыть свой потенциал и решить задачи. Очень важно это отследить и
            вывести в плюс.
          </Typography>
          <PlayerAudio
            src={`https://adminka.space/${data?.audio_1}`}
            className={styles.itemAudio}
          />
          <img
            className={styles.image}
            src={`https://adminka.space/${data?.image_1}`}
            alt="img"
            onClick={handleClick(`https://adminka.space/${data?.image_1}`)}
          />
        </div>

        <div className={styles.item}>
          <Typography className={styles.itemTitle} variant="title">
            Базовое число:
          </Typography>
          <Typography className={styles.itemText} variant="text">
            Базовое число указывает нам наш жизненный путь, а именно к чему мы должны придти в
            течение жизни - наше предназначение. В нем зашифрованы все наши врожденные качества и
            таланты, которые нам нужно раскрыть. В нем зашифрован наш характер, предрасположенности,
            наши сильные и слабые стороны( «плюсы и минусы»), а также основные задачи стоящие перед
            нами в жизни. Как это расшифровать? В плюсе мы правильно раскрываем свой потенциал и
            идеи своим предназначенным путем. В минусе мы негативно проживаем свою матрицу. Человек
            никогда не сможет раскрыть свой потенциал и решить задачи. Очень важно это отследить и
            вывести в плюс.
          </Typography>
          <PlayerAudio
            src={`https://adminka.space/${data?.audio_2}`}
            className={styles.itemAudio}
          />
          <img
            className={styles.image}
            src={`https://adminka.space/${data?.image_2}`}
            alt="img"
            onClick={handleClick(`https://adminka.space/${data?.image_2}`)}
          />
        </div>
      </div>

      <Button className={styles.button} as="a" href="https://t.me/yuliyapluto" target="_black">
        PlutoN Consultation
      </Button>

      <Dialog ref={controller}>
        <img className={styles.imageBig} src={image} alt="image" />
      </Dialog>
      <Feedback />
    </div>
  );
}
