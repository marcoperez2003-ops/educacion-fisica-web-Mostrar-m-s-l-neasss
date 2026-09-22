import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-white/10" />

      <div className="container-site relative flex flex-col items-start gap-6 py-16 md:py-24">
        <span className="badge bg-white/15 text-white">
          <Sparkles size={14} className="mr-1" /> Recursos LOMLOE actualizados
        </span>
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          Recursos para docentes de Primaria y Educación Física, listos para usar en tu aula
        </h1>
        <p className="max-w-2xl text-base text-primary-50 sm:text-lg">
          Juegos motrices, situaciones de aprendizaje y rúbricas de evaluación gratuitas, pensadas
          por y para maestros de Educación Física en España.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/blog" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
            Explorar el blog <ArrowRight size={18} />
          </Link>
          <Link href="/herramientas" className="btn-secondary border-white text-white hover:bg-white/10">
            Ver herramientas
          </Link>
        </div>
      </div>
    </section>
  );
}
