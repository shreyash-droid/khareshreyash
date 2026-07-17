"use client";

import { useState } from "react";

const WORK_STEPS = [
  {
    n: "01",
    title: "Discovery call",
    desc: "A short call to understand your goals, users, and constraints — no assumptions, just questions.",
  },
  {
    n: "02",
    title: "Research & wireframes",
    desc: "I map the flows and rough out low-fidelity wireframes so we agree on structure before visuals.",
  },
  {
    n: "03",
    title: "Design & build",
    desc: "High-fidelity UI, then I build the front-end myself — same head, no handoff gap.",
  },
  {
    n: "04",
    title: "Ship & iterate",
    desc: "We launch, watch how it’s used in the real world, and refine based on feedback.",
  },
];

/** "How I work" stepper panel (from DCLogic activeStep state). */
export default function WorkStepper() {
  const [active, setActive] = useState(0);
  const step = WORK_STEPS[active];

  return (
    <div className="panel">
      <div className="panel-label">How I work</div>
      <div>
        <div className="step-title">
          {step.n}&nbsp;&mdash;&nbsp;{step.title}
        </div>
        <p className="step-desc">{step.desc}</p>
      </div>
      <div className="step-btns">
        {WORK_STEPS.map((s, i) => (
          <button
            key={s.n}
            className={"step-btn" + (i === active ? " active" : "")}
            onClick={() => setActive(i)}
          >
            {s.n}
          </button>
        ))}
      </div>
    </div>
  );
}
