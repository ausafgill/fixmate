import type { Metadata } from "next";
import { notFound } from "next/navigation";
import servicesData from "@/content/services.json";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";

type Params = {
  id: string;
};

export function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const serviceId = Number(params.id);
  const service = servicesData.find((item) => item.id === serviceId);

  if (!service) {
    return {
      title: "Service Not Found | FixMate Dubai",
      description: "The requested service is unavailable. View all FixMate Dubai services.",
      keywords: ["service not found", "FixMate Dubai services"],
    };
  }

  return {
    title: `${service.title} | FixMate Dubai Services`,
    description: service.description || "Detailed information about this FixMate service.",
    keywords: [
      `${service.title} Dubai`,
      "home maintenance Dubai",
      "handyman Dubai",
      "repair services Dubai",
    ],
  };
}

export default function Page({ params }: { params: Params }) {
  const serviceId = Number(params.id);
  const service = servicesData.find((item) => item.id === serviceId);

  if (!service) {
    return notFound();
  }

  return <ServiceDetailPage service={service} />;
}
