export type Article = {
  slug: string;
  title: string;
  metaDescription: string;
  category: "juegos-educacion-fisica" | "situaciones-aprendizaje" | "evaluacion";
  subcategory: string;
  date: string; // ISO
  author: string;
  readingTime: number; // minutos
  excerpt: string;
  popular?: boolean;
  content: string; // markdown simplificado (## y ### para encabezados)
};

export const articles: Article[] = [
  // ---------- JUEGOS DE EDUCACIÓN FÍSICA (10) ----------
  {
    slug: "el-nudo-humano-juego-cooperativo",
    title: "El nudo humano: juego cooperativo para trabajar la comunicación",
    metaDescription:
      "Descubre cómo aplicar 'el nudo humano', un juego cooperativo de Educación Física para mejorar la comunicación y el trabajo en equipo en Primaria.",
    category: "juegos-educacion-fisica",
    subcategory: "juegos-cooperativos",
    date: "2026-01-12",
    author: "Marta Gómez",
    readingTime: 4,
    popular: true,
    excerpt:
      "Un clásico infalible para trabajar la cooperación: el grupo debe deshacer un nudo formado por sus propios brazos sin soltarse de las manos.",
    content: `
## Objetivo del juego
Fomentar la comunicación verbal, la escucha activa y la resolución conjunta de problemas dentro de un grupo, elementos clave de la competencia social y cívica.

## Desarrollo de la actividad
El alumnado se coloca en círculo, cierra los ojos y extiende ambas manos hacia el centro hasta encontrar dos manos distintas de compañeros diferentes. Al abrir los ojos, el grupo forma un "nudo" que deberá deshacer sin soltarse, hasta recuperar un círculo simple.

### Variantes
- Realizarlo en silencio, usando solo gestos.
- Dividir la clase en grupos de 8-10 para acelerar el proceso.
- Cronometrar y comparar estrategias entre grupos.

## Materiales necesarios
Ninguno. Es ideal para patios, gimnasios o incluso aulas con espacio despejado.

## Claves para el docente
Observa qué roles emergen de forma espontánea (quien organiza, quien propone, quien ejecuta) y aprovecha el debate posterior para reflexionar sobre el trabajo en equipo.
`
  },
  {
    slug: "la-telaraña-juego-cooperativo-confianza",
    title: "La telaraña: juego cooperativo para generar confianza grupal",
    metaDescription:
      "La telaraña es un juego cooperativo perfecto para trabajar la confianza y la cohesión de grupo en las clases de Educación Física de Primaria.",
    category: "juegos-educacion-fisica",
    subcategory: "juegos-cooperativos",
    date: "2026-01-18",
    author: "Marta Gómez",
    readingTime: 3,
    excerpt:
      "Todo el grupo debe atravesar una telaraña de cuerdas sin tocarla, utilizando cada hueco una sola vez y ayudándose entre compañeros.",
    content: `
## Objetivo del juego
Desarrollar la confianza mutua, la empatía y la ayuda entre iguales mediante un reto físico colectivo.

## Desarrollo de la actividad
Se tiende una "telaraña" con cuerdas entre dos árboles, postes o espalderas, dejando huecos de distinto tamaño. El grupo debe pasar todos sus miembros de un lado a otro sin tocar las cuerdas, y cada hueco solo puede usarse una vez.

### Variantes
- Reducir el número de huecos disponibles para aumentar la dificultad.
- Introducir la norma de no poder hablar durante el paso.

## Materiales necesarios
Cuerdas o gomas elásticas y dos puntos de anclaje.

## Claves para el docente
Refuerza la seguridad física supervisando los pasos más complicados y destaca en la puesta en común las conductas de ayuda observadas.
`
  },
  {
    slug: "10-juegos-de-calentamiento-dinamicos",
    title: "10 juegos de calentamiento dinámicos para Educación Física",
    metaDescription:
      "Recopilación de 10 juegos de calentamiento breves y dinámicos, ideales para activar al alumnado al inicio de la sesión de Educación Física.",
    category: "juegos-educacion-fisica",
    subcategory: "juegos-de-calentamiento",
    date: "2026-01-05",
    author: "David Ruiz",
    readingTime: 5,
    popular: true,
    excerpt:
      "Una selección de calentamientos activos, breves y motivantes para preparar el cuerpo y captar la atención del alumnado desde el primer minuto.",
    content: `
## Por qué cuidar el calentamiento
Un buen calentamiento reduce el riesgo de lesiones, activa la atención del grupo y marca el tono emocional de toda la sesión.

## Selección de juegos
1. **Pillar y salvar**: un pillador intenta tocar; para salvarse hay que tocar el suelo con una mano.
2. **Los colores**: el docente dice un color y deben tocar un objeto de ese color en menos de 5 segundos.
3. **Sombras**: por parejas, uno imita todos los movimientos del otro.
4. **El semáforo**: verde (correr), ámbar (andar), rojo (parar).
5. **Cadena de pillar**: quien es pillado se coge de la mano al pillador, formando una cadena.

### Estructura recomendada
Combina 2-3 juegos de la lista, alternando desplazamientos suaves con momentos de mayor intensidad, durante 5-8 minutos.

## Materiales necesarios
Ninguno o material muy básico (petos, conos).

## Claves para el docente
Adapta la intensidad a la temperatura ambiente y a la actividad prevista después del calentamiento.
`
  },
  {
    slug: "calentamiento-con-musica-primaria",
    title: "Calentamiento con música: rutina motivadora para Primaria",
    metaDescription:
      "Propuesta de calentamiento con música para Educación Física en Primaria: una rutina sencilla que mejora la motivación y el ritmo del alumnado.",
    category: "juegos-educacion-fisica",
    subcategory: "juegos-de-calentamiento",
    date: "2026-01-22",
    author: "David Ruiz",
    readingTime: 4,
    excerpt:
      "Una rutina de calentamiento estructurada en bloques musicales que combina movilidad articular, desplazamientos y activación cardiovascular.",
    content: `
## Objetivo de la actividad
Activar el cuerpo de forma progresiva utilizando la música como guía de intensidad y ritmo, fomentando además la expresión corporal.

## Desarrollo de la actividad
Se preparan 3 canciones de intensidad creciente. Durante la primera, movilidad articular en el sitio; en la segunda, desplazamientos por el espacio variando el paso; en la tercera, pequeños saltos y cambios de dirección siguiendo el ritmo.

### Variantes
- Dejar que el alumnado proponga movimientos por turnos ("el director de la música").
- Usar música con distintos tempos para trabajar la percepción rítmica.

## Materiales necesarios
Altavoz portátil y una lista de reproducción de unos 8-10 minutos.

## Claves para el docente
Cuida el volumen y elige canciones sin contenido inapropiado; revisa la letra previamente.
`
  },
  {
    slug: "juegos-sin-material-patio",
    title: "8 juegos sin material para el patio en Educación Física",
    metaDescription:
      "Juegos de Educación Física que no requieren ningún material, perfectos para el patio cuando no dispones de balones ni conos.",
    category: "juegos-educacion-fisica",
    subcategory: "juegos-sin-material",
    date: "2026-01-09",
    author: "Marta Gómez",
    readingTime: 5,
    excerpt:
      "Ideal para imprevistos o sesiones improvisadas: juegos que solo requieren el cuerpo y el espacio disponible.",
    content: `
## Por qué tener un repertorio "sin material"
Permite improvisar sesiones cuando el material está ocupado, roto o no disponible, sin perder calidad pedagógica.

## Selección de juegos
1. **Pilla-pilla por parejas**, cogidos de una mano.
2. **El espejo**, reproduciendo los movimientos de un compañero.
3. **Estatuas musicales** cantadas por el propio grupo.
4. **Carrera de relevos con obstáculos corporales** (saltar, reptar, girar).
5. **El túnel humano**, pasando en fila por debajo de las piernas de los compañeros.

### Adaptaciones
Estos juegos se pueden ajustar fácilmente al espacio disponible reduciendo o ampliando el terreno de juego.

## Materiales necesarios
Ninguno.

## Claves para el docente
Marca claramente los límites del espacio de juego con referencias del propio patio (líneas, porterías, árboles).
`
  },
  {
    slug: "el-pilla-pilla-de-las-formas",
    title: "El pilla-pilla de las formas geométricas",
    metaDescription:
      "Un juego sin material que combina Educación Física y matemáticas: pilla-pilla de las formas geométricas para Primaria.",
    category: "juegos-educacion-fisica",
    subcategory: "juegos-sin-material",
    date: "2026-01-25",
    author: "David Ruiz",
    readingTime: 3,
    excerpt:
      "Un juego interdisciplinar donde salvarse del pillador implica formar una figura geométrica con el cuerpo junto a un compañero.",
    content: `
## Objetivo del juego
Trabajar la carrera, los cambios de dirección y, de forma transversal, el reconocimiento de formas geométricas básicas.

## Desarrollo de la actividad
Uno o varios pilladores persiguen al resto. Para salvarse, dos jugadores deben unirse y formar con su cuerpo la figura geométrica que indique el docente (triángulo, cuadrado, círculo).

### Variantes
- Cambiar la figura cada 30 segundos.
- Exigir grupos de tres o cuatro para figuras más complejas.

## Materiales necesarios
Ninguno.

## Claves para el docente
Aprovecha para reforzar contenidos de matemáticas de forma lúdica y motivadora.
`
  },
  {
    slug: "juegos-espacios-reducidos-aula",
    title: "6 juegos de Educación Física para espacios reducidos o el aula",
    metaDescription:
      "Propuestas de juegos de Educación Física adaptados a espacios reducidos, ideales para aulas o gimnasios pequeños en Primaria.",
    category: "juegos-educacion-fisica",
    subcategory: "juegos-para-espacios-reducidos",
    date: "2026-02-01",
    author: "Marta Gómez",
    readingTime: 4,
    excerpt:
      "Cuando el espacio es limitado, estas propuestas permiten mantener la actividad física y la motivación sin necesidad de grandes desplazamientos.",
    content: `
## Por qué adaptar los juegos al espacio
No siempre se dispone de gimnasio o pista; muchos centros comparten espacios o los tienen ocupados. Adaptar los juegos evita perder sesiones de actividad física.

## Selección de juegos
1. **Simón dice** con movimientos en el sitio.
2. **El barco se hunde**, agrupándose en número de jugadores indicado.
3. **Malabares cooperativos** con pañuelos o bolsas de semillas.
4. **Circuito de equilibrio** entre las mesas del aula.
5. **Relevos de mímica** deportiva.

### Consejos de organización
Despeja el centro del aula moviendo mesas hacia los laterales antes de comenzar.

## Materiales necesarios
Objetos cotidianos del aula: pañuelos, bolsas de semillas, sillas.

## Claves para el docente
Prioriza siempre la seguridad frente a mobiliario y esquinas; marca zonas seguras con cinta adhesiva en el suelo si es necesario.
`
  },
  {
    slug: "circuito-de-habilidades-en-pasillo",
    title: "Circuito de habilidades motrices para pasillos y espacios pequeños",
    metaDescription:
      "Diseña un circuito de habilidades motrices básicas adaptado a pasillos o espacios reducidos en el área de Educación Física.",
    category: "juegos-educacion-fisica",
    subcategory: "juegos-para-espacios-reducidos",
    date: "2026-02-05",
    author: "David Ruiz",
    readingTime: 4,
    excerpt:
      "Un circuito de seis estaciones que combina equilibrio, coordinación y salto, pensado para espacios estrechos y alargados.",
    content: `
## Objetivo de la actividad
Desarrollar habilidades motrices básicas (equilibrio, coordinación, salto) de forma individualizada y segura en espacios estrechos.

## Desarrollo de la actividad
Se organizan seis estaciones en fila a lo largo del pasillo o espacio disponible: caminar sobre una línea, saltar a la pata coja, reptar por debajo de una cuerda, botar un objeto blando, girar sobre sí mismo y caminar de puntillas.

### Variantes
- Cronometrar el paso por el circuito para trabajar la mejora personal.
- Realizarlo por parejas, alternando quien ejecuta y quien observa.

## Materiales necesarios
Cinta adhesiva, cuerdas y algún objeto blando (pelota de tela).

## Claves para el docente
Establece un sentido único de circulación para evitar choques entre el alumnado.
`
  },
  {
    slug: "juegos-dias-de-lluvia-aula",
    title: "7 juegos de Educación Física para días de lluvia",
    metaDescription:
      "Alternativas de Educación Física para días de lluvia: juegos que se pueden desarrollar dentro del aula o en espacios cubiertos.",
    category: "juegos-educacion-fisica",
    subcategory: "juegos-para-dias-de-lluvia",
    date: "2026-02-09",
    author: "Marta Gómez",
    readingTime: 5,
    popular: true,
    excerpt:
      "Un banco de recursos para no perder la esencia de la Educación Física cuando la lluvia impide salir al patio.",
    content: `
## El reto de los días de lluvia
La climatología no debe frenar el desarrollo motor del alumnado. Estas propuestas permiten mantener la actividad dentro del aula o en espacios cubiertos.

## Selección de juegos
1. **Yoga en pareja** con posturas sencillas.
2. **Bailes por imitación** siguiendo un vídeo o al docente.
3. **Juegos de puntería** lanzando pelotas de papel a una papelera.
4. **Circuito de estiramientos** guiado con tarjetas ilustradas.
5. **Twister casero** dibujado con tiza o cinta en el suelo.

### Organización del aula
Aparta el mobiliario hacia los laterales y delimita una zona central de seguridad.

## Materiales necesarios
Papel, cinta adhesiva y, opcionalmente, una pizarra digital para vídeos guiados.

## Claves para el docente
Aprovecha estos días para trabajar contenidos de expresión corporal y relajación que en el patio suelen tener menos protagonismo.
`
  },
  {
    slug: "yoga-infantil-dias-lluvia",
    title: "Sesión de yoga infantil para días de lluvia en Primaria",
    metaDescription:
      "Propuesta de sesión de yoga infantil adaptada a Educación Física en Primaria, ideal como alternativa en días de lluvia.",
    category: "juegos-educacion-fisica",
    subcategory: "juegos-para-dias-de-lluvia",
    date: "2026-02-14",
    author: "David Ruiz",
    readingTime: 4,
    excerpt:
      "Una sesión sencilla de yoga con posturas inspiradas en animales, pensada para trabajar la relajación y la conciencia corporal.",
    content: `
## Objetivo de la actividad
Trabajar la flexibilidad, el equilibrio y la relajación a través de posturas de yoga adaptadas y motivadoras para niños y niñas.

## Desarrollo de la actividad
Se presentan 6-8 posturas con nombres de animales (el gato, el perro, la cobra, el árbol) que el alumnado va reproduciendo siguiendo las indicaciones del docente, terminando con una breve relajación guiada.

### Variantes
- Crear una "historia" que enlace las distintas posturas.
- Trabajar por parejas, ayudándose a mantener el equilibrio.

## Materiales necesarios
Colchonetas o toallas individuales.

## Claves para el docente
Cuida el tono de voz durante la relajación final; un ambiente tranquilo es clave para el éxito de la actividad.
`
  },

  // ---------- SITUACIONES DE APRENDIZAJE (10) ----------
  {
    slug: "situacion-aprendizaje-1-primaria-esquema-corporal",
    title: "Situación de aprendizaje: descubro mi esquema corporal (1º Primaria)",
    metaDescription:
      "Situación de aprendizaje de Educación Física para 1º de Primaria centrada en el conocimiento y control del esquema corporal.",
    category: "situaciones-aprendizaje",
    subcategory: "primero-de-primaria",
    date: "2026-01-08",
    author: "Laura Sánchez",
    readingTime: 6,
    popular: true,
    excerpt:
      "Una propuesta globalizada para que el alumnado de 1º de Primaria explore y reconozca las partes de su cuerpo a través del juego.",
    content: `
## Contextualización
Situación de aprendizaje pensada para el primer trimestre de 1º de Primaria, en la que el alumnado empieza a construir la conciencia de su propio esquema corporal.

## Competencias específicas trabajadas
Se trabaja principalmente la competencia relacionada con la adaptación motriz y el autoconocimiento corporal, en conexión con el área de Conocimiento del Medio.

### Secuencia de actividades
1. Presentación con la canción "Cabeza, hombros, rodillas y pies".
2. Juego "Simón dice" centrado en partes del cuerpo.
3. Circuito de reconocimiento corporal (tocar, señalar, mover partes concretas).
4. Dibujo grupal de la silueta corporal a tamaño real.

## Producto final
Un mural de aula con las siluetas del alumnado, etiquetadas con las partes del cuerpo trabajadas.

## Evaluación
Se propone una lista de control sencilla para verificar el reconocimiento de al menos ocho partes del cuerpo.
`
  },
  {
    slug: "situacion-aprendizaje-1-primaria-juego-simbolico",
    title: "Situación de aprendizaje: el bosque de los animales (1º Primaria)",
    metaDescription:
      "Situación de aprendizaje de Educación Física para 1º de Primaria basada en el juego simbólico y los desplazamientos naturales.",
    category: "situaciones-aprendizaje",
    subcategory: "primero-de-primaria",
    date: "2026-01-15",
    author: "Laura Sánchez",
    readingTime: 5,
    excerpt:
      "El alumnado se convierte en distintos animales para explorar desplazamientos, saltos y equilibrios de forma natural y motivadora.",
    content: `
## Contextualización
Propuesta ideal para las primeras semanas de curso, aprovechando la imaginación infantil para trabajar patrones motores básicos.

## Competencias específicas trabajadas
Desarrollo de patrones motrices básicos (desplazamientos, saltos, giros) desde un enfoque lúdico y globalizado.

### Secuencia de actividades
1. Cuento motor: "Un paseo por el bosque".
2. Imitación de animales (conejo: saltos, serpiente: reptar, águila: brazos extendidos).
3. Circuito temático con obstáculos "naturales" (aros, cuerdas, bancos).
4. Vuelta a la calma con respiración imitando el balanceo de los árboles.

## Producto final
Una pequeña coreografía grupal que representa el "paseo por el bosque" para mostrar a otra clase.

## Evaluación
Escala de observación centrada en la ejecución de los patrones motrices básicos trabajados.
`
  },
  {
    slug: "situacion-aprendizaje-2-primaria-equilibrio",
    title: "Situación de aprendizaje: equilibristas en el circo (2º Primaria)",
    metaDescription:
      "Situación de aprendizaje de Educación Física para 2º de Primaria centrada en el desarrollo del equilibrio estático y dinámico.",
    category: "situaciones-aprendizaje",
    subcategory: "segundo-de-primaria",
    date: "2026-01-20",
    author: "Laura Sánchez",
    readingTime: 6,
    excerpt:
      "Con la temática del circo como hilo conductor, el alumnado trabaja el equilibrio en distintas superficies y situaciones.",
    content: `
## Contextualización
Situación de aprendizaje que utiliza el circo como contexto motivador para trabajar el equilibrio en 2º de Primaria.

## Competencias específicas trabajadas
Control postural y equilibrio estático y dinámico, con conexión al área de Educación Artística mediante la creación de un pequeño espectáculo.

### Secuencia de actividades
1. Presentación del "circo" y sus personajes (equilibristas, malabaristas).
2. Circuito de equilibrio: banco sueco, línea en el suelo, plataformas.
3. Trabajo por parejas de equilibrios compartidos sencillos.
4. Ensayo de una pequeña muestra final de "número circense".

## Producto final
Representación de un pequeño número de circo ante las familias o el resto del centro.

## Evaluación
Rúbrica de tres niveles de logro sobre el control del equilibrio en las distintas estaciones.
`
  },
  {
    slug: "situacion-aprendizaje-2-primaria-lanzamientos",
    title: "Situación de aprendizaje: puntería de campeones (2º Primaria)",
    metaDescription:
      "Situación de aprendizaje de Educación Física para 2º de Primaria enfocada en lanzamientos y recepciones básicas.",
    category: "situaciones-aprendizaje",
    subcategory: "segundo-de-primaria",
    date: "2026-01-27",
    author: "Laura Sánchez",
    readingTime: 5,
    excerpt:
      "Una propuesta centrada en mejorar la coordinación óculo-manual a través de juegos de lanzamiento y recepción.",
    content: `
## Contextualización
Situación de aprendizaje orientada a mejorar la coordinación óculo-manual mediante tareas progresivas de lanzamiento y recepción.

## Competencias específicas trabajadas
Habilidades motrices específicas de manipulación: lanzar, recepcionar y golpear objetos de distinto tamaño y peso.

### Secuencia de actividades
1. Juegos de lanzamiento por parejas con pelotas blandas.
2. Circuito de puntería a dianas de distinto tamaño.
3. Juego "Diez pases" en pequeños grupos.
4. Torneo cooperativo final de puntería por equipos.

## Producto final
Un pequeño torneo de clase con marcador cooperativo (suma de puntos de toda la clase, no competitivo entre grupos).

## Evaluación
Lista de control sobre la ejecución técnica básica del lanzamiento.
`
  },
  {
    slug: "situacion-aprendizaje-3-primaria-orientacion",
    title: "Situación de aprendizaje: la búsqueda del tesoro (3º Primaria)",
    metaDescription:
      "Situación de aprendizaje de Educación Física para 3º de Primaria basada en actividades de orientación en el entorno escolar.",
    category: "situaciones-aprendizaje",
    subcategory: "tercero-de-primaria",
    date: "2026-02-02",
    author: "Laura Sánchez",
    readingTime: 6,
    popular: true,
    excerpt:
      "Un proyecto de orientación deportiva en el patio del centro que combina actividad física, trabajo en equipo y resolución de pistas.",
    content: `
## Contextualización
Situación de aprendizaje que introduce nociones básicas de orientación deportiva a través de una búsqueda del tesoro por el centro.

## Competencias específicas trabajadas
Orientación espacial, trabajo cooperativo y toma de decisiones en un entorno conocido pero desafiante.

### Secuencia de actividades
1. Introducción a los puntos cardinales y a un plano sencillo del centro.
2. Juego de pistas por parejas en un circuito controlado.
3. Búsqueda del tesoro en pequeños grupos con balizas señalizadas.
4. Puesta en común de las estrategias utilizadas.

## Producto final
Un plano del centro elaborado por el alumnado señalando las balizas encontradas.

## Evaluación
Rúbrica que valora tanto la orientación espacial como el trabajo en equipo.
`
  },
  {
    slug: "situacion-aprendizaje-3-primaria-expresion-corporal",
    title: "Situación de aprendizaje: contamos historias con el cuerpo (3º Primaria)",
    metaDescription:
      "Situación de aprendizaje de Educación Física para 3º de Primaria centrada en la expresión corporal y la comunicación no verbal.",
    category: "situaciones-aprendizaje",
    subcategory: "tercero-de-primaria",
    date: "2026-02-10",
    author: "Laura Sánchez",
    readingTime: 5,
    excerpt:
      "El alumnado crea pequeñas historias colectivas utilizando exclusivamente el cuerpo y el movimiento como lenguaje.",
    content: `
## Contextualización
Situación de aprendizaje que pone el foco en la expresión corporal como vía de comunicación, en conexión con Lengua y Educación Artística.

## Competencias específicas trabajadas
Uso del cuerpo y el movimiento como recurso expresivo y comunicativo, respetando y valorando las producciones de los compañeros.

### Secuencia de actividades
1. Juegos de desinhibición corporal (el espejo, estatuas con emociones).
2. Creación de pequeñas escenas grupales sin palabras.
3. Ensayo de una "historia corporal" con inicio, nudo y desenlace.
4. Muestra de las producciones al resto de la clase.

## Producto final
Una breve representación de expresión corporal por grupos, grabada en vídeo para el porfolio del alumnado.

## Evaluación
Escala de observación centrada en la implicación y la claridad expresiva.
`
  },
  {
    slug: "situacion-aprendizaje-4-primaria-juegos-populares",
    title: "Situación de aprendizaje: juegos populares y tradicionales (4º Primaria)",
    metaDescription:
      "Situación de aprendizaje de Educación Física para 4º de Primaria centrada en la recuperación de juegos populares y tradicionales.",
    category: "situaciones-aprendizaje",
    subcategory: "cuarto-de-primaria",
    date: "2026-02-16",
    author: "Laura Sánchez",
    readingTime: 6,
    excerpt:
      "Un proyecto que conecta con las familias para recuperar juegos populares y ponerlos en práctica en el patio del colegio.",
    content: `
## Contextualización
Situación de aprendizaje con un fuerte componente de patrimonio cultural, invitando a las familias a compartir juegos de su infancia.

## Competencias específicas trabajadas
Valoración del juego motor como elemento cultural y de relación intergeneracional, además del desarrollo de habilidades motrices variadas.

### Secuencia de actividades
1. Entrevista breve a familiares sobre juegos de su infancia.
2. Selección grupal de tres juegos populares para investigar.
3. Puesta en práctica de los juegos seleccionados en el patio.
4. Elaboración de un "recetario de juegos" de aula.

## Producto final
Un recetario ilustrado con los juegos populares investigados y sus reglas.

## Evaluación
Rúbrica que valora la investigación, la participación y la explicación de las reglas a los compañeros.
`
  },
  {
    slug: "situacion-aprendizaje-4-primaria-atletismo",
    title: "Situación de aprendizaje: pequeños atletas (4º Primaria)",
    metaDescription:
      "Situación de aprendizaje de Educación Física para 4º de Primaria enfocada en habilidades atléticas básicas: carrera, salto y lanzamiento.",
    category: "situaciones-aprendizaje",
    subcategory: "cuarto-de-primaria",
    date: "2026-02-20",
    author: "Laura Sánchez",
    readingTime: 5,
    excerpt:
      "Una introducción amable al atletismo escolar a través de estaciones de carrera, salto de longitud y lanzamiento de precisión.",
    content: `
## Contextualización
Situación de aprendizaje que introduce las bases del atletismo escolar de forma adaptada, sin buscar la especialización deportiva.

## Competencias específicas trabajadas
Desarrollo de capacidades físicas básicas (velocidad, fuerza, coordinación) y valoración del esfuerzo personal por encima del resultado.

### Secuencia de actividades
1. Estación de carreras de velocidad con salida y meta señalizadas.
2. Estación de salto de longitud sin carrera previa.
3. Estación de lanzamiento de precisión con objetos blandos.
4. Pequeña "jornada atlética" final rotando por las tres estaciones.

## Producto final
Un diploma personalizado de participación para cada estudiante, destacando su progreso individual.

## Evaluación
Registro de marcas personales para comparar la evolución, no la comparación entre compañeros.
`
  },
  {
    slug: "situacion-aprendizaje-5-primaria-deportes-cooperativos",
    title: "Situación de aprendizaje: deportes alternativos y cooperativos (5º Primaria)",
    metaDescription:
      "Situación de aprendizaje de Educación Física para 5º de Primaria centrada en deportes alternativos con enfoque cooperativo.",
    category: "situaciones-aprendizaje",
    subcategory: "quinto-de-primaria",
    date: "2026-02-24",
    author: "Laura Sánchez",
    readingTime: 6,
    popular: true,
    excerpt:
      "Introducción al kin-ball, el tchoukball y otros deportes alternativos que priorizan la cooperación sobre la competición directa.",
    content: `
## Contextualización
Situación de aprendizaje que amplía el repertorio deportivo del alumnado más allá de los deportes convencionales, en 5º de Primaria.

## Competencias específicas trabajadas
Adaptación a nuevas lógicas de juego, fair play y cooperación en un contexto de reglas no habituales.

### Secuencia de actividades
1. Presentación teórica breve de dos o tres deportes alternativos.
2. Práctica guiada de las reglas básicas de cada deporte.
3. Torneo cooperativo mixto rotando de equipo tras cada partido.
4. Asamblea final sobre qué deporte les ha resultado más inclusivo.

## Producto final
Un mural o infografía de aula explicando las reglas del deporte alternativo preferido por la clase.

## Evaluación
Rúbrica centrada en el fair play, el respeto a las normas y la participación activa.
`
  },
  {
    slug: "situacion-aprendizaje-6-primaria-proyecto-final",
    title: "Situación de aprendizaje: organizamos unas olimpiadas escolares (6º Primaria)",
    metaDescription:
      "Situación de aprendizaje de Educación Física para 6º de Primaria: el alumnado organiza y gestiona unas olimpiadas escolares como proyecto final de etapa.",
    category: "situaciones-aprendizaje",
    subcategory: "sexto-de-primaria",
    date: "2026-03-01",
    author: "Laura Sánchez",
    readingTime: 7,
    popular: true,
    excerpt:
      "Un proyecto integrador de fin de etapa donde el alumnado de 6º asume la organización de unas pequeñas olimpiadas para todo el centro.",
    content: `
## Contextualización
Situación de aprendizaje que cierra la etapa de Primaria con un proyecto de gran autonomía: el alumnado de 6º organiza unas olimpiadas escolares para los cursos inferiores.

## Competencias específicas trabajadas
Autonomía, responsabilidad, planificación de eventos deportivos y aplicación práctica de los aprendizajes motrices adquiridos durante la etapa.

### Secuencia de actividades
1. Reparto de comisiones (pruebas, decoración, arbitraje, comunicación).
2. Diseño de las pruebas deportivas adaptadas a cada curso.
3. Ensayo general y ajuste de tiempos y espacios.
4. Celebración de la jornada olímpica con todo el centro.

## Producto final
Un evento deportivo real, con ceremonia de apertura, pruebas por estaciones y entrega de diplomas simbólicos.

## Evaluación
Rúbrica de coevaluación entre comisiones, valorando organización, actitud y trabajo en equipo.
`
  },

  // ---------- EVALUACIÓN (10) ----------
  {
    slug: "como-disenar-una-rubrica-educacion-fisica",
    title: "Cómo diseñar una rúbrica de evaluación en Educación Física paso a paso",
    metaDescription:
      "Guía práctica para diseñar rúbricas de evaluación en Educación Física de Primaria: criterios, niveles de logro y ejemplos.",
    category: "evaluacion",
    subcategory: "rubricas",
    date: "2026-01-06",
    author: "Carlos Iglesias",
    readingTime: 7,
    popular: true,
    excerpt:
      "Una guía clara y práctica para construir rúbricas útiles y realistas, evitando los errores más habituales del profesorado novel.",
    content: `
## Qué es una rúbrica y para qué sirve
Una rúbrica es un instrumento de evaluación que describe distintos niveles de logro para uno o varios criterios, facilitando una valoración objetiva y transparente.

## Pasos para diseñar una rúbrica
1. Selecciona el criterio de evaluación o competencia específica a valorar.
2. Define entre 3 y 4 niveles de logro (por ejemplo: iniciado, en proceso, logrado, avanzado).
3. Describe cada nivel con indicadores observables y concretos.
4. Evita valoraciones ambiguas como "bien" o "regular"; usa descripciones de conducta.

### Ejemplo aplicado
Para el criterio "control del bote de balón": desde "pierde el control con frecuencia" hasta "mantiene el bote a distintas velocidades sin mirar el balón".

## Errores frecuentes a evitar
Rúbricas demasiado extensas, niveles poco diferenciados entre sí y lenguaje poco accesible para el alumnado.

## Claves para el docente
Comparte la rúbrica con el alumnado antes de la actividad: la evaluación debe ser también una herramienta de aprendizaje.
`
  },
  {
    slug: "rubrica-trabajo-en-equipo-primaria",
    title: "Rúbrica para evaluar el trabajo en equipo en Educación Física",
    metaDescription:
      "Modelo de rúbrica para evaluar el trabajo en equipo del alumnado de Primaria en las sesiones de Educación Física.",
    category: "evaluacion",
    subcategory: "rubricas",
    date: "2026-01-14",
    author: "Carlos Iglesias",
    readingTime: 5,
    excerpt:
      "Un modelo de rúbrica centrado en las actitudes cooperativas: comunicación, aportación de ideas y respeto a los compañeros.",
    content: `
## Contexto de uso
Rúbrica pensada para actividades cooperativas y proyectos grupales dentro del área de Educación Física.

## Criterios propuestos
1. **Comunicación**: escucha y se expresa con claridad dentro del grupo.
2. **Aportación**: propone ideas y soluciones al grupo.
3. **Respeto**: acepta las decisiones grupales y valora las aportaciones ajenas.
4. **Responsabilidad**: cumple con la parte del trabajo que le corresponde.

### Niveles de logro
Se recomiendan cuatro niveles por criterio, desde "no participa" hasta "lidera de forma positiva la dinámica grupal".

## Aplicación práctica
Puede utilizarse tanto en coevaluación entre iguales como en heteroevaluación por parte del docente.

## Claves para el docente
Combina esta rúbrica con una breve asamblea final para contrastar la percepción del grupo con la observación docente.
`
  },
  {
    slug: "listas-de-control-educacion-fisica-que-son",
    title: "Listas de control en Educación Física: qué son y cómo aplicarlas",
    metaDescription:
      "Descubre qué son las listas de control, cuándo utilizarlas frente a una rúbrica y cómo diseñarlas para Educación Física en Primaria.",
    category: "evaluacion",
    subcategory: "listas-de-control",
    date: "2026-01-19",
    author: "Carlos Iglesias",
    readingTime: 5,
    excerpt:
      "Una herramienta ágil de evaluación dicotómica (sí/no) muy útil para verificar la presencia o ausencia de conductas concretas.",
    content: `
## Qué es una lista de control
Es un instrumento de evaluación que recoge un conjunto de indicadores que se marcan como presentes o ausentes, sin graduación de niveles.

## Cuándo utilizarla frente a una rúbrica
Es especialmente útil para verificar aspectos técnicos concretos (por ejemplo, la ejecución correcta de un gesto) o para el pase de lista de aspectos de seguridad.

### Ejemplo aplicado
Para la técnica de salto de longitud: carrera de impulso adecuada (sí/no), batida con un solo pie (sí/no), caída equilibrada (sí/no).

## Ventajas e inconvenientes
Es rápida de aplicar y objetiva, pero ofrece menos matices que una rúbrica para valorar procesos complejos.

## Claves para el docente
Combina listas de control con observación cualitativa para no perder información relevante sobre el proceso de aprendizaje.
`
  },
  {
    slug: "lista-de-control-habitos-higiene-ef",
    title: "Lista de control de hábitos de higiene y seguridad en Educación Física",
    metaDescription:
      "Modelo de lista de control para evaluar hábitos de higiene, cuidado del material y seguridad en las clases de Educación Física.",
    category: "evaluacion",
    subcategory: "listas-de-control",
    date: "2026-01-29",
    author: "Carlos Iglesias",
    readingTime: 4,
    excerpt:
      "Un instrumento sencillo para hacer seguimiento de hábitos transversales como el cambio de calzado, la hidratación o el cuidado del material.",
    content: `
## Contexto de uso
Lista de control pensada para valorar hábitos y actitudes que se repiten sesión tras sesión a lo largo del curso.

## Indicadores propuestos
1. Trae y utiliza calzado deportivo adecuado.
2. Se hidrata de forma autónoma cuando lo necesita.
3. Guarda y recoge el material utilizado.
4. Respeta las normas básicas de seguridad indicadas por el docente.

### Periodicidad recomendada
Se sugiere aplicarla de forma puntual, dos o tres veces al trimestre, y no en cada sesión.

## Aplicación práctica
Puede convertirse en una tabla de seguimiento visual para el propio alumnado, fomentando la autonomía.

## Claves para el docente
Utilízala como punto de partida para el diálogo con las familias sobre hábitos saludables, no solo como registro sancionador.
`
  },
  {
    slug: "escalas-de-observacion-educacion-fisica",
    title: "Escalas de observación en Educación Física: guía completa",
    metaDescription:
      "Todo lo que necesitas saber sobre las escalas de observación como instrumento de evaluación en Educación Física de Primaria.",
    category: "evaluacion",
    subcategory: "escalas-de-observacion",
    date: "2026-02-03",
    author: "Carlos Iglesias",
    readingTime: 6,
    excerpt:
      "Una escala de observación permite graduar la frecuencia o calidad de una conducta a lo largo de un continuo, aportando más matiz que una lista de control.",
    content: `
## Qué es una escala de observación
Instrumento que permite valorar la frecuencia, intensidad o calidad de una conducta mediante una escala graduada (por ejemplo, de 1 a 4 o "nunca-a veces-casi siempre-siempre").

## Diseño de una escala de observación
1. Selecciona las conductas motrices o actitudinales a observar.
2. Define claramente los extremos de la escala.
3. Redacta descriptores breves para los puntos intermedios si es posible.

### Ejemplo aplicado
Para "participación en el juego": desde "permanece al margen del juego" hasta "participa activamente y anima a sus compañeros".

## Ventajas frente a otros instrumentos
Aporta mayor sensibilidad que una lista de control dicotómica y es más rápida de cumplimentar que una rúbrica extensa.

## Claves para el docente
Utiliza plantillas con los nombres del alumnado preimpresos para agilizar el registro durante la propia sesión.
`
  },
  {
    slug: "escala-observacion-actitud-deportiva",
    title: "Escala de observación de la actitud deportiva y el fair play",
    metaDescription:
      "Modelo de escala de observación centrado en la actitud deportiva, el fair play y el respeto a las normas en Educación Física.",
    category: "evaluacion",
    subcategory: "escalas-de-observacion",
    date: "2026-02-11",
    author: "Carlos Iglesias",
    readingTime: 5,
    excerpt:
      "Una herramienta pensada para juegos y deportes de oposición o colaboración-oposición donde el fair play cobra especial relevancia.",
    content: `
## Contexto de uso
Escala pensada para sesiones de juegos predeportivos o deportes de equipo, donde surgen con frecuencia situaciones de conflicto o tensión competitiva.

## Indicadores propuestos
1. Acepta las decisiones arbitrales sin protestar.
2. Felicita al equipo contrario al finalizar el juego.
3. Anima a sus compañeros en lugar de criticarlos.
4. Respeta las normas del juego incluso sin supervisión directa.

### Escala sugerida
De 1 (conducta ausente) a 4 (conducta constante y espontánea).

## Aplicación práctica
Resulta muy útil aplicarla de forma cruzada: autoevaluación del alumnado y observación docente, para contrastar percepciones.

## Claves para el docente
Comenta los resultados en una asamblea breve, centrando el foco en la mejora y no en la sanción.
`
  },
  {
    slug: "instrumentos-evaluacion-competencial-ef",
    title: "Instrumentos de evaluación competencial para Educación Física",
    metaDescription:
      "Panorama de los principales instrumentos de evaluación competencial en Educación Física: rúbricas, listas, escalas y portafolios.",
    category: "evaluacion",
    subcategory: "instrumentos-de-evaluacion",
    date: "2026-02-17",
    author: "Carlos Iglesias",
    readingTime: 6,
    popular: true,
    excerpt:
      "Una visión general de los instrumentos de evaluación más adecuados para un enfoque competencial en el área de Educación Física.",
    content: `
## El reto de evaluar por competencias
La LOMLOE plantea una evaluación centrada en competencias específicas y criterios de evaluación, lo que exige diversificar los instrumentos utilizados.

## Principales instrumentos
1. **Rúbricas**: ideales para procesos complejos con varios niveles de logro.
2. **Listas de control**: útiles para verificar aspectos técnicos puntuales.
3. **Escalas de observación**: adecuadas para graduar actitudes y conductas.
4. **Portafolio del alumnado**: recopila evidencias variadas a lo largo del curso.

### Cómo combinarlos
Ningún instrumento es suficiente por sí solo; se recomienda triangular al menos dos instrumentos distintos por criterio de evaluación relevante.

## Registro y organización
Utiliza un cuaderno del docente digital o en papel que permita relacionar cada instrumento con los criterios de evaluación correspondientes.

## Claves para el docente
Empieza por seleccionar dos o tres instrumentos que domines bien antes de ampliar el repertorio.
`
  },
  {
    slug: "portafolio-del-alumnado-educacion-fisica",
    title: "El portafolio del alumnado como instrumento de evaluación en Educación Física",
    metaDescription:
      "Cómo implementar un portafolio del alumnado en Educación Física de Primaria para recoger evidencias de aprendizaje a lo largo del curso.",
    category: "evaluacion",
    subcategory: "instrumentos-de-evaluacion",
    date: "2026-02-22",
    author: "Carlos Iglesias",
    readingTime: 5,
    excerpt:
      "El portafolio permite recopilar fotografías, dibujos, autoevaluaciones y reflexiones que muestran el progreso individual del alumnado.",
    content: `
## Qué es un portafolio en Educación Física
Una colección organizada de evidencias (fotos, dibujos, fichas, autoevaluaciones) que documenta el progreso del alumnado a lo largo de un periodo.

## Cómo implementarlo
1. Define qué evidencias se recogerán en cada situación de aprendizaje.
2. Establece una estructura sencilla (física o digital) para organizarlas.
3. Incluye siempre un espacio de autorreflexión del alumnado.

### Ejemplo de evidencias
Fotografía de un circuito superado, dibujo de un juego favorito, ficha de autoevaluación tras un torneo cooperativo.

## Ventajas del portafolio
Favorece la metacognición y permite mostrar la evolución a las familias de forma visual y cercana.

## Claves para el docente
Un portafolio digital compartido con las familias puede convertirse también en una herramienta de comunicación muy valorada.
`
  },
  {
    slug: "autoevaluacion-coevaluacion-primaria",
    title: "Autoevaluación y coevaluación en Educación Física de Primaria",
    metaDescription:
      "Guía práctica para introducir la autoevaluación y la coevaluación entre iguales en las clases de Educación Física de Primaria.",
    category: "evaluacion",
    subcategory: "instrumentos-de-evaluacion",
    date: "2026-02-27",
    author: "Carlos Iglesias",
    readingTime: 6,
    excerpt:
      "Implicar al alumnado en su propia evaluación mejora la motivación y el desarrollo de la competencia de aprender a aprender.",
    content: `
## Por qué implicar al alumnado en la evaluación
La autoevaluación y la coevaluación fomentan la responsabilidad, la autocrítica constructiva y la competencia de aprender a aprender.

## Cómo introducir la autoevaluación
1. Utiliza fichas sencillas con caras (contento, neutro, triste) en los primeros cursos.
2. Progresa hacia escalas numéricas o descriptivas en cursos superiores.
3. Pregunta siempre "qué has mejorado" además de "qué has conseguido".

### Cómo introducir la coevaluación
Establece parejas o pequeños grupos que se observen mutuamente en una tarea concreta, utilizando un instrumento breve y objetivo.

## Precauciones a tener en cuenta
Trabaja previamente el respeto y la crítica constructiva para evitar comentarios hirientes entre compañeros.

## Claves para el docente
Empieza con criterios muy concretos y observables antes de pedir valoraciones más globales o subjetivas.
`
  },
  {
    slug: "evaluacion-formativa-educacion-fisica-lomloe",
    title: "Evaluación formativa en Educación Física bajo la LOMLOE",
    metaDescription:
      "Cómo aplicar una evaluación formativa y continua en Educación Física de Primaria, alineada con los principios de la LOMLOE.",
    category: "evaluacion",
    subcategory: "instrumentos-de-evaluacion",
    date: "2026-03-03",
    author: "Carlos Iglesias",
    readingTime: 7,
    excerpt:
      "La LOMLOE pone el foco en una evaluación continua y formativa que acompañe el proceso de aprendizaje, más allá de la calificación final.",
    content: `
## Principios de la evaluación formativa
La evaluación formativa busca recoger información durante el proceso de aprendizaje para ajustar la intervención docente y ofrecer retroalimentación útil al alumnado.

## Cómo aplicarla en Educación Física
1. Recoge evidencias de forma continua, no solo al final de la unidad.
2. Ofrece retroalimentación descriptiva ("qué has hecho bien" y "qué puedes mejorar").
3. Da al alumnado oportunidades reales de mejora tras la retroalimentación.

### Instrumentos recomendados
Combina rúbricas, escalas de observación y momentos de autoevaluación distribuidos a lo largo de toda la situación de aprendizaje, no solo en la sesión final.

## Diferencias con la evaluación sumativa
La evaluación sumativa certifica un resultado final, mientras que la formativa acompaña y orienta el proceso; ambas son compatibles y necesarias.

## Claves para el docente
Reserva siempre unos minutos al final de cada sesión para una retroalimentación breve, oral o escrita, al conjunto del grupo.
` 
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string) {
  return articles.filter((a) => a.category === categorySlug);
}

export function getArticlesBySubcategory(subcategorySlug: string) {
  return articles.filter((a) => a.subcategory === subcategorySlug);
}

export function getPopularArticles(limit = 4) {
  return articles.filter((a) => a.popular).slice(0, limit);
}

export function getLatestArticles(limit = 6) {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getRelatedArticles(current: Article, limit = 3) {
  return articles
    .filter((a) => a.slug !== current.slug && a.category === current.category)
    .slice(0, limit);
}
