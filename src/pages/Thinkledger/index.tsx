import { motion } from "motion/react";

export default function Thinkledger() {
  return (
    <>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">Thinkledger</h1>

        <p className="max-w-2xl mx-auto text-xl mb-10">
          Open-source models on lightning-fast GPUs. One API key per company. Employee credit limits and role controls
          built-in.
        </p>

        <motion.button>Lumina</motion.button>
      </div>
    </>
  );
}
