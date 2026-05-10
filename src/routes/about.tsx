import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dhanuka Navodya" },
      { name: "description", content: "About Dhanuka Navodya, software engineer with 6+ years building products from idea to scale." },
      { property: "og:title", content: "About — Dhanuka Navodya" },
      { property: "og:description", content: "Engineer, builder, lifelong learner." },
    ],
  }),
  component: About,
});

const skills = {
  Frontend: ["React", "TypeScript", "Next.js", "TanStack", "Tailwind", "Framer Motion"],
  Backend: ["Node.js", "Go", "PostgreSQL", "Redis", "GraphQL", "tRPC"],
  "Cloud & DevOps": ["AWS", "Cloudflare", "Docker", "Terraform", "GitHub Actions"],
  Practices: ["TDD", "DDD", "Observability", "A11y", "Design Systems"],
};

const timeline = [
  { year: "2024 — Now", role: "Senior Software Engineer", company: "Lumen Labs", desc: "Leading platform engineering for a real-time analytics product used by 50k+ teams." },
  { year: "2022 — 2024", role: "Full-stack Engineer", company: "Northwind", desc: "Built a multi-tenant SaaS from zero, scaling to 1M+ monthly users." },
  { year: "2020 — 2022", role: "Software Engineer", company: "Pixelware", desc: "Shipped customer-facing dashboards and internal tooling for design teams." },
  { year: "2019 — 2020", role: "Engineering Intern", company: "Helix", desc: "Worked on data pipelines and the company's first GraphQL API." },
];

function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="font-mono text-sm text-primary mb-3">// about me</p>
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Hi, I'm <span className="text-gradient">Dhanuka</span>.
      </h1>
      <div className="text-lg text-muted-foreground space-y-5 leading-relaxed max-w-2xl">
        <p>
          I'm a software engineer based in Sri Lanka, with a soft spot for systems that feel
          effortless to use. I've spent the last six years bouncing between frontend
          architecture, backend infrastructure, and the messy product seams in between.
        </p>
        <p>
          I care about clarity — in code, in interfaces, and in communication. Outside of
          work you'll find me on long bike rides, tinkering with synths, or maintaining a
          few open-source libraries.
        </p>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Toolbelt</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold mb-3">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="text-xs font-mono px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <ol className="relative border-l border-border pl-8 space-y-10">
          {timeline.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-gradient-primary shadow-glow" />
              <p className="font-mono text-xs text-primary mb-1">{t.year}</p>
              <h3 className="text-xl font-semibold">{t.role} <span className="text-muted-foreground font-normal">· {t.company}</span></h3>
              <p className="text-muted-foreground mt-1">{t.desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
