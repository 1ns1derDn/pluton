"use client";
// libs
import React, { useEffect, useState } from "react";
import cn from "classnames";

//components
import { Typography } from "@/components";

//types
import { CoursesProps } from "./courses.types";

//styles
import styles from "./courses.module.css";
import { CourseCard } from "@/molecules";

// api
import { serverBoughtSubscription } from "@/services/bought-subscription.api";
import { IBoughtSubscription } from "@/types/bought-subscription.types";

export function Courses({ className, children, ...otherProps }: CoursesProps) {
  const [access, setAccess] = useState<IBoughtSubscription>();

  const loadData = async () => {
    const response = await serverBoughtSubscription();
    setAccess(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={cn([className])} {...otherProps}>
      <Typography className={styles.titel} variant="title">
        Ваши курсы:
      </Typography>

      <ul className={styles.list}>
        {access?.pluton_meditation && (
          <li className={styles.item}>
            <CourseCard imageSrc="/meditation-1.jpg" buttonHref="/pluton-meditation" title="PlutoN Meditation" />
          </li>
        )}

        {access?.love_meditation && (
          <li className={styles.item}>
            <CourseCard
              imageSrc="/meditation-2.png"
              buttonHref="/meditation-of-meeting"
              title="Медитация на встречу второй половинки"
            />
          </li>
        )}
      </ul>
    </div>
  );
}
