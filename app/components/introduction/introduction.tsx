import Image from "next/image";
import Section from "../common/section";
import styles from "./introduction.module.css";

export default function Introduction() {
  return (
    <Section title="What is recursion">
      <div className={styles.introFlow}>
        <div className={styles.floatImage}>
          <Image
            src="/droste.jpg"
            alt="A visual form of recursion known as the Droste effect. In this image designed by Jan Misset in 1904, a woman holds an object that contains a smaller image of her holding an identical object, which in turn contains a smaller image of herself holding an identical object, and so forth."
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
        </div>

        <div className={styles.introText}>
          <p>Recursion is a process in which something refers to itself in order to continue. Instead of moving forward in a straight line, a recursive process turns inward, applying the same rule again and again, thus each step depending on a previous version of itself.</p>
          <p>Recursion is often confused with repetition, but the two are not the same. Repetition copies the same action without change. Recursion, on the other hand, carries information forward. Each iteration is shaped by what came before it. Because of this, recursion can produce complexity from simplicity, and structure from a single rule.</p>
          <p>Every recursive process requires a stopping point, known as a base case. Without it, recursion goes into infinity. This balance between continuation and termination is what makes recursion powerful, but also fragile.</p>
          <p>I find recursion interesting because it appears everywhere once you start looking for it: in mathematics, symbols, natural forms, and systems of feedback. It feels both logical and poetic, a way of understanding how patterns persist, evolve, and sometimes trap themselves. I think that recursion is not just a technical concept, but a way of thinking about how things return to themselves and evolve themselves based on previous events.</p>
          <p>Going forward, I will present some recursion examples I found interesting.</p>
        </div>
      </div>
    </Section>
  )
}