import { HTMLAttributes } from "react";

export interface CourseCardProps extends HTMLAttributes<HTMLElement> {
  title: string;
  imageSrc: string;
  buttonHref: string;
}
