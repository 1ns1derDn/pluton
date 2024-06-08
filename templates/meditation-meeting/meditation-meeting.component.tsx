// libs
import React from "react";
import cn from "classnames";

//types
import { MeditationMeetingProps } from "./meditation-meeting.types";

//styles
import styles from "./meditation-meeting.module.css";
import { Button, PlayerAudio, Textarea, Typography } from "@/components";

export function MeditationMeeting({ className, children, ...otherProps }: MeditationMeetingProps) {
  return (
    <div className={cn([styles.meditationMeeting, className])} {...otherProps}>
      <div className={styles.wrapper}>
        <Typography className={styles.title} variant="title">
          Медитация на встречу второй половинки
        </Typography>
        <PlayerAudio className={styles.audio} />
        <Typography variant="text">
          Привет, моя дорогая. Я подготовила для тебя специальную медитацию, <br />
          которая поможет ускорить встречу с твоей второй половинкой.
        </Typography>
        <br />
        <Typography variant="text">
          Мы есть энергия. И люди притягиваются к нам тоже на энергию. Эта практика поможет тебе
          обрести внутреннюю гармонию, достигнуть определенных частот, на которые придет твой
          идеальный мужчина.
        </Typography>
        <br />
        <Typography variant="text">Инструкция по медитации:</Typography>
        <Typography as="ul" variant="text">
          <li>Делай ее регулярно минимум в течение месяца.</li>
          <li> Найди тихое место, где никто тебя не будет отвлекать. </li>
          <li>Лучше это делать в наушниках.</li>
          <li>
            Рекомендую зажигать свечку с любимым ароматом при каждой медитации - пусть это станет
            твоим ритуалом.
          </li>
          <li>Медитировать лучше утром после пробуждения или перед сном.</li>
        </Typography>
        <Typography variant="text">
          Приятного прослушивания и скорейшей встречи с твоей второй половинкой!
        </Typography>
        <br />
        <Typography variant="text">С любовью, Юлия</Typography>
      </div>
      <Button className={styles.btn}>PlutoN Consultation</Button>

      <form className={styles.form}>
        <Typography className={styles.title} variant="subtitle">
          Буду благодарна за оставленный отзыв
        </Typography>
        <Textarea />
        <Button>Отправить</Button>
      </form>
    </div>
  );
}
