"use client";

// libs
import React from "react";
import Player from "react-h5-audio-player";
import cn from "classnames";
import "react-h5-audio-player/lib/styles.css";
//types
import { PlayerAudioProps } from "./player-audio.types";

//styles
import styles from "./player-audio.module.css";

export function PlayerAudio({ className, children, ...otherProps }: PlayerAudioProps) {
  return (
    <Player
      className={cn([styles.playerAudio, className])}
      autoPlayAfterSrcChange={false}
      showDownloadProgress={false}
      defaultDuration="00:00"
      defaultCurrentTime="00:00"
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
    />
  );
}
