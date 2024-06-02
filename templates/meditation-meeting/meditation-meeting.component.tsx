// libs
import React from "react";
import cn from "classnames";

//types
import { MeditationMeetingProps } from "./meditation-meeting.types";

//styles
import styles from "./meditation-meeting.module.css";

export function MeditationMeeting({ className, children, ...otherProps }: MeditationMeetingProps) {
  return (
    <div className={cn([styles.meditationMeeting, className])} {...otherProps}>
      {children}
    </div>
  );
}
