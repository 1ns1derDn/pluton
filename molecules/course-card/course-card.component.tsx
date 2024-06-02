// libs
import React from "react";
import cn from "classnames";
import Image from "next/image";
//types
import { CourseCardProps } from "./course-card.types";

//styles
import styles from "./course-card.module.css";

//component
import { Typography, Button } from "@/components";

export function CourseCard({
  className,
  children,
  buttonHref,
  title,
  imageSrc,
  ...otherProps
}: CourseCardProps) {
  return (
    <div className={cn([styles.courseCard, className])} {...otherProps}>
      <Typography className={styles.title} variant="subtitle">
        {title}
      </Typography>
      <Image className={styles.image} width={320} height={220} src={imageSrc} alt="Картинка" />
      <Button as="a" href={buttonHref}>
        Подробнее
      </Button>
    </div>
  );
}
