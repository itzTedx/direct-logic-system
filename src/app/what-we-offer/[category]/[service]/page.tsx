import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";
import { SectionHeader } from "@/components/layout/section-header";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconArrowUpRight } from "@/assets/icons/arrows";
import { IconDirectWatermark } from "@/assets/logo";

import { getServiceBySlug } from "@/modules/services/actions";
import { getCategoryMetadata } from "@/modules/services/categories";

interface Params {
  category: string;
  service: string;
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { category, service } = await params;
  // Fetch service data using the await service function
  const serviceData = await getServiceBySlug(service, category);

  if (!serviceData) {
    notFound();
  }

  const categoryMetadata = getCategoryMetadata(category);
  const { metadata, content } = serviceData;

  return (
    <main className="min-h-svh pt-24">
      <BackgroundLeft aria-hidden="true" className="-top-20 -left-20 z-1 md:top-0 md:left-0" />
      <BackgroundRight aria-hidden="true" className="-top-20 -right-20 z-1 md:top-0 md:right-0" />

      {/* Hero Section */}
      <div className="container relative z-10 max-w-7xl space-y-2 overflow-hidden rounded-4xl bg-radial-[105%_100%_at_50%_0%] from-[#6DA3FF] via-55% via-secondary to-primary px-4 py-12 text-center text-background shadow-[0_12px_42px_0_oklch(0.2788_0.0909_306.27/40%),_inset_0_1px_42px_12px_oklch(1_0_0_/20%)] md:space-y-6 md:px-6 md:py-16 lg:px-8">
        <Badge className="relative z-10" variant="outline">
          <BadgeDot />
          {categoryMetadata.title}
        </Badge>
        <h1
          className="relative z-10 text-balance font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          id="service-heading"
        >
          {metadata.title}
        </h1>
        <p className="relative z-10 mx-auto max-w-4xl text-balance text-base leading-relaxed">
          {metadata.meta.description}
        </p>

        <IconDirectWatermark aria-hidden="true" className="-top-3/4 -left-12 absolute hidden text-white/5 lg:block" />
        <IconDirectWatermark
          aria-hidden="true"
          className="-bottom-3/4 -right-20 -scale-x-90 absolute hidden text-white/5 lg:block"
        />
      </div>

      {/* Service Content Section */}
      <section className="container max-w-7xl pt-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              {metadata.image && (
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image alt={metadata.title} className="object-cover" fill src={metadata.image} />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{metadata.title}</CardTitle>
                <CardDescription className="text-lg">{metadata.meta.description}</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <div
                  className="whitespace-pre-wrap text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Service Details */}
            <Card>
              <CardHeader>
                <CardTitle>Service Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-muted-foreground text-sm">Category</h4>
                  <p className="text-base">{categoryMetadata.title}</p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Ready to Get Started?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Contact us today to discuss your requirements and get a customized solution.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full" size="lg" variant="secondary">
                  <Link href="/contact">
                    Get in Touch
                    <IconArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="container max-w-7xl pt-14">
        <SectionHeader
          badge="Related Services"
          description="Explore other services in this category"
          title={`More ${categoryMetadata.title}`}
        />
        <div className="pt-8">
          <Button asChild variant="outline">
            <Link href={`/what-we-offer/${category}`}>
              View All {categoryMetadata.title}
              <IconArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Faq />
      <Cta />
    </main>
  );
}
