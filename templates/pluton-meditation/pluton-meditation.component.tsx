"use client";
// libs
import React from "react";
import cn from "classnames";

//types
import { MeditationMeetingProps } from "./pluton-meditation.types";

//styles
import styles from "./pluton-meditation.module.css";

//components
import { PlayerAudio, Typography } from "@/components";

//organizm
import { Feedback } from "@/organizm";

import ReactPlayer from "react-player";

export function PlutonMeditation({ className, children, ...otherProps }: MeditationMeetingProps) {
  return (
    <div className={cn([styles.meditationMeeting, className])} {...otherProps}>
      <Typography className={styles.title} variant="title">
        PlutoN Meditation
      </Typography>
      <Typography className={styles.title} variant="text">
        Привет, здесь находится урок по медитации. В практиках очень важно понять саму суть и делать
        их правильно - так результат случится гораздо быстрее. Всю информация о медитациях я
        подготовила для тебя в этом видео. Приятного просмотра!
      </Typography>

      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.reactPlayer}
          url={"https://www.youtube.com/watch?v=_Z5coMfFloc"}
          controls
          width="100%"
          height="100%"
        />
      </div>

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
          <PlayerAudio className={styles.itemAudio} />
          <img className={styles.image} src="/number_11.jpeg" alt="img" />
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
          <PlayerAudio className={styles.itemAudio} />
          <img className={styles.image} src="/number_11.jpeg" alt="img" />
        </div>
      </div>

      <Feedback />
    </div>
  );
}
