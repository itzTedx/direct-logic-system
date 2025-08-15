import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";
import { SectionHeader } from "@/components/layout/section-header";
import MDXContent from "@/components/markdown/mdx-component";
import { TableOfContents } from "@/components/markdown/table-of-contents";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";

import { createHeadingComponents, extractHeadings } from "@/lib/mdx-utils";
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

  const { metadata, content } = serviceData;
  const categoryMetadata = getCategoryMetadata(category);

  // Extract headings from the content
  const headings = extractHeadings(content);
  const headingComponents = createHeadingComponents();

  return (
    <main className="min-h-svh pt-20">
      <BackgroundLeft aria-hidden="true" className="-top-20 -left-20 z-1 md:top-0 md:left-0" />
      <BackgroundRight aria-hidden="true" className="-top-20 -right-20 z-1 md:top-0 md:right-0" />

      {/* Service Content Section */}
      <section className="container relative z-10 max-w-7xl space-y-6 pt-6 pb-20 lg:space-y-9">
        {metadata.image && (
          <div className="relative aspect-16/6 w-full overflow-hidden rounded-2xl">
            <Image alt={metadata.title} className="object-cover" fill src={metadata.image} />
          </div>
        )}

        <SectionHeader badge={category} description={metadata.meta.description} title={metadata.title} />
        {/* Breadcrumb Navigation */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/what-we-offer">What we offer</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/what-we-offer/${category}`}>{categoryMetadata.title}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{metadata.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Separator />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}

          <article className="prose prose-lg order-2 lg:order-1 lg:col-span-2">
            <MDXContent
              components={{
                Image: (props) => <Image {...props} className="rounded-md" />,
                ...headingComponents,
              }}
              source={content}
            />
          </article>

          <TableOfContents className="order-1 lg:order-2" headings={headings} />
        </div>
      </section>

      <Faq />
      <Cta />
    </main>
  );
}
