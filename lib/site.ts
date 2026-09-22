export const siteConfig = {
  name: "EduFísica Primaria",
  shortName: "EduFísica",
  description:
    "Recursos gratuitos para docentes de Educación Primaria y Educación Física en España: juegos, situaciones de aprendizaje, rúbricas e instrumentos de evaluación alineados con la LOMLOE.",
  url: "https://www.edufisicaprimaria.es",
  locale: "es_ES",
  keywords: [
    "educación física primaria",
    "juegos educación física",
    "situaciones de aprendizaje",
    "rúbricas de evaluación",
    "recursos docentes primaria",
    "LOMLOE educación física",
    "unidades didácticas primaria"
  ],
  author: "Equipo EduFísica Primaria",
  twitter: "@edufisicaprim",
  email: "hola@edufisicaprimaria.es",
  adsense: {
    // Sustituye por tu client ID real de Google AdSense cuando lo tengas aprobado
    client: "ca-pub-XXXXXXXXXXXXXXXX",
    enabled: false
  },
  analytics: {
    gaId: "G-XXXXXXXXXX"
  }
};

export type SiteConfig = typeof siteConfig;
