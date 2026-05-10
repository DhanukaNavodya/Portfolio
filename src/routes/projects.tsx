import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Dhanuka Navodya" },
      { name: "description", content: "Selected work by Dhanuka Navodya — products, tools and open source." },
      { property: "og:title", content: "Projects — Dhanuka Navodya" },
      { property: "og:description", content: "Selected work and side projects." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    name: "Lumen Analytics",
    tag: "SaaS · Realtime",
    desc: "Real-time event analytics platform with sub-second dashboards and a custom query engine on ClickHouse.",
    stack: ["Next.js", "Go", "ClickHouse", "Kafka"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    name: "Northwind CRM",
    tag: "Product · Multi-tenant",
    desc: "Designed and built a CRM for B2B teams with granular permissions, audit logs, and a plugin system.",
    stack: ["React", "Node", "Postgres", "tRPC"],
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    name: "Glow UI",
    tag: "Open source",
    desc: "A headless, accessible component library with a focus on motion and theming. 4k+ stars on GitHub.",
    stack: ["TypeScript", "Radix", "Framer"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    name: "Drift",
    tag: "Side project",
    desc: "A minimalist writing app with local-first sync, end-to-end encryption and a beautiful focus mode.",
    stack: ["Tauri", "Rust", "SQLite"],
    color: "from-rose-500/20 to-orange-500/20",
  },
  {
    name: "Helix Pipelines",
    tag: "Infrastructure",
    desc: "Streaming ETL platform processing 2B+ events/day with auto-scaling worker fleets and a visual DAG editor.",
    stack: ["Go", "Kubernetes", "Redis"],
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    name: "Pixelware Studio",
    tag: "Design tool",
    desc: "Collaborative design tooling with realtime cursors and a custom CRDT-based document model.",
    stack: ["React", "WebSockets", "Yjs"],
    color: "from-indigo-500/20 to-sky-500/20",
  },
];

function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-sm text-primary mb-3">// selected work</p>
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects.</h1>
      <p className="text-lg text-muted-foreground max-w-xl mb-16">
        A handful of things I've built — from scrappy weekend hacks to systems handling
        billions of events.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.name}
            className={`group relative overflow-hidden rounded-3xl glass p-8 hover:border-primary/50 transition-all cursor-pointer`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono text-primary uppercase tracking-wider">{p.tag}</span>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" size={20} />
              </div>
              <h2 className="text-2xl font-bold mb-3">{p.name}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs font-mono px-3 py-1 rounded-full bg-muted/60 text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
