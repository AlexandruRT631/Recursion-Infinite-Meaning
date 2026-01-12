"use client"
import Section from "./components/common/section";
import Introduction from "./components/introduction/introduction";
import Ouroboros from "./components/Ouroboros/ouroboros";
import Fractals from "./components/fractals/fractals";
import FeedbackLoops from "./components/feedbackLoops/feedbackLoops";
import GoldenRatio from "./components/goldenRatio/goldenRatio";

export default function Home() {
  return (
    <div>
      <main>
        <div className="pageTitle">
          <h1>Recursion</h1>
          <p>How simple rules create infinite meaning</p>
        </div>

        <Introduction />
        <Ouroboros />
        <GoldenRatio />
        <Fractals />        
        <FeedbackLoops />
        
        <Section>
          <h2>So...</h2>
          <p>Recursion describes how patterns repeat, but it also reveals where repetition must end. Across symbols, mathematics, natural forms, and systems, recursion appears as a powerful method for generating complexity. Yet in every example, its value depends on the presence of limits, balance, or intervention.</p>
          <p>The ouroboros shows recursion without resolution. The golden ratio shows recursion that converges. Fractals reveal recursion that expands beyond completion. Feedback loops demonstrate how recursive processes shape real systems over time. Together, these examples inspire me on how I understand repetition, as a structure that carries memory and consequence.</p>
          <p>For me, recursion is more than just a technical concept. It is a way of recognizing patterns in thinking, learning, and behavior. It explains how habits form, how systems stabilize or spiral, and how simple rules can produce outcomes far larger than their origins.</p>
          <p>Every recursive process eventually needs a base case. In understanding recursion, I have learned not only how patterns persist, but also when they should be allowed to end.</p>
        </Section>
      </main>
    </div>
  );
}
