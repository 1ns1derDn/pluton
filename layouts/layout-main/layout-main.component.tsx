"use client";
// libs
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
//types
import { LayoutMainProps } from "./layout-main.types";

//styles
import styles from "./layout-main.module.css";
import { Button, Container, Logo } from "@/components";
import { useAuth } from "@/context";

const backgrounds: any = {
  ["/meditation-of-meeting"]: "url(/backgrounds/medition.png)",
  ["/pluton-meditation"]: "url(/backgrounds/pluton.png)",
};

export function LayoutMain({ className, children, ...otherProps }: LayoutMainProps) {
  const pathname = usePathname();
  const { logout } = useAuth();
  const { isAuth } = useAuth();
  return (
    <main
      className={cn([styles.layoutMain, className])}
      {...otherProps}
      style={{ backgroundImage: backgrounds[pathname] }}
    >
      <Container>
        <div className={styles.wrapper}>
          <Link href="/courses">
            <Logo className={styles.logo} />
          </Link>
          {isAuth && (
            <Button className={styles.button} onClick={logout}>
              Выход
            </Button>
          )}
        </div>

        {children}
      </Container>
      <div id="dialog" />
    </main>
  );
}
