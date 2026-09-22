import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-site flex flex-col items-center justify-center py-24 text-center">
      <p className="text-6xl font-extrabold text-primary-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">Página no encontrada</h1>
      <p className="mt-2 max-w-md text-slate-500">
        El recurso que buscas no existe o ha sido movido. Vuelve al inicio o explora el blog.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="btn-primary">Ir al inicio</Link>
        <Link href="/blog" className="btn-secondary">Ver el blog</Link>
      </div>
    </div>
  );
}
