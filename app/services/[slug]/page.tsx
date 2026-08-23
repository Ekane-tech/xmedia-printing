import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceBySlug, services } from "../../data/services";
import ServiceDetails from "./service-details";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) return {};

  return {
    title: `${service.title.en} | Xmedia Print & Technologies`,
    description: service.shortDescription.en,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) notFound();

  return <ServiceDetails service={service} />;
}
