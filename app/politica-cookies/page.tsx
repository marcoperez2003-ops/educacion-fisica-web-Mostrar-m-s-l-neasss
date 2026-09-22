import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre el uso de cookies en EduFísica Primaria.",
  alternates: { canonical: "/politica-cookies" }
};

export default function PoliticaCookiesPage() {
  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: "Política de cookies" }]} />
      <div className="prose-article max-w-3xl">
        <h1>Política de cookies</h1>
        <p>
          <em>
            Plantilla de ejemplo. Cuando actives Google Analytics y Google AdSense, se recomienda
            complementar esta página con un gestor de consentimiento (CMP) certificado por Google
            (IAB TCF) para cumplir con el RGPD y la normativa de cookies.
          </em>
        </p>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo
          del usuario para recordar información sobre su visita, como sus preferencias de
          navegación.
        </p>

        <h2>2. Cookies utilizadas en este sitio</h2>
        <p>Este sitio puede utilizar los siguientes tipos de cookies:</p>
        <ul>
          <li>
            <strong>Cookies técnicas</strong>: necesarias para el correcto funcionamiento del sitio
            web.
          </li>
          <li>
            <strong>Cookies analíticas (Google Analytics)</strong>: permiten cuantificar el número
            de visitantes y analizar el uso del sitio de forma agregada.
          </li>
          <li>
            <strong>Cookies publicitarias (Google AdSense)</strong>: utilizadas para mostrar
            anuncios relevantes en función de la navegación del usuario.
          </li>
        </ul>

        <h2>3. Cómo desactivar las cookies</h2>
        <p>
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu dispositivo mediante la
          configuración de las opciones del navegador que utilices. Además, puedes gestionar la
          publicidad personalizada de Google desde los ajustes de anuncios de tu cuenta de Google.
        </p>

        <h2>4. Cambios en la política de cookies</h2>
        <p>
          {siteConfig.author} puede modificar esta política de cookies en función de exigencias
          legislativas o con la finalidad de adaptarla a las instrucciones de la Agencia Española
          de Protección de Datos, por lo que se aconseja a los usuarios que la visiten periódicamente.
        </p>
      </div>
    </div>
  );
}
