// libs
import React from "react";
import cn from "classnames";

//components
import { Typography } from "@/components";

//types
import { CoursesProps } from "./courses.types";

//styles
import styles from "./courses.module.css";
import { CourseCard } from "@/molecules";

export function Courses({ className, children, ...otherProps }: CoursesProps) {
  return (
    <div className={cn([className])} {...otherProps}>
      <Typography className={styles.titel} variant="title">
        Ваши курсы:
      </Typography>

      <ul className={styles.list}>
        <li className={styles.item}>
          <CourseCard imageSrc="/meditation-1.jpg" buttonHref="/" title="PlutoN Meditation" />
        </li>
        <li className={styles.item}>
          <CourseCard
            imageSrc="/meditation-2.png"
            buttonHref="/"
            title="Медитация на встречу второй половинки"
          />
        </li>
      </ul>
    </div>
  );
}
