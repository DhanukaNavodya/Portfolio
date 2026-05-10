import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Instagram, Github, Linkedin, Dribbble, User } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Software Engineer Portfolio" },
      { name: "description", content: "Full-stack software engineer crafting fast, beautiful, scalable digital products." },
      { property: "og:title", content: "Alex Carter — Software Engineer" },
      { property: "og:description", content: "Full-stack engineer crafting elegant digital products." },
    ],
  }),
  component: Home,
});

const stats = [
  { k: "5+", v: "Experiences" },
  { k: "20+", v: "Projects done" },
  { k: "80+", v: "Happy Clients" },
];

function Home() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center relative">
        {/* Left */}
        <div className="relative z-10">
          <p className="text-muted-foreground text-lg mb-2">Hi I am</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Alex Carter</h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            <span className="text-gradient">Software</span>
            <br />
            <span className="text-gradient">Engineer</span>
          </h1>

          <div className="flex items-center gap-3 mb-8">
            {[Instagram, Github, Linkedin, Dribbble].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/contact"
              className="px-7 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all"
            >
              Hire Me
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          <div className="glass rounded-2xl p-6 grid grid-cols-3 divide-x divide-border max-w-md">
            {stats.map((s) => (
              <div key={s.v} className="px-4 first:pl-0 last:pr-0">
                <div className="text-2xl md:text-3xl font-display font-bold text-primary">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — portrait inside circle */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-[420px] h-[420px] md:w-[500px] md:h-[500px] max-w-full">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-glow-pulse" />
            <div className="absolute inset-0 rounded-full border border-primary/30" />
            <div className="absolute inset-4 rounded-full bg-card/40 backdrop-blur-sm" />
            <img
              src={heroImg}
              alt="Alex Carter portrait"
              width={1024}
              height={1280}
              className="relative z-10 w-full h-full object-contain object-bottom animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
