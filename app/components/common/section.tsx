import { ReactNode } from "react";
import styles from "./section.module.css";

export default function Section({ children, title } : { children: ReactNode; title?: string; }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  )
}