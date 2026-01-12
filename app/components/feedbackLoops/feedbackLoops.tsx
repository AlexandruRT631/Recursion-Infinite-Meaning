import Section from "../common/section";
import styles from "./feedbackLoops.module.css";

export default function FeedbackLoops() {
  return (
    <Section title="Feedback loops">
      <p>A feedback loop is a system in which the output of a process becomes an input to the same process. Instead of ending after one cycle, the result returns and influences what happens next. In this sense, feedback loops are recursion extended through time: the system continuously updates itself using its own outcomes.</p>
      <p>In programming, feedback loops appear in different forms. Recursive functions are a direct expression of this idea, where a function calls itself with modified input until a base case is reached. Each call depends on the result of the previous one. Without a stopping condition, the function does not resolve and instead collapses into infinite recursion.</p>
      <p>Feedback loops also appear at a larger scale in software systems. When training machine learning models, especially neural networks, the model produces an output that is evaluated against a target. The error from that evaluation is then fed back into the system to adjust the model’s parameters. This process repeats many times, gradually shaping the model’s behavior.</p>
      <p>While this process is not recursion in the strict mathematical sense, it shares the same core structure: outputs become inputs, and patterns reinforce themselves through repetition. Small biases or errors can be amplified through positive feedback, while corrective mechanisms act as negative feedback to stabilize learning.</p>
      <p>I find this connection interesting because it shows how recursive thinking scales from code to systems. Whether in a function, a program, or a learning model, feedback loops reveal how behavior emerges through repetition. This also highlights the importance of limits and intervention, a reminder that without constraints or reflection, recursive systems, both technical and human, can spiral out of control.</p>
     
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/GRvtWan5cTM?start=166"
          title="Feedback loops and learning systems"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div></Section>
  )
}