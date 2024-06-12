"use client";
// libs
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
//types
import { LayoutMainProps } from "./layout-main.types";

//styles
import styles from "./layout-main.module.css";
import { Container, Logo } from "@/components";

const backgrounds: any = {
  ["/meditation-of-meeting"]: "url(/backgrounds/medition.png)",
  ["/pluton-meditation"]: "url(/backgrounds/pluton.png)",
};

export function LayoutMain({ className, children, ...otherProps }: LayoutMainProps) {
  const pathname = usePathname();
  return (
    <main
      className={cn([styles.layoutMain, className])}
      {...otherProps}
      style={{ backgroundImage: backgrounds[pathname] }}
    >
      <Container>
        <Link href="/courses">
          <Logo className={styles.logo} />
        </Link>

        {children}
      </Container>
      <div id="dialog" />
    </main>
  );
}
