import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconArrowUpRight, IconCheck } from "@/assets/icons/arrows";

import { CASE_STUDIES, FEATURED_PROJECTS, PORTFOLIO_TESTIMONIALS } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <main id="main-content" role="main">
      {/* Hero Section */}
      <header className="min-h-[60vh] bg-gradient-to-b from-[#E5CAFF]/30 to-transparent" role="banner">
        <BackgroundLeft aria-hidden="true" className="-top-20 -left-20 z-1 md:top-0 md:left-0" />
        <BackgroundRight aria-hidden="true" className="-top-20 -right-20 z-1 md:top-0 md:right-0" />
        <div className="container relative z-10 max-w-7xl px-4 pt-16 md:px-6 md:pt-24 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge>
              <BadgeDot />
              Our Work Speaks
            </Badge>
            <h1 className="mt-3 font-bold text-3xl leading-[1.15] md:text-4xl lg:text-5xl">
              Explore the
              <br />
              <span className="text-primary">Experience</span>
            </h1>
            <p className="mt-3 mb-6 text-balance text-base text-muted-foreground leading-relaxed md:text-lg">
              Dive into our diverse range of projects. From web development to IT solutions, see how we bring ideas to
              life and deliver results for our clients.
            </p>
          </div>
        </div>
      </header>

      {/* Our Case Studies / Projects Section */}
      <section aria-labelledby="featured-projects-heading" className="container max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <Badge variant="secondary">
            <BadgeDot />
            Featured Work
          </Badge>
          <h2 className="mt-3 font-bold text-2xl leading-tight sm:text-3xl lg:text-4xl" id="featured-projects-heading">
            Our Case Studies / Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <Card className="group transition-all duration-300 hover:shadow-lg" key={project.id}>
              <div className="flex aspect-video items-center justify-center rounded-t-lg bg-muted">
                <div className="text-muted-foreground text-sm">portfolio-image</div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{project.name}</h3>
                    <p className="mt-1 text-muted-foreground text-sm">{project.category}</p>
                  </div>
                  <Button className="opacity-0 transition-opacity group-hover:opacity-100" size="icon" variant="ghost">
                    <IconArrowUpRight aria-hidden="true" />
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section aria-labelledby="case-studies-heading" className="bg-muted/50">
        <div className="container max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <Badge variant="secondary">
              <BadgeDot />
              In-Depth Insights
            </Badge>
            <h2 className="mt-3 font-bold text-2xl leading-tight sm:text-3xl lg:text-4xl" id="case-studies-heading">
              How We Deliver Results
            </h2>
            <p className="mt-3 text-balance text-base text-muted-foreground leading-relaxed sm:text-lg">
              Take a closer look at the challenges, solutions, and results from select projects. Each case study
              highlights our problem-solving approach, technical expertise, and measurable outcomes.
            </p>
          </div>

          <div className="space-y-12">
            {CASE_STUDIES.map((caseStudy, index) => (
              <Card className="overflow-hidden" key={caseStudy.id}>
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-semibold text-xl">{caseStudy.clientName}</h3>
                      <p className="text-muted-foreground text-sm">{caseStudy.industry}</p>
                    </div>
                    <Badge variant="outline">Case Study {index + 1}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Challenge</h4>
                      <p className="text-muted-foreground text-sm">{caseStudy.challenge}</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Solution</h4>
                      <p className="text-muted-foreground text-sm">{caseStudy.solution}</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Results</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, resultIndex) => (
                          <li className="flex items-start gap-2 text-sm" key={resultIndex}>
                            <IconCheck className="mt-0.5 size-4 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        aria-labelledby="testimonials-heading"
        className="container max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <Badge variant="secondary">
            <BadgeDot />
            What Clients Say
          </Badge>
          <h2 className="mt-3 font-bold text-2xl leading-tight sm:text-3xl lg:text-4xl" id="testimonials-heading">
            Think Outside the Box
          </h2>
          <p className="mt-3 text-balance text-base text-muted-foreground leading-relaxed sm:text-lg">
            Hear from our satisfied clients who trust Direct LS for IT solutions and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_TESTIMONIALS.map((testimonial) => (
            <Card className="group transition-all duration-300 hover:shadow-lg" key={testimonial.id}>
              <CardContent className="p-6">
                <blockquote className="mb-4">
                  <p className="text-muted-foreground text-sm italic">"{testimonial.content}"</p>
                </blockquote>
                <Separator className="my-4" />
                <cite className="not-italic">
                  <h4 className="font-semibold text-sm">{testimonial.author}</h4>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.position && `${testimonial.position}, `}
                    {testimonial.company}
                  </p>
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 font-bold text-2xl leading-tight sm:text-3xl lg:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
              <Button
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                size="lg"
                variant="outline"
              >
                View More Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
