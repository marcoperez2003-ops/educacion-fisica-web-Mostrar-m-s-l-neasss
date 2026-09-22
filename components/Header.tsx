"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/blog", label: "Blog" },
  ...categories.map((c) => ({ href: `/${c.slug}`, label: c.name })),
  { href: "/herramientas", label: "Herramientas" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-sans text-lg font-bold text-primary-700">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl2 bg-primary-600 text-white">
            <Dumbbell size={18} />
          </span>
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-primary-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Abrir menú"
          className="rounded-lg p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-site flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
