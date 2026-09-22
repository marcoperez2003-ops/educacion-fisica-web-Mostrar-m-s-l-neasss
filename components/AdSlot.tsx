import { siteConfig } from "@/lib/site";

type AdSlotProps = {
  position: "header" | "in-article" | "article-end" | "sidebar";
  className?: string;
};

const labels: Record<AdSlotProps["position"], string> = {
  header: "Espacio publicitario · Cabecera",
  "in-article": "Espacio publicitario · Dentro del artículo",
  "article-end": "Espacio publicitario · Final del artículo",
  sidebar: "Espacio publicitario · Barra lateral"
};

/**
 * Placeholder de anuncio de Google AdSense.
 *
 * Cuando tengas tu cuenta de AdSense aprobada:
 * 1. Añade el script de AdSense en app/layout.tsx (ver comentario en ese archivo).
 * 2. Sustituye el bloque de abajo por tu <ins class="adsbygoogle" ...> con el
 *    data-ad-slot correspondiente a cada posición.
 * 3. Activa siteConfig.adsense.enabled = true en lib/site.ts.
 */
export default function AdSlot({ position, className = "" }: AdSlotProps) {
  if (!siteConfig.adsense.enabled) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl2 border-2 border-dashed border-slate-200 bg-slate-50 py-8 text-xs font-medium uppercase tracking-wide text-slate-400 ${className}`}
        aria-hidden="true"
      >
        {labels[position]}
      </div>
    );
  }

  // Integración real de AdSense (descomentar y ajustar data-ad-slot cuando esté aprobado):
  // return (
  //   <ins
  //     className={`adsbygoogle block ${className}`}
  //     style={{ display: "block" }}
  //     data-ad-client={siteConfig.adsense.client}
  //     data-ad-slot="0000000000"
  //     data-ad-format="auto"
  //     data-full-width-responsive="true"
  //   />
  // );

  return null;
}
