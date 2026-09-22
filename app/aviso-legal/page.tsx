import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de EduFísica Primaria.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true }
};

export default function AvisoLegalPage() {
  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: "Aviso legal" }]} />
      <div className="prose-article max-w-3xl">
        <h1>Aviso legal</h1>
        <p>
          <em>
            Plantilla de ejemplo. Sustituye estos datos por los de tu titular real antes de publicar
            el sitio (recomendamos revisión por un/a profesional del derecho).
          </em>
        </p>

        <h2>1. Datos identificativos</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que este
          sitio web, {siteConfig.url}, es titularidad de {siteConfig.author} (en adelante, el
          "Titular"), con correo de contacto {siteConfig.email}.
        </p>

        <h2>2. Objeto</h2>
        <p>
          El presente sitio web tiene por objeto ofrecer recursos educativos gratuitos dirigidos a
          docentes de Educación Primaria y Educación Física en España, incluyendo artículos,
          plantillas y herramientas.
        </p>

        <h2>3. Condiciones de uso</h2>
        <p>
          El acceso y uso de este sitio web atribuye la condición de usuario y supone la aceptación
          plena de todas las cláusulas incluidas en este aviso legal. El usuario se compromete a
          hacer un uso adecuado de los contenidos y servicios ofrecidos.
        </p>

        <h2>4. Propiedad intelectual</h2>
        <p>
          Todos los contenidos del sitio web (textos, imágenes, diseño, código fuente) son
          propiedad del Titular o de terceros que han autorizado su uso, y están protegidos por la
          normativa de propiedad intelectual e industrial vigente en España.
        </p>

        <h2>5. Enlaces a terceros</h2>
        <p>
          Este sitio puede contener enlaces a sitios web de terceros. El Titular no se hace
          responsable del contenido de dichos sitios ni de las políticas de privacidad que apliquen.
        </p>

        <h2>6. Publicidad</h2>
        <p>
          Este sitio web puede mostrar publicidad a través de Google AdSense y otras redes
          publicitarias, que pueden utilizar cookies para mostrar anuncios personalizados. Consulta
          nuestra <a href="/politica-cookies">política de cookies</a> para más información.
        </p>

        <h2>7. Legislación aplicable</h2>
        <p>
          Las presentes condiciones se rigen por la legislación española. Para cualquier
          controversia derivada del uso de este sitio web, las partes se someten a los juzgados y
          tribunales que correspondan conforme a derecho.
        </p>
      </div>
    </div>
  );
}
