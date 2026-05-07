import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Software Engineer Portfolio" },
      { name: "description", content: "Full-stack engineer building fast, beautiful, scalable products with React, TypeScript & Node." },
      { property: "og:title", content: "Alex Carter — Software Engineer" },
      { property: "og:description", content: "Full-stack engineer crafting elegant digital products." },
    ],
  }),
  component: Home,
});

const stats = [
  { k: "6+", v: "Years building" },
  { k: "40+", v: "Projects shipped" },
  { k: "12", v: "Open-source repos" },
  { k: "∞", v: "Cups of coffee" },
];

const stack = [
  { icon: Code2, title: "Engineering", desc: "TypeScript, React, Node, Go, PostgreSQL — clean, tested, maintainable." },
  { icon: Sparkles, title: "Design-aware", desc: "Pixel-perfect UI with strong design systems and accessibility baked in." },
  { icon: Zap, title: "Performance", desc: "Edge rendering, smart caching and observability for lightning-fast UX." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-32 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
              Building <span className="text-gradient">digital</span><br />
              experiences that<br />
              <span className="text-gradient">just work.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              I'm Alex — a software engineer specialized in full-stack web development, distributed systems and beautiful, performant interfaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all">
                View my work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary transition-colors">
                Get in touch
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 animate-glow-pulse" />
            <img
              src={heroImg}
              alt="Alex Carter portrait"
              className="relative rounded-3xl shadow-elegant animate-float w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="glass rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.v} className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{s.k}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What I do */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-primary mb-3">// what I do</p>
          <h2 className="text-4xl md:text-5xl font-bold">A craft, not just code.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stack.map((item) => (
            <div key={item.title} className="group p-8 rounded-2xl glass hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
                <item.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl glass p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Have an idea? Let's build it.</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              From early-stage prototypes to scaling production systems — I'd love to hear about your project.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all">
              Start a conversation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
