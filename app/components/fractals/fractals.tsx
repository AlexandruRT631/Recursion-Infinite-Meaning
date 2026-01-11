"use client";

import Section from "../common/section";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import styles from "./fractals.module.css";

export default function Fractals() {
  return (
    <Section>
      <h2>Fractals</h2>
      <p>Fractals are geometric forms generated through recursive rules, where the same pattern repeats at different scales. Unlike traditional shapes, fractals reveal new detail the closer you look. Zooming in does not simplify the image - it reproduces the structure again, often endlessly.</p>
      <p>A single mathematical rule is applied repeatedly, and each iteration builds upon the last. This makes fractals a clear example of recursion made visible: the output of one step becomes the input for the next.</p>
      <p>I find fractals especially compelling because they resist completion. Unlike the golden ratio, which converges toward balance, fractals never resolve into a final form. There is no natural stopping point. Each level suggests another level beneath it, creating a sense of infinite depth contained within a finite space.</p>
      <p>Fractals appear not only in mathematics, but also in natural structures such as coastlines, plants, clouds, and branching systems. A well known example are snowflakes. These forms suggest that recursion is not just an abstract idea, but a practical method for organizing complexity.</p>
      <div className={styles.fractalWindow}>
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={40}
          centerOnInit
          wheel={{ step: 0.45 }}
          panning={{ velocityDisabled: true }}
          doubleClick={{ mode: "zoomIn", step: 0.7 }}
        >
          <TransformComponent
            wrapperStyle={{ width: "100%", height: "100%" }}
            contentStyle={{ width: "100%", height: "100%" }}
          >
            <div className={styles.fractalWorld}/>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </Section>
  )
}