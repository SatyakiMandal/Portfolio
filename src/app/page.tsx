import { Hero } from "@/components/home/Hero";
import { PortraitReveal } from "@/components/home/PortraitReveal";
import { Statement } from "@/components/home/Statement";
import { BrandShowcase } from "@/components/BrandLogo";
import { WorkGrid } from "@/components/home/Work";
import { Timeline } from "@/components/home/Experience";
import { Gallery } from "@/components/home/Gallery";
import { EarlierWork, Education, Leadership, Recognition, Research } from "@/components/home/Sections";
import { Reveal } from "@/components/Reveal";
import { ActionTitle, Section } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Hero />
      <PortraitReveal />
      <Statement />
      <BrandShowcase />
      <Section id="work" ambient>
        <ActionTitle id="work" lead="Commercial strategy, pricing architecture, and quantitative research across corporate live projects and institutional ventures.">
          Selected Work
        </ActionTitle>
        <WorkGrid />
      </Section>
      <Section id="experience" ambient>
        <ActionTitle id="experience" lead="Enterprise media analytics at Epsilon and supply chain throughput optimization at Shree Gajanan Industries.">
          Experience
        </ActionTitle>
        <Reveal>
          <Timeline />
        </Reveal>
      </Section>
      <Section id="recognition" ambient>
        <ActionTitle id="recognition" lead="National podium, finalist, and semi-finalist placements across premier corporate case challenges.">
          Competitions & Honours
        </ActionTitle>
        <Reveal>
          <Recognition />
        </Reveal>
      </Section>
      <Section id="research" className="pt-0 md:pt-0" ambient>
        <ActionTitle id="research" lead="Published peer-reviewed literature and academic teaching cases in review.">
          Research & Publications
        </ActionTitle>
        <Reveal>
          <Research />
        </Reveal>
      </Section>
      <Section id="leadership" className="pt-0 md:pt-0" ambient>
        <ActionTitle id="leadership" lead="Campus governance, committee leadership, and academic initiatives at XLRI Jamshedpur.">
          Leadership & Initiatives
        </ActionTitle>
        <Reveal>
          <Leadership />
          <EarlierWork />
        </Reveal>
      </Section>
      <Gallery />
      <Section id="education" className="pt-0 md:pt-0" ambient>
        <ActionTitle id="education" lead="Academic foundation in computer science engineering and business management.">
          Education
        </ActionTitle>
        <Education />
      </Section>
    </>
  );
}
