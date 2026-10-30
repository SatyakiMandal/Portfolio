"use client";

import Image from "next/image";
import { DarkKineticCanvas, SectionAmbient } from "@/components/AmbientBackground";
import { about, person } from "@/content/profile";
import { contactEmail } from "@/lib/site";

// Nithin-style close: the name huge behind a full-length cut-out, with continuous ambient motion and contact actions.
export function Closing() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-amber text-[#161616]">
      <SectionAmbient variant="orbits" />
      <div className="relative z-10 mx-auto max-w-[1280px] 2xl:max-w-[1520px] px-5 pt-10 md:px-10 md:pt-14">
        <div id="about" className="grid gap-6 md:grid-cols-2 md:gap-12">
          {about.map((p, idx) => (
            <div
              key={p.slice(0, 20)}
              data-grow
              data-cursor={idx === 0 ? "Background" : "Focus"}
              className="rounded-2xl bg-[#161616]/[0.05] p-6 ring-1 ring-[#161616]/12 transition-all duration-300 hover:-translate-y-1.5 hover:bg-paper/80 hover:shadow-lg"
            >
              <p className="text-lg leading-8 text-[#161616]/90">{p}</p>
            </div>
          ))}
        </div>

        <div className="group/portrait relative mt-12 md:mt-18">
          <p
            aria-hidden="true"
            data-cursor="Satyaki Mandal"
            className="wide select-none text-center text-[clamp(56px,13.5vw,210px)] leading-[0.84] font-extrabold text-[#161616]/12 transition-all duration-500 group-hover/portrait:scale-[1.02] group-hover/portrait:text-[#161616]/22"
          >
            Satyaki
            <br />
            Mandal
          </p>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[130%] w-[min(46vw,380px)] transition-transform duration-500 group-hover/portrait:-translate-y-2 group-hover/portrait:scale-[1.03]">
            <Image
              src="/images/fullbody-cutout.webp"
              alt="Satyaki Mandal standing in a dark suit"
              fill
              sizes="380px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      <div data-dark className="relative overflow-hidden bg-night text-on-night">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="night-grid-pan night-grid absolute -inset-16 opacity-80" />
          <span className="night-orb o1 -left-[10%] top-[0%] h-[32vw] w-[32vw]" />
          <span className="night-orb o2 -right-[10%] bottom-[0%] h-[32vw] w-[32vw]" />
          <DarkKineticCanvas />
        </div>
        <div className="relative z-10 mx-auto grid max-w-[1280px] 2xl:max-w-[1520px] gap-8 px-5 pb-32 pt-12 md:grid-cols-[1fr_auto] md:items-end md:px-10 md:pb-28">
          <div>
            <h2
              id="contact-title"
              data-cursor="Let's Talk"
              className="w-fit font-display text-[34px] leading-[38px] font-semibold tracking-[-0.025em] transition-colors duration-300 hover:text-amber md:text-[52px] md:leading-[56px]"
            >
              Hiring for strategy, pricing or go-to-market?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={person.linkedin}
                data-magnetic
                data-cursor="Say hi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-full bg-amber px-6 text-[15px] font-semibold text-[#101a13] transition-all hover:-translate-y-0.5 hover:scale-105 active:scale-95"
              >
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={`mailto:${contactEmail}`}
                data-magnetic
                data-cursor="Email"
                className="inline-flex min-h-12 items-center rounded-full border border-on-night/40 px-6 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:border-amber hover:text-amber active:scale-95"
              >
                Email
              </a>
              <a
                href={person.cvPath}
                download
                data-magnetic
                data-cursor="PDF"
                className="inline-flex min-h-12 items-center rounded-full border border-on-night/40 px-6 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:border-amber hover:text-amber active:scale-95"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="flex gap-6 font-mono text-[13px] text-on-night/70 md:flex-col md:items-end md:gap-1">
            <span className="transition-colors hover:text-on-night">&copy; 2026 Satyaki Mandal</span>
            <a href="#main" data-magnetic data-cursor="Top" className="inline-flex min-h-11 items-center transition-colors hover:text-amber md:min-h-0">
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
