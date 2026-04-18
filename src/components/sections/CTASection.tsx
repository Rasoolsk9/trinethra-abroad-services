import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const readMoreBody = `Trinethra Edu Services is known for honest counselling, careful documentation, and steady support through admission, visa, and travel. We align your budget, NEET readiness, and career goals before shortlisting trusted universities. Transparency matters: no surprise fees and no misleading claims. Students have gained seats in NMC-listed colleges with guided paperwork and calm communication for parents. We help you compare destinations, understand timelines, and prepare confidently for departure. Our counsellors respond quickly because deadlines do not wait. From the first call to enrollment, we focus on clarity, dignity, and outcomes you can measure. That consistent reliability is why families recommend Trinethra—and why we treat every dream as seriously as our own reputation.`;

export const CTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#f6fbff] py-10 md:py-14">
      <div className="container-custom">
        <div className="rounded-2xl border border-border/60 bg-white p-5 shadow-sm sm:rounded-3xl md:p-8">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
            Study Abroad with <span className="gradient-text">Trinethra Edu</span>
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            As per recent estimates, Indian students continue to choose global medical education for quality,
            affordability, and better career exposure. With transparent counselling and the right university match,
            your MBBS dream becomes practical and achievable.
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            India has one of the largest outbound student communities. Smart planning can help reduce costs and
            improve success chances in top MBBS destinations.
          </p>

          <Button
            type="button"
            variant="link"
            onClick={() => setOpen((o) => !o)}
            className="mt-2 h-auto gap-1 px-0 text-base font-semibold text-primary hover:text-secondary"
            aria-expanded={open}
          >
            {open ? (
              <>
                Show less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Read more <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>

          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          >
            <div className="min-h-0 overflow-hidden">
              <p className="mt-4 max-w-4xl border-t border-border/60 pt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {readMoreBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
