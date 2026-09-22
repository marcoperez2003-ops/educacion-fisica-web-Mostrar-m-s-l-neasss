import Link from "next/link";
import { BookOpen, PenTool, Wrench, TrendingUp } from "lucide-react";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import AdSlot from "@/components/AdSlot";
import { categories } from "@/lib/categories";
import { getLatestArticles, getPopularArticles } from "@/lib/articles";

export default function HomePage() {
  const latest = getLatestArticles(6);
  const popular = getPopularArticles(4);

  return (
    <>
      <Hero />

      {/* Espacio AdSense de cabecera, justo debajo del hero */}
      <div className="container-site mt-8">
        <AdSlot position="header" />
      </div>

      {/* Explicación del proyecto */}
      <section className="container-site py-14">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <BookOpen className="text-primary-600" size={28} />
            <h3 className="font-bold text-slate-900">Recursos verificados</h3>
            <p className="text-sm text-slate-500">
              Cada juego, situación de aprendizaje y rúbrica está pensado por docentes en activo
              de Educación Física y Primaria, listo para llevar al aula.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <PenTool className="text-accent-600" size={28} />
            <h3 className="font-bold text-slate-900">Alineado con la LOMLOE</h3>
            <p className="text-sm text-slate-500">
              Contenidos organizados por competencias específicas y criterios de evaluación,
              facilitando su incorporación directa a tu programación.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Wrench className="text-energy-500" size={28} />
            <h3 className="font-bold text-slate-900">Herramientas prácticas</h3>
            <p className="text-sm text-slate-500">
              Generadores de rúbricas, calculadoras de notas y otras utilidades pensadas para
              ahorrarte tiempo en tu día a día docente.
            </p>
          </div>
        </div>
      </section>

      {/* Categorías destacadas */}
      <section className="container-site pb-14">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Categorías destacadas</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      <div className="container-site pb-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div>
            {/* Últimos artículos */}
            <section className="mb-14">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Últimos artículos</h2>
                <Link href="/blog" className="text-sm font-semibold text-primary-700 hover:underline">
                  Ver todo el blog →
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {latest.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </section>

            {/* Anuncio dentro del contenido de la home */}
            <AdSlot position="in-article" className="mb-14" />

            {/* Artículos populares */}
            <section>
              <div className="mb-6 flex items-center gap-2">
                <TrendingUp className="text-energy-500" size={22} />
                <h2 className="text-2xl font-bold text-slate-900">Artículos populares</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {popular.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </section>
          </div>

          {/* Barra lateral */}
          <aside className="space-y-6">
            <div className="card p-5">
              <h3 className="mb-3 font-bold text-slate-900">Acceso rápido a herramientas</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/herramientas/generador-rubricas" className="text-primary-700 hover:underline">Generador de rúbricas</Link></li>
                <li><Link href="/herramientas/calculadora-notas" className="text-primary-700 hover:underline">Calculadora de notas</Link></li>
                <li><Link href="/herramientas/generador-situaciones-aprendizaje" className="text-primary-700 hover:underline">Generador de situaciones de aprendizaje</Link></li>
                <li><Link href="/herramientas/generador-criterios-evaluacion" className="text-primary-700 hover:underline">Generador de criterios de evaluación</Link></li>
              </ul>
            </div>
            <AdSlot position="sidebar" className="h-64" />
          </aside>
        </div>
      </div>

      <div className="container-site pb-20">
        <Newsletter />
      </div>
    </>
  );
}
