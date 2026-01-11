import Image from "next/image";
import Section from "../common/section";
import FibonacciExplorer from "./fibonacciExplorer";
import styles from "./goldenRatio.module.css";

export default function GoldenRatio() {
  return (
    <Section>
      <h2>Golden Ratio</h2>

      <div className={styles.introFlow}>
        <div className={styles.floatImage}>
          <Image 
            src="/golden_spiral.gif"
            alt="A image of a snake eating its own tail."
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
            unoptimized
          />
        </div>

        <div className={styles.introText}>
          <p>The golden ratio is a mathematical relationship often associated with balance, proportion, and harmony. It appears when something is divided into two parts such that the ratio of the object to the larger part is the same as the ratio of the larger part to the smaller. This value is approximated to be 1.618034... . This proportion has been observed in art, architecture, and natural forms, and is frequently linked to aesthetic appeal.</p>
          <p>While the golden ratio itself is not recursive, it emerges from recursive processes. One of the most well-known examples is the Fibonacci sequence, in which each number is defined by the sum of the two numbers before it. As this sequence continues, the ratio between successive numbers approaches the golden ratio. In this way, a simple recursive rule gradually produces a stable and recognizable structure.</p>
          <p>I find this relationship interesting because it shows how recursion can lead to convergence rather than infinity. Unlike the ouroboros, which loops endlessly, the recursive process behind the golden ratio moves toward balance. Each step depends on the previous ones, but the system stabilizes instead of collapsing or spiraling outward.</p>
          <p>The golden ratio suggests that recursion does not always result in repetition or excess. Given the right conditions, recursive growth can create order, proportion, and coherence. I think this is in stark contrast to more obvious recursive symbols, showing that recursion can be subtle, hidden, and structural rather than overtly circular.</p>
        </div>
      </div>

      <FibonacciExplorer />
    </Section>
  )
}