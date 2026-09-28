"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { slides } from "@/lib/data";
export default function Slider({ items }: { items: typeof slides }) {
  const [ref, api] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!api) return;
    const f = () => setI(api.selectedScrollSnap());
    f();
    api.on("select", f);
    return () => {
      api.off("select", f);
    };
  }, [api]);
  const cur = items[i];
  return (
    <div>
      <div
        ref={ref}
        className="overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/40"
      >
        <div className="flex">
          {items.map((s) => (
            <a
              key={s.src}
              href={s.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${s.title} full size`}
              className="group relative block aspect-[16/9] min-w-0 flex-[0_0_100%] bg-white"
            >
              <img
                src={s.src}
                alt={s.title}
                loading="lazy"
                className={`size-full transition-transform duration-700 group-hover:scale-[1.02] ${s.fit === "contain" ? "object-contain" : "object-cover object-top"}`}
              />
              <ExternalLink className="absolute right-4 top-4 size-8 rounded-full bg-background/80 p-2 opacity-0 transition group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div key={i} className="animate-[rise_.5s_ease]">
          <Badge>{cur.tag}</Badge>
          <h3 className="mt-3 font-display text-2xl font-semibold">
            {cur.title}
          </h3>
          <p className="mt-2 max-w-2xl text-muted-foreground">{cur.desc}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button
            size="icon"
            variant="outline"
            aria-label="Previous project"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft />
          </Button>
          <Button
            size="icon"
            variant="outline"
            aria-label="Next project"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      {/* <div className="mt-5 flex gap-2">
        {items.map((s, n) => (
          <button
            key={s.src}
            aria-label={`Go to ${s.title}`}
            onClick={() => api?.scrollTo(n)}
            className={`h-1.5 rounded-full transition-all ${n === i ? "w-10 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"}`}
          />
        ))}
      </div> */}
    </div>
  );
}
