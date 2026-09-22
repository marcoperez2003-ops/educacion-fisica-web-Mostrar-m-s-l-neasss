import Link from "next/link";
import { Dumbbell, Mail } from "lucide-react";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-100 bg-slate-50">
      <div className="container-site grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-sans text-lg font-bold text-primary-700">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl2 bg-primary-600 text-white">
              <Dumbbell size={18} />
            </span>
            {siteConfig.shortName}
          </div>
          <p className="mt-3 text-sm text-slate-500">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">Categorías</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="hover:text-primary-700">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">Web</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/blog" className="hover:text-primary-700">Blog</Link></li>
            <li><Link href="/herramientas" className="hover:text-primary-700">Herramientas</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-primary-700">Sobre nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-primary-700">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">Legal</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/aviso-legal" className="hover:text-primary-700">Aviso legal</Link></li>
            <li><Link href="/politica-privacidad" className="hover:text-primary-700">Política de privacidad</Link></li>
            <li><Link href="/politica-cookies" className="hover:text-primary-700">Política de cookies</Link></li>
          </ul>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 flex items-center gap-2 text-sm text-slate-600 hover:text-primary-700"
          >
            <Mail size={16} /> {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {year} {siteConfig.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
