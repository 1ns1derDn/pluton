// libs
import cn from "classnames";
import Link from "next/link";

//types
import { LayoutMainProps } from "./layout-footer.types";

//styles
import styles from "./layout-footer.module.css";
import { Container } from "@/components";

export function LayoutFooter({ className, children, ...otherProps }: LayoutMainProps) {
  return (
    <main className={cn([styles.layoutMain, className])} {...otherProps}>
      <div className={styles.wrapper}>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <Container>
            <div className={styles.inner}>
              <Link href="/oferta">Договор оферты</Link>
              <Link href="/privacy-policy">Политика конфиденциальности</Link>
            </div>
          </Container>
        </div>
      </div>
    </main>
  );
}
