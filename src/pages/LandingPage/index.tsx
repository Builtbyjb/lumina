import { motion } from "motion/react";
import { Shield, Users, DollarSign } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-6">
            Powerful LLMs for your team.
            <br />
            <span className="">Without the crazy bills.</span>
          </h1>

          <p className="max-w-2xl mx-auto mb-10">
            Open-source models on lightning-fast GPUs. One API key per company. Employee credit limits and role controls
            built-in.
          </p>
        </div>
      </section>

      {/* Value Proposition Highlights */}
      <section id="features" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Up to 8× Cheaper",
                desc: "Run powerful open-source models (Llama 70B, DeepSeek, Qwen, etc.) on optimized GPUs. Pay only for what you use.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Employee Credit Limits",
                desc: "Set monthly token or dollar budgets per person. Marketing gets 50k tokens, Engineering gets 500k. No surprise bills.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Role-Based Controls",
                desc: "Define what each role can access. Junior devs can't call the biggest model. Full audit logs included.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border  border-zinc-800 rounded-3xl p-10 group transition-all"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center text-sm">© 2026 Lumina</footer>
    </>
  );
}
