import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Alex Carter. Built with care.
        </p>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href="https://github.com" aria-label="GitHub" className="hover:text-primary transition-colors"><Github size={18} /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
          <a href="mailto:hello@alex.dev" aria-label="Email" className="hover:text-primary transition-colors"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
