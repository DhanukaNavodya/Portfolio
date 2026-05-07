import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alex Carter" },
      { name: "description", content: "Get in touch with Alex Carter for freelance work, collaborations and consulting." },
      { property: "og:title", content: "Contact — Alex Carter" },
      { property: "og:description", content: "Let's build something together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <p className="font-mono text-sm text-primary mb-3">// say hi</p>
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Let's <span className="text-gradient">talk</span>.
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mb-14">
        Have a project in mind, want to collaborate, or just want to chat about engineering? Drop a message.
      </p>

      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
        <aside className="space-y-6">
          <div className="glass rounded-2xl p-6">
            <Mail className="text-primary mb-3" size={20} />
            <p className="text-sm text-muted-foreground mb-1">Email</p>
            <a href="mailto:hello@alex.dev" className="font-medium hover:text-primary transition-colors">hello@alex.dev</a>
          </div>
          <div className="glass rounded-2xl p-6">
            <MapPin className="text-primary mb-3" size={20} />
            <p className="text-sm text-muted-foreground mb-1">Based in</p>
            <p className="font-medium">Berlin, Germany</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm text-muted-foreground mb-3">Find me online</p>
            <div className="flex gap-4">
              <a href="https://github.com" className="hover:text-primary transition-colors"><Github size={20} /></a>
              <a href="https://linkedin.com" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="https://twitter.com" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </aside>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="glass rounded-2xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Name</label>
              <input required className="mt-2 w-full bg-input border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</label>
              <input required type="email" className="mt-2 w-full bg-input border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Subject</label>
            <input className="mt-2 w-full bg-input border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="What's this about?" />
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Message</label>
            <textarea required rows={6} className="mt-2 w-full bg-input border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about your project…" />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
          >
            {sent ? "Message sent!" : <>Send message <Send size={16} /></>}
          </button>
        </form>
      </div>
    </div>
  );
}
