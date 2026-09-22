import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad y protección de datos de EduFísica Primaria.",
  alternates: { canonical: "/politica-privacidad" }
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: "Política de privacidad" }]} />
      <div className="prose-article max-w-3xl">
        <h1>Política de privacidad</h1>
        <p>
          <em>
            Plantilla de ejemplo conforme al RGPD y la LOPDGDD. Revísala y adáptala con tu
            responsable de tratamiento real antes de publicar el sitio.
          </em>
        </p>

        <h2>1. Responsable del tratamiento</h2>
        <p>
          {siteConfig.author}, contacto: {siteConfig.email}, es el responsable del tratamiento de
          los datos personales recabados a través de {siteConfig.url}.
        </p>

        <h2>2. Datos que recogemos</h2>
        <p>
          A través del formulario de contacto y del formulario de newsletter recogemos, como
          mínimo, tu nombre y correo electrónico. También pueden recogerse datos de navegación de
          forma anónima o pseudonimizada mediante herramientas de analítica.
        </p>

        <h2>3. Finalidad del tratamiento</h2>
        <ul>
          <li>Responder a las consultas enviadas a través del formulario de contacto.</li>
          <li>Enviar la newsletter a quienes se hayan suscrito voluntariamente.</li>
          <li>Analizar el uso del sitio web para mejorar los contenidos ofrecidos.</li>
          <li>Mostrar publicidad, en su caso, a través de Google AdSense.</li>
        </ul>

        <h2>4. Legitimación</h2>
        <p>
          La base legal para el tratamiento de tus datos es el consentimiento expreso que otorgas al
          rellenar los formularios correspondientes.
        </p>

        <h2>5. Conservación de los datos</h2>
        <p>
          Los datos se conservarán mientras exista un interés mutuo o hasta que solicites su
          supresión, momento en el que se eliminarán o se bloquearán según la normativa vigente.
        </p>

        <h2>6. Destinatarios</h2>
        <p>
          No se cederán datos a terceros salvo obligación legal, o los proveedores tecnológicos
          necesarios para prestar el servicio (por ejemplo, herramienta de envío de newsletter o de
          analítica web), con quienes se mantiene el correspondiente contrato de encargo de
          tratamiento.
        </p>

        <h2>7. Derechos de las personas usuarias</h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y
          portabilidad escribiendo a {siteConfig.email}, indicando el derecho que deseas ejercer y
          adjuntando copia de un documento que acredite tu identidad.
        </p>

        <h2>8. Google AdSense y publicidad</h2>
        <p>
          Este sitio puede utilizar Google AdSense, que emplea cookies para mostrar anuncios
          basados en visitas anteriores del usuario a este u otros sitios web. Puedes inhabilitar
          la publicidad personalizada visitando los ajustes de anuncios de Google.
        </p>
      </div>
    </div>
  );
}
