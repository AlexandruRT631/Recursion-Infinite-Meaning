"use client";

import Section from "../common/section";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import styles from "./fractals.module.css";
import { useIsMobile } from "../common/hooks/useIsMobile";
import Image from "next/image";

export default function Fractals() {
  const isMobile = useIsMobile();

  return (
    <Section title="Fractals">
      <p>Fractals are geometric forms generated through recursive rules, where the same pattern repeats at different scales. Unlike traditional shapes, fractals reveal new detail the closer you look. Zooming in does not simplify the image - it reproduces the structure again, often endlessly.</p>
      <p>A single mathematical rule is applied repeatedly, and each iteration builds upon the last. This makes fractals a clear example of recursion made visible: the output of one step becomes the input for the next.</p>
      <p>I find fractals especially compelling because they resist completion. Unlike the golden ratio, which converges toward balance, fractals never resolve into a final form. There is no natural stopping point. Each level suggests another level beneath it, creating a sense of infinite depth contained within a finite space.</p>
      <p>Fractals appear not only in mathematics, but also in natural structures such as coastlines, plants, clouds, and branching systems. A well known example are snowflakes. These forms suggest that recursion is not just an abstract idea, but a practical method for organizing complexity.</p>
      
      <noscript>
        <p>
          JavaScript is disabled, so the interactive fractal explorer is unavailable.
          </p>
        <img src="/fractal.svg" alt="Fractal pattern showing self-similarity." />
      </noscript>
      
      {isMobile ? (
        <figure className={styles.mobileFigure}>
          <Image
            src="/fractal.svg"
            alt="A fractal pattern demonstrating self-similarity at different scales."
            width={1200}
            height={900}
            sizes="100vw"
            className={styles.mobileImage}
          />
          <figcaption className={styles.mobileCaption}>
            On smaller screens, the fractal is shown as a static image. On larger screens, you can zoom and pan to explore the
            repeating structure.
          </figcaption>
        </figure>
      ) : (
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
              contentStyle={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className={styles.fractalWorld} />
            </TransformComponent>
          </TransformWrapper>
        </div>
      )}
    </Section>
  )
}