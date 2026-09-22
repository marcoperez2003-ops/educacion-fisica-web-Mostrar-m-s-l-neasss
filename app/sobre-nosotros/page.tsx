import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: "Conoce el equipo y el propósito detrás de EduFísica Primaria.",
  alternates: { canonical: "/sobre-nosotros" }
};

export default function SobreNosotrosPage() {
  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: "Sobre nosotros" }]} />
      <div className="prose-article max-w-3xl">
        <h1>Sobre {siteConfig.name}</h1>
        <p>
          {siteConfig.name} nace con un objetivo claro: acompañar al profesorado de Educación
          Primaria y Educación Física en España con recursos prácticos, actualizados y listos para
          usar en el aula.
        </p>
        <h2>Nuestra misión</h2>
        <p>
          Creemos que la actividad física de calidad transforma la infancia. Por eso trabajamos
          para poner a disposición del profesorado juegos, situaciones de aprendizaje e
          instrumentos de evaluación alineados con la LOMLOE, ahorrando tiempo de preparación y
          elevando la calidad de las sesiones.
        </p>
        <h2>Quiénes formamos el equipo</h2>
        <p>
          Somos un equipo de maestros y maestras de Educación Física en activo, junto con
          especialistas en pedagogía y tecnología educativa, comprometidos con compartir recursos
          de forma gratuita y accesible.
        </p>
        <h2>Contacta con nosotros</h2>
        <p>
          Si quieres proponer un recurso, colaborar con el proyecto o simplemente saludarnos,
          escríbenos a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> o visita
          nuestra <a href="/contacto">página de contacto</a>.
        </p>
      </div>
    </div>
  );
}
