// libs
import React from "react";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
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
      <Image
        className={styles.image}
        width={340}
        height={200}
        quality={100}
        src={imageSrc}
        priority
        alt="Картинка"
      />
      <Link href={buttonHref} passHref legacyBehavior>
        <Button as="a">Подробнее</Button>
      </Link>
    </div>
  );
}
