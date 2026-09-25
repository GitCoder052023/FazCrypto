import { notFound } from "next/navigation";
import { Metadata } from "next";
import { DEMO_SERVICES, getServiceBySlug } from "@/lib/services-data";
import ServiceDetailClient from "./ServiceDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DEMO_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found // VECTIS",
    };
  }

  return {
    title: `${service.name} // VECTIS Systems Engineering`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
