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

export function PlayerAudio({ className, children, src, ...otherProps }: PlayerAudioProps) {
  return (
    <Player
      className={cn([styles.playerAudio, className])}
      autoPlayAfterSrcChange={false}
      showDownloadProgress={false}
      defaultDuration="00:00"
      defaultCurrentTime="00:00"
      src={src}
    />
  );
}
