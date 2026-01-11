import { ReactNode } from "react";
import styles from "./section.module.css";

export default function Section({ children } : { children: ReactNode; }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>{children}</div>
    </section>
  )
}