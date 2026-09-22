import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con el equipo de EduFísica Primaria para dudas, sugerencias o colaboraciones.",
  alternates: { canonical: "/contacto" }
};

export default function ContactoPage() {
  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: "Contacto" }]} />
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-extrabold text-slate-900">Contacta con nosotros</h1>
          <p className="mb-6 max-w-md text-slate-500">
            ¿Tienes dudas, propuestas de colaboración o quieres sugerir un recurso? Escríbenos y te
            responderemos lo antes posible.
          </p>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 font-semibold text-primary-700">
            <Mail size={18} /> {siteConfig.email}
          </a>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
