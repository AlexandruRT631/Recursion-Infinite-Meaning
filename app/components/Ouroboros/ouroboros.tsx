import Image from "next/image";
import Section from "../common/section";
import styles from "./ouroboros.module.css";

export default function Ouroboros() {
  return (
    <Section title="Ouroboros">
      <div className={styles.introFlow}>
        <div className={styles.floatImage}>
          <Image 
            src="/ouroboros.jpg"
            alt="A image of a snake eating its own tail."
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
        </div>

        <div className={styles.introText}>
          <p>The ouroboros is an ancient symbol depicting a serpent consuming its own tail. Found across many cultures and historical periods, it has been used to represent cycles, eternity, destruction and renewal. The image is simple, but its meaning is dense: the beginning and the end collapse into the same form.</p>
          <p>As a symbol, the ouroboros is a visual metaphor for recursion. The snake’s action produces itself as its own result. There is no external input and no forward movement - only continuation through self-reference. Like a recursive function without a base case, it looping endlessly.</p>
          <p>What makes the ouroboros especially interesting to me is that it captures both the elegance and the danger of recursion. The loop can symbolize balance and regeneration, but it can also suggest stagnation or self-consumption. Without interruption or change, the process never resolves. It simply repeats itself.</p>
          <p>The ouroboros does not go forward, it survives by using itself.</p>
        </div>
      </div>
    </Section>
  )
}