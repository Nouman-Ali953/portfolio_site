import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Network from "@/components/Network";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { me, jobs, skills, stats, slides } from "@/lib/data";
const W = "mx-auto w-[min(1120px,92%)]";
const H2 = "font-display text-3xl font-semibold tracking-tight md:text-5xl";
const chip = "absolute rounded-full border border-border bg-card/90 px-4 py-2 text-sm font-medium shadow-xl backdrop-blur";
export default function Home() {
  const all = Object.values(skills).flat();
  return (<>
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur-xl">
      <div className={`${W} flex h-16 items-center justify-between`}>
        <a href="#top" className="font-display text-lg font-semibold">Nauman<span className="text-primary">.</span></a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">{["About", "Experience", "Projects", "Skills", "Contact"].map(n => <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-foreground">{n}</a>)}</nav>
        <Button asChild className="h-9 px-4"><a href="#contact">Hire me</a></Button></div></header>
    <main id="top">
      <section className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-28">
        <Network />
        <div className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-primary/15 blur-[130px]" />
        <div className={`${W} relative grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]`}>
          <div>
            <Reveal><Badge>{me.role} · {me.location}</Badge></Reveal>
            <Reveal delay={0.1}><h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">From AI ideas to <span className="text-primary">production-ready</span> systems.</h1></Reveal>
            <Reveal delay={0.25}><p className="mt-6 mr-12 md:mr-0 max-w-xl text-medium md:text-lg text-muted-foreground">{me.summary}</p></Reveal>
            <Reveal delay={0.4} className="mt-9 flex flex-wrap gap-3">
              <Button asChild><a href="#projects">See my work <ArrowUpRight className="size-4" /></a></Button>
              <Button asChild variant="outline"><a href={me.github}><Github className="size-4" />GitHub</a></Button>
              <Button asChild variant="outline"><a href={me.linkedin}><Linkedin className="size-4" />LinkedIn</a></Button></Reveal>
          </div>
          <Reveal
            delay={0.3}
            className="relative mx-auto w-full max-w-sm px-4 sm:px-0"
          >
            {/* Profile Image */}
            <div className="float mx-auto overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-primary/10">
              <img
                src="/images/hero.webp"
                alt="Portrait of Nauman Mukhtar"
                className="mx-auto aspect-[3/2] w-full object-cover sm:aspect-[4/5]"
              />
            </div>

            {/* Role Badge */}
            <Reveal>
              <div className="float2 mx-auto mt-4 flex w-full max-w-[320px] items-center justify-center rounded-lg border border-black/10 bg-white px-4 py-2.5 text-center shadow-md shadow-black/5 sm:max-w-sm">
                <span className="font-display text-sm font-bold tracking-wider text-black sm:text-base">
                  Full Stack AI Engineer
                </span>
              </div>
            </Reveal>

            {/* Floating Skill Badges */}
            <span
              className={`${chip} float2 left-0 top-8 sm:-left-6 sm:top-12`}
            >
              RAG · Agents
            </span>

            <span
              className={`${chip} float -right-1 bottom-20 sm:-right-4 sm:bottom-16`}
            >
              AWS · Kubernetes
            </span>
          </Reveal>

        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923091428766"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact me on WhatsApp"
        className="float fixed bottom-6 right-6 z-50 transition-transform duration-300 hover:scale-110"
      >
        <img
          src="/images/whatsapp-3d.webp"
          alt="Contact me on WhatsApp"
          className="size-16 drop-shadow-2xl md:size-20"
        />
      </a>
      <div className="overflow-hidden border-y border-border bg-card/40 py-5" aria-hidden>
        <div className="marquee flex w-max gap-10 text-lg text-muted-foreground">{[...all, ...all].map((s, i) => <span key={i} className="whitespace-nowrap">{s}<span className="ml-10 text-primary">✦</span></span>)}</div></div>

      <section className={`${W} grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-3`}>
        {stats.map((s, i) => <Reveal key={s.l} delay={i * 0.08}><Card><CardContent>
          <div className="font-display text-5xl font-semibold text-primary"><Counter to={s.n} suffix={s.s} /></div>
          <p className="mt-2 text-sm text-muted-foreground">{s.l}</p></CardContent></Card></Reveal>)}</section>

      <section id="about" className={`${W} grid items-center gap-12 py-12 md:py-16 md:grid-cols-[.8fr_1.2fr]`}>
        <Reveal><div className="rounded-[2rem] bg-gradient-to-br from-accent/30 to-primary/20 p-6"><img src="/images/laptop.webp" alt="Nauman working on a laptop" loading="lazy" className="mx-auto w-full max-w-sm drop-shadow-2xl" /></div></Reveal>
        <Reveal delay={0.15}><h2 className={H2}>Owns systems end to end.</h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">From architecture and backend engineering to AI integration, infrastructure, deployment and production operations. I build reliable, maintainable systems that pair modern application architecture with LLMs, RAG and agentic workflows, backed by a strong grounding in distributed systems and cloud automation.</p>
          <p className="mt-4 text-muted-foreground">B.S. Computer Science, Lahore Garrison University, 2020–2024.</p></Reveal>
      </section>

      <section id="experience" className={`${W} py-12 md:py-16`}>
        <Reveal><h2 className={H2}>Where I've worked</h2></Reveal>
        <div className="mt-12 space-y-6 border-l border-border pl-6 md:pl-10">{jobs.map((j, i) => (
          <Reveal key={j.org} delay={i * 0.05}><div className="relative"><span className="absolute -left-[31px] top-7 size-3 rounded-full bg-primary ring-4 ring-background md:-left-[47px]" />
            <Card className="transition hover:border-accent"><CardContent>
              <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-display text-xl font-semibold">{j.role} <span className="text-accent">@ {j.org}</span></h3><span className="text-sm text-primary">{j.when}</span></div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">{j.points.map(p => <li key={p}>{p}</li>)}</ul></CardContent></Card></div></Reveal>))}</div>
      </section>

      <section id="projects" className={`${W} py-12 md:py-16`}>
        <Reveal><h2 className={H2}>Recent projects</h2><p className="mt-3 text-muted-foreground">Click any screenshot to open it full size.</p></Reveal>
        <Reveal delay={0.1} className="mt-10"><Slider items={slides} /></Reveal>
      </section>

      <section id="skills" className={`${W} py-12 md:py-16`}>
        <Reveal><h2 className={H2}>Toolbox</h2></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">{Object.entries(skills).map(([g, l], i) => (
          <Reveal key={g} delay={i * 0.06}><Card className="h-full"><CardContent>
            <h3 className="font-display font-semibold">{g}</h3>
            <div className="mt-4 flex flex-wrap gap-2">{l.map(s => <Badge key={s} className="transition hover:border-primary hover:text-foreground">{s}</Badge>)}</div></CardContent></Card></Reveal>))}</div>
      </section>

      <section id="contact" className={`${W} pt-0! py-10 md:py-10 md:pt-2`}>
        <Reveal><img src="/images/banner.webp" alt="Nauman Mukhtar: Full Stack Development, AI Agents, Cloud Native" loading="lazy" className="hidden md:flex w-full rounded-3xl border border-border h-35 md:h-auto" /></Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <Reveal><h2 className={H2}>Let's build, scale and innovate.</h2>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">Have a product that needs AI, or a system that needs to scale? Send a note and I'll reply by email.</p>
            <Button asChild variant="outline" className="mt-8"><a href={`mailto:${me.email}`}><Mail className="size-4" />{me.email}</a></Button></Reveal>
          <Reveal delay={0.15}><Card><CardContent className="p-8"><ContactForm /></CardContent></Card></Reveal></div>
      </section>
    </main>
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()}</footer>
  </>);
}
