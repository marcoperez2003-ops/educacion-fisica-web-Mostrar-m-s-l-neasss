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
          Nuestra misión es facilitar el trabajo diario del profesorado mediante recursos, juegos, 
          situaciones de aprendizaje, rúbricas e instrumentos de evaluación adaptados al currículo 
          vigente.
        </p>
        <h2>¿Cómo se crean los recursos?</h2>
        <p>
          Los contenidos publicados en RecursosPrimariaEF son revisados y adaptados para ofrecer 
          información útil, clara y práctica para docentes y estudiantes de Educación.
        </p>
        <h2>Sobre el creador</h2>
        <p>
         RecursosPrimariaEF es un proyecto educativo impulsado por un estudiante universitario de 
          Educación Primaria con especialización en Educación Física. El objetivo de esta plataforma es
          facilitar recursos prácticos, actividades, rúbricas, situaciones de aprendizaje y herramientas 
          útiles para docentes y futuros maestros.

Todos los contenidos se revisan y adaptan para ofrecer información útil, actualizada y alineada con las necesidades reales del aula.
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
