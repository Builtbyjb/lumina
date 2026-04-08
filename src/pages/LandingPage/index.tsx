import { motion } from "motion/react";
import { Zap, Shield, Users, DollarSign, ArrowRight, CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-xl">
              L
            </div>
            <span className="text-2xl font-semibold tracking-tight">Lumina</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:text-violet-400 transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-violet-400 transition-colors">
              Pricing
            </a>
            <a href="#for-africa-asia" className="hover:text-violet-400 transition-colors">
              For Africa & Asia
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-5 py-2 text-sm font-medium hover:bg-zinc-900 rounded-full transition-colors">
              Log in
            </button>
            <button className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2">
              Get started free
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-1.5 mb-6">
            <span className="text-emerald-400 text-sm font-medium">✦ Now live in 12 countries</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            Powerful LLMs for your team.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Without the crazy bills.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-zinc-400 mb-10">
            Open-source models on lightning-fast GPUs. One API key per company. Employee credit limits and role controls
            built-in. Perfect for bootstrapped startups in Africa and Asia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl font-semibold text-lg flex items-center gap-3 hover:brightness-110 transition-all"
            >
              Start for free — no credit card needed
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <button className="px-8 py-4 border border-zinc-700 hover:bg-zinc-900 rounded-2xl font-medium text-lg transition-colors">
              Watch 1-minute demo
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" /> 70B+ models
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" /> OpenAI-compatible
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" /> 5–10× cheaper
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-t border-b border-zinc-800 py-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-75">
          <div className="text-zinc-400 text-sm">Trusted by fast-growing teams in</div>
          <div className="flex gap-10 text-xl font-medium text-zinc-300">
            Lagos • Nairobi • Jakarta • Bangalore • Accra • Dhaka
          </div>
        </div>
      </div>

      {/* Value Proposition Highlights */}
      <section id="features" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for teams that actually care about cost</h2>
            <p className="text-zinc-400 max-w-md mx-auto">
              Everything you love about Claude/OpenAI — minus the expensive surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Up to 8× Cheaper",
                desc: "Run powerful open-source models (Llama 70B, DeepSeek, Qwen, etc.) on optimized RunPod GPUs. Pay only for what you use.",
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
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-violet-500/50 group transition-all"
              >
                <div className="text-violet-400 mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For African & Asian Startups Section */}
      <section id="for-africa-asia" className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-amber-500/10 text-amber-400 px-6 py-2 rounded-full text-sm font-medium mb-6">
            Especially built for emerging markets
          </div>
          <h2 className="text-5xl font-bold tracking-tight mb-6">AI that doesn't break your runway</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Whether you're in Lagos, Jakarta, Nairobi or Bangalore — you get enterprise-grade controls at
            startup-friendly prices. Local payment methods and flexible billing coming soon.
          </p>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to give your team AI without the guilt?</h2>
          <p className="text-zinc-400 text-lg mb-10">
            Join hundreds of smart teams already saving thousands every month.
          </p>

          <button className="w-full sm:w-auto px-12 py-5 bg-white text-black text-xl font-semibold rounded-2xl hover:bg-zinc-100 transition-all flex items-center justify-center gap-3 mx-auto">
            Claim your free credits now
            <Zap className="w-6 h-6" />
          </button>

          <p className="text-xs text-zinc-500 mt-8">No credit card • Cancel anytime • Takes 60 seconds</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-6 text-center text-zinc-500 text-sm">
        © 2026 Lumina • Built for bold founders in Africa & Asia • Powered by open models on RunPod
      </footer>
    </div>
  );
}
