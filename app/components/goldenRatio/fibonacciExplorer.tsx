import { useMemo, useState } from "react";
import styles from "./goldenRatio.module.css";

export default function FibonacciExplorer({
  initial = [1, 1],
  maxTerms = 50,
}: {
  initial?: number[];
  maxTerms?: number;
}) {
  const [seq, setSeq] = useState<number[]>(initial);
  const phi = (1 + Math.sqrt(5)) / 2;
  const canAdd = seq.length < maxTerms;

  function addNext() {
    if (!canAdd) return;
    const n = seq.length;
    const next = seq[n - 1] + seq[n - 2];
    setSeq((prev) => [...prev, next]);
  }

  function reset() {
    setSeq(initial);
  }

  const stats = useMemo(() => {
    if (seq.length < 2) return null;
    const a = seq[seq.length - 2];
    const b = seq[seq.length - 1];
    const ratio = b / a;
    const diff = Math.abs(ratio - phi);
    return { a, b, ratio, diff };
  }, [seq, phi]);

  return (
    <section aria-labelledby="fib-title" className={styles.fibCard}>
      <h4 id="fib-title" className={styles.fibTitle}>
        Fibonacci (interactive)
      </h4>

      <p className={styles.fibLead}>
        Each term is the sum of the two before it:{" "}
        <span className={styles.mono}>F(n) = F(n−1) + F(n−2)</span>. As the sequence grows,
        the ratio of consecutive terms approaches{" "}
        <span className={styles.mono}>φ ≈ {phi.toFixed(6)}</span>.
      </p>

      <div role="group" aria-label="Fibonacci controls" className={styles.controls}>
        <button
          type="button"
          onClick={addNext}
          disabled={!canAdd}
          aria-disabled={!canAdd}
          className={styles.button}
        >
          Generate next term
        </button>

        <button type="button" onClick={reset} className={styles.button}>
          Reset
        </button>

        <span className={styles.terms}>
          Terms: {seq.length}/{maxTerms}
        </span>
      </div>

      <div aria-live="polite" className={styles.sequence}>
        {seq.join("  →  ")}
      </div>

      {stats && (
        <div className={styles.stats}>
          <div>
            <strong>Last ratio</strong>{" "}
            <span className={styles.mono}>
              {stats.b} / {stats.a} = {stats.ratio.toFixed(6)}
            </span>
          </div>
          <div>
            <strong>Distance from φ</strong>{" "}
            <span className={styles.mono}>
              |{stats.ratio.toFixed(6)} − {phi.toFixed(6)}| = {stats.diff.toFixed(6)}
            </span>
          </div>
        </div>
      )}

      {!canAdd && (
        <p className={styles.baseCaseNote}>
          Base case reached (depth limit): you’ve generated the maximum number of terms.
        </p>
      )}
    </section>
  );
}
