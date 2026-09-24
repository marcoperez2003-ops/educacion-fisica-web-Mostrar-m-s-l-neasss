export type Article = {
  slug: string;
  title: string;
  metaDescription: string;
  category: "juegos-educacion-fisica" | "situaciones-aprendizaje" | "evaluacion";
  subcategory: string;
  subject: string; // slug de la asignatura, ver lib/subjects.ts
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
  slug: "juego-panuelo-educacion-fisica",
  title: "El juego del pañuelo en Educación Física: reglas y variantes",
  metaDescription:
    "Descubre cómo organizar el juego del pañuelo en Educación Física, sus reglas básicas y varias adaptaciones para Primaria.",
  category: "juegos-educacion-fisica",
  subject: "educacion-fisica",
  subcategory: "juegos-de-calentamiento",
  date: "2026-09-22",
  author: "Marco Pérez",
  readingTime: 3,
  popular: true,
  excerpt:
    "El juego del pañuelo es un clásico de Educación Física que desarrolla la velocidad de reacción, la atención y la motivación del alumnado.",
  content: `
## ¿Qué es el juego del pañuelo?

El juego del pañuelo es una actividad tradicional muy utilizada en Educación Física por su sencillez y su capacidad para motivar al alumnado.

## Material necesario

- Un pañuelo.
- Espacio amplio y seguro.

## Cómo se juega

Se forman dos equipos con el mismo número de jugadores. Cada participante recibe un número.

El docente se coloca en el centro sujetando un pañuelo y dice un número en voz alta. Los dos jugadores correspondientes deben correr para intentar coger el pañuelo y regresar a su campo sin ser tocados.

## Variantes

- Llamar a dos números a la vez.
- Utilizar operaciones matemáticas en lugar de números.
- Realizar desplazamientos diferentes antes de correr.

## Beneficios educativos

- Mejora de la velocidad de reacción.
- Desarrollo de la atención.
- Respeto de normas.
- Trabajo de la toma de decisiones.

## Conclusión

El juego del pañuelo sigue siendo una de las actividades más efectivas para dinamizar sesiones de Educación Física en Primaria.
`
},
{
  slug: "15-juegos-cooperativos-educacion-fisica-primaria",
  title: "15 juegos cooperativos para Educación Física en Primaria",
  metaDescription:
    "15 juegos cooperativos para Educación Física en Primaria que fomentan el trabajo en equipo, la comunicación y la inclusión del alumnado.",
  category: "juegos-educacion-fisica",
  subject: "educacion-fisica",
  subcategory: "juegos-cooperativos",
  date: "2026-09-22",
  author: "Marco Pérez",
  readingTime: 6,
  popular: true,
  excerpt:
    "Descubre una selección de juegos cooperativos para Educación Física en Primaria ideales para mejorar la cohesión grupal, la comunicación y la participación de todo el alumnado.",
  content: `
## ¿Por qué utilizar juegos cooperativos en Educación Física?
<br>
Los juegos cooperativos son una herramienta fundamental dentro de las clases de Educación Física. A diferencia de los juegos competitivos tradicionales, el objetivo no es ganar a otros compañeros, sino colaborar para alcanzar una meta común.
<br>
Este enfoque favorece la inclusión, reduce los conflictos y permite que todo el alumnado participe activamente independientemente de su nivel de habilidad motriz.
<br>
Además, los juegos cooperativos ayudan a desarrollar competencias personales y sociales como la empatía, la comunicación, la resolución de problemas y el trabajo en equipo.
<br>
## 1. El nudo humano
<br>
El alumnado forma un círculo, cierra los ojos y extiende las manos hacia el centro para agarrar las manos de otros compañeros. El grupo deberá deshacer el nudo sin soltarse.
<br>
## 2. La isla
<br>
Toda la clase debe mantenerse encima de una zona delimitada que se va reduciendo progresivamente.
<br>
## 3. Transportar la pelota
<br>
Por parejas o pequeños grupos, los participantes deben transportar una pelota de un punto a otro sin utilizar las manos.
<br>
## 4. La telaraña
<br>
El grupo debe atravesar una estructura de cuerdas utilizando cada hueco una única vez.
<br>
## 5. El puente humano
<br>
Los compañeros forman un puente con sus cuerpos para que otros puedan desplazarse de forma segura.
<br>
## 6. La cadena cooperativa
<br>
Todos los participantes deben desplazarse unidos formando una única cadena humana.
<br>
## 7. Construcción de figuras
<br>
El docente propone figuras geométricas o letras que deben construirse utilizando únicamente los cuerpos de los participantes.
<br>
## 8. Relevos cooperativos
<br>
El objetivo no es competir entre equipos, sino conseguir que todo el grupo complete el recorrido en el menor tiempo posible.
<br>
## 9. El paracaídas
<br>
Utilizando una tela grande, el alumnado debe realizar diferentes desafíos sin que los objetos colocados encima se caigan.
<br>
## 10. Pase colectivo
<br>
El grupo debe completar un número determinado de pases sin que el balón caiga al suelo.
<br>
## 11. El circuito compartido
<br>
Cada alumno completa una parte del recorrido y ayuda al siguiente compañero a superar el obstáculo.
<br>
## 12. Construimos una torre
<br>
Los participantes reciben diferentes materiales y deben construir la torre más alta posible colaborando entre todos.
<br>
## 13. Atrapa el tesoro
<br>
El grupo debe recuperar varios objetos distribuidos por el espacio siguiendo unas normas de cooperación.
<br>
## 14. El laberinto cooperativo
<br>
Un compañero realiza el recorrido con los ojos cerrados mientras el resto le guía mediante instrucciones.
<br>
## 15. La misión imposible
<br>
El alumnado debe superar diferentes retos físicos utilizando únicamente los recursos y compañeros disponibles.
<br>
## Recomendaciones para el docente
<br>
Para que los juegos cooperativos funcionen correctamente es importante explicar claramente los objetivos, valorar el proceso más que el resultado, favorecer la participación de todos, adaptar la dificultad a la edad del alumnado y realizar una reflexión final tras la actividad.
<br>
## Conclusión
<br>
Los juegos cooperativos permiten trabajar contenidos motrices mientras se desarrollan habilidades sociales fundamentales para la convivencia escolar.
<br>
Incorporar este tipo de actividades en Educación Física favorece la inclusión, mejora el clima de aula y ayuda al alumnado a comprender la importancia de colaborar para alcanzar objetivos comunes.
`
},
  {
    slug: "la-telaraña-juego-cooperativo-confianza",
    title: "La telaraña: juego cooperativo para generar confianza grupal",
    metaDescription:
      "La telaraña es un juego cooperativo perfecto para trabajar la confianza y la cohesión de grupo en las clases de Educación Física de Primaria.",
    category: "juegos-educacion-fisica",
    subject: "educacion-fisica",
    subcategory: "juegos-cooperativos",
    date: "2026-01-18",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "juegos-de-calentamiento",
    date: "2026-01-05",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "juegos-de-calentamiento",
    date: "2026-01-22",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "juegos-sin-material",
    date: "2026-01-09",
    author: "Marco Pérez",
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
    subject: "matematicas",
    subcategory: "juegos-sin-material",
    date: "2026-01-25",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "juegos-para-espacios-reducidos",
    date: "2026-02-01",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "juegos-para-espacios-reducidos",
    date: "2026-02-05",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "juegos-para-dias-de-lluvia",
    date: "2026-02-09",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "juegos-para-dias-de-lluvia",
    date: "2026-02-14",
    author: "Marco Pérez",
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
  slug: "como-crear-situacion-aprendizaje-lomloe",
  title: "Cómo crear una situación de aprendizaje paso a paso según la LOMLOE",
  metaDescription:
    "Aprende a diseñar una situación de aprendizaje paso a paso según la LOMLOE. Guía práctica para docentes de Primaria con ejemplos y consejos.",
  category: "situaciones-aprendizaje",
  subject: "educacion-fisica",
  subcategory: "tercero-de-primaria",
  date: "2026-09-22",
  author: "Marco Pérez",
  readingTime: 8,
  popular: true,
  excerpt:
    "Guía práctica para diseñar situaciones de aprendizaje según la LOMLOE, desde la contextualización inicial hasta la evaluación final.",
  content: `
## ¿Qué es una situación de aprendizaje?
<br>
Las situaciones de aprendizaje son uno de los elementos clave de la LOMLOE. Se trata de propuestas didácticas que permiten al alumnado aplicar conocimientos, habilidades y competencias en contextos significativos y cercanos a su realidad.
<br>
Su finalidad es conectar el aprendizaje con situaciones reales y favorecer el desarrollo competencial del alumnado.
<br>
## Paso 1. Elegir un contexto significativo
<br>
Toda situación de aprendizaje debe partir de un contexto cercano al alumnado.
<br>
Algunos ejemplos son:
<br>
- La alimentación saludable.
- El cuidado del medio ambiente.
- Los Juegos Olímpicos.
- Los hábitos de vida activa.
- La convivencia escolar.
<br>
Un buen contexto aumenta la motivación y facilita la participación.
<br>
## Paso 2. Definir el producto final
<br>
El producto final es la evidencia que demostrará que el alumnado ha alcanzado los aprendizajes previstos.
<br>
Algunos ejemplos:
<br>
- Un mural.
- Una presentación oral.
- Una exposición.
- Una infografía.
- Una competición organizada por el alumnado.
<br>
Este producto debe estar relacionado con las competencias específicas trabajadas.
<br>
## Paso 3. Seleccionar las competencias específicas
<br>
La LOMLOE sitúa las competencias específicas en el centro del proceso de enseñanza y aprendizaje.
<br>
Por ello es importante seleccionar aquellas competencias que realmente se desean desarrollar mediante la situación de aprendizaje.
<br>
No es necesario incluir muchas competencias. En la mayoría de los casos es suficiente con dos o tres bien trabajadas.
<br>
## Paso 4. Relacionar criterios de evaluación
<br>
Los criterios de evaluación permiten concretar qué se va a valorar.
<br>
Es recomendable elegir únicamente aquellos criterios que estén directamente relacionados con las actividades propuestas y con el producto final.
<br>
Una situación de aprendizaje excesivamente cargada de criterios suele dificultar el proceso de evaluación.
<br>
## Paso 5. Diseñar las actividades
<br>
Las actividades deben organizarse de forma progresiva.
<br>
Una posible secuencia podría ser:
<br>
1. Actividad inicial de motivación.
2. Investigación o descubrimiento.
3. Actividades prácticas.
4. Elaboración del producto final.
5. Presentación y reflexión.
<br>
La coherencia entre actividades y objetivos es fundamental para el éxito de la propuesta.
<br>
## Paso 6. Elegir instrumentos de evaluación
<br>
La evaluación debe integrarse desde el inicio del diseño.
<br>
Algunos instrumentos muy utilizados son:
<br>
- Rúbricas.
- Listas de control.
- Escalas de observación.
- Portafolios.
- Autoevaluaciones.
- Coevaluaciones.
<br>
Es recomendable combinar varios instrumentos para obtener información más completa.
<br>
## Paso 7. Incorporar medidas de atención a la diversidad
<br>
Todas las situaciones de aprendizaje deben contemplar medidas que faciliten la participación de todo el alumnado.
<br>
Estas medidas pueden incluir:
<br>
- Adaptaciones metodológicas.
- Apoyos visuales.
- Diferentes niveles de dificultad.
- Agrupamientos flexibles.
- Materiales adaptados.
<br>
La inclusión debe estar presente desde la planificación inicial.
<br>
## Errores frecuentes al diseñar situaciones de aprendizaje
<br>
Algunos errores habituales son:
<br>
- Incluir demasiados criterios de evaluación.
- Diseñar actividades sin conexión con el producto final.
- Utilizar contextos poco motivadores.
- No prever medidas de atención a la diversidad.
- Confundir una unidad didáctica con una situación de aprendizaje.
<br>
Evitar estos errores facilitará un diseño más coherente y efectivo.
<br>
## Ejemplo sencillo
<br>
Título: "Organizamos unas olimpiadas escolares".
<br>
Contexto: promoción de hábitos saludables.
<br>
Producto final: organización de una jornada olímpica para otras clases.
<br>
Competencias específicas: cooperación, autonomía y práctica de actividad física saludable.
<br>
Instrumentos de evaluación: rúbrica, lista de control y autoevaluación.
<br>
## Conclusión
<br>
Diseñar una situación de aprendizaje según la LOMLOE no consiste únicamente en planificar actividades. Es necesario crear experiencias significativas que permitan al alumnado desarrollar competencias, resolver problemas reales y demostrar sus aprendizajes mediante productos finales relevantes.
<br>
Con una buena planificación y una evaluación coherente, las situaciones de aprendizaje se convierten en una herramienta muy valiosa para mejorar la calidad educativa.
`
},
{
  slug: "ejemplo-situacion-aprendizaje-matematicas-6-primaria",
  title: "Ejemplo de Situación de Aprendizaje de Matemáticas para 6º de Primaria (LOMLOE)",
  metaDescription:
    "Ejemplo completo de situación de aprendizaje de Matemáticas para 6º de Primaria basado en la organización de un viaje de fin de curso según la LOMLOE.",
  category: "situaciones-aprendizaje",
  subject: "matematicas",
  subcategory: "sexto-de-primaria",
  date: "2026-09-22",
  author: "Marco Pérez",
  readingTime: 12,
  popular: true,
  excerpt:
    "Situación de aprendizaje de Matemáticas para 6º de Primaria donde el alumnado organiza un viaje de fin de curso aplicando cálculos, presupuestos y resolución de problemas reales.",
  content: `
# Ejemplo de Situación de Aprendizaje de Matemáticas para 6º de Primaria

## Introducción
<br>
Las situaciones de aprendizaje permiten conectar los contenidos matemáticos con problemas reales y significativos para el alumnado. A través de ellas, los estudiantes comprenden que las matemáticas no son únicamente operaciones o ejercicios, sino herramientas útiles para tomar decisiones en situaciones cotidianas.
<br>
En esta propuesta, el alumnado de 6º de Primaria deberá organizar un viaje de fin de curso ficticio. Para lograrlo tendrá que comparar presupuestos, calcular gastos, interpretar tablas de datos, estimar costes, diseñar itinerarios y tomar decisiones económicas justificadas.
<br>
Esta situación de aprendizaje permite trabajar numerosos contenidos matemáticos de forma integrada mientras se fomenta la autonomía, la responsabilidad y el trabajo cooperativo.
<br>
## Contextualización
<br>
- Etapa: Educación Primaria
- Curso: 6º de Primaria
- Área: Matemáticas
- Temporalización: 8 sesiones
- Agrupamientos: Individual, parejas y grupos cooperativos
- Metodología: Aprendizaje basado en proyectos y trabajo cooperativo
<br>
## Situación de partida
<br>
El alumnado recibe una propuesta del equipo directivo: organizar el viaje de fin de curso de manera autónoma.
<br>
Para ello deberá:
<br>
- Seleccionar el destino.
- Calcular el coste total.
- Comparar diferentes opciones de transporte.
- Gestionar un presupuesto.
- Elaborar una presentación final justificando sus decisiones.
<br>
El reto consiste en planificar el viaje más adecuado teniendo en cuenta las limitaciones económicas establecidas.
<br>
## Producto final
<br>
Cada grupo elaborará un dossier completo del viaje que incluirá:
<br>
- Destino elegido.
- Presupuesto detallado.
- Itinerario.
- Comparación de alternativas.
- Presentación oral justificando las decisiones tomadas.
<br>
## Competencias específicas trabajadas
<br>
Durante esta situación de aprendizaje se desarrollan competencias relacionadas con:
<br>
- La resolución de problemas.
- El razonamiento matemático.
- La interpretación de datos.
- La toma de decisiones fundamentadas.
- La comunicación matemática.
- El trabajo cooperativo.
<br>
## Objetivos de aprendizaje
<br>
Al finalizar la situación de aprendizaje, el alumnado será capaz de:
<br>
1. Resolver problemas relacionados con situaciones económicas reales.
2. Interpretar tablas y gráficos.
3. Realizar cálculos con números decimales.
4. Elaborar presupuestos sencillos.
5. Comparar alternativas utilizando criterios matemáticos.
6. Comunicar resultados de forma clara y organizada.
<br>
## Saberes básicos trabajados
<br>
### Sentido numérico
<br>
- Operaciones con números naturales y decimales.
- Estimación y cálculo mental.
- Resolución de problemas.
<br>
### Sentido de la medida
<br>
- Magnitudes económicas.
- Cálculo de costes.
- Comparación de precios.
<br>
### Sentido algebraico
<br>
- Relaciones entre variables.
- Planteamiento de estrategias de resolución.
<br>
### Sentido estadístico
<br>
- Interpretación de tablas.
- Análisis de datos.
- Elaboración de gráficos.
<br>
## Desarrollo de las sesiones
<br>
### Sesión 1: Lanzamiento del reto
<br>
El docente presenta la situación. El alumnado descubre que deberá organizar un viaje completo para toda la clase respetando un presupuesto determinado.
<br>
Se forman grupos de trabajo y se explican los criterios de evaluación.
<br>
### Sesión 2: Investigación de destinos
<br>
Cada grupo investiga tres destinos posibles.
<br>
Deben recopilar información sobre:
<br>
- Alojamiento.
- Transporte.
- Actividades.
- Distancias.
- Precios.
<br>
Toda la información se organiza en tablas.
<br>
### Sesión 3: Comparación de presupuestos
<br>
Los grupos reciben diferentes presupuestos ficticios.
<br>
El alumnado analiza:
<br>
- Coste total.
- Coste por alumno.
- Ventajas e inconvenientes.
<br>
Posteriormente justifican cuál consideran la mejor opción.
<br>
### Sesión 4: Operaciones y cálculo económico
<br>
Se realizan actividades relacionadas con:
<br>
- Sumas de gastos.
- Reparto de costes.
- Descuentos.
- Incrementos de precio.
<br>
Los estudiantes deben comprobar si el presupuesto disponible es suficiente.
<br>
### Sesión 5: Representación de datos
<br>
Cada grupo elabora:
<br>
- Tablas.
- Diagramas de barras.
- Gráficos circulares.
<br>
Los gráficos sirven para representar la distribución de gastos.
<br>
### Sesión 6: Planificación del itinerario
<br>
Los alumnos diseñan un itinerario detallado del viaje.
<br>
Deben calcular:
<br>
- Horarios.
- Duración de desplazamientos.
- Tiempo disponible para actividades.
<br>
### Sesión 7: Elaboración del producto final
<br>
Los grupos preparan su dossier y la presentación oral.
<br>
El objetivo es convencer al resto de la clase de que su propuesta es la mejor.
<br>
### Sesión 8: Exposición y evaluación
<br>
Cada equipo presenta su proyecto.
<br>
Posteriormente se realiza una votación argumentada y una reflexión final sobre el trabajo desarrollado.
<br>
## Atención a la diversidad
<br>
Para garantizar la participación de todo el alumnado se plantean medidas como:
<br>
- Apoyos visuales.
- Plantillas estructuradas.
- Calculadoras en determinados momentos.
- Diferentes niveles de complejidad.
- Roles cooperativos adaptados.
<br>
Estas medidas permiten que cada estudiante participe según sus posibilidades.
<br>
## Instrumentos de evaluación
<br>
### Rúbrica de proyecto
<br>
Evalúa:
<br>
- Exactitud de los cálculos.
- Organización de la información.
- Presentación final.
- Trabajo cooperativo.
<br>
### Lista de control
<br>
Permite verificar:
<br>
- Uso correcto de operaciones.
- Elaboración de tablas.
- Interpretación de datos.
<br>
### Observación directa
<br>
El docente registra:
<br>
- Participación.
- Estrategias utilizadas.
- Colaboración entre compañeros.
<br>
### Autoevaluación
<br>
Cada alumno reflexiona sobre:
<br>
- Lo aprendido.
- Las dificultades encontradas.
- Las mejoras realizadas.
<br>
## Criterios de evaluación
<br>
Se valorará que el alumnado:
<br>
- Resuelva problemas de manera eficiente.
- Utilice procedimientos adecuados.
- Interprete información numérica correctamente.
- Justifique decisiones mediante razonamientos matemáticos.
- Comunique resultados utilizando lenguaje matemático apropiado.
<br>
## Beneficios de esta situación de aprendizaje
<br>
Entre las ventajas de esta propuesta destacan:
<br>
- Alta motivación.
- Aplicación práctica de las matemáticas.
- Desarrollo de la autonomía.
- Trabajo cooperativo.
- Mejora de la competencia matemática.
- Integración de diferentes saberes básicos.
<br>
Además, favorece la participación activa del alumnado durante todo el proceso.
<br>
## Conclusión
<br>
La situación de aprendizaje "Organizamos un viaje de fin de curso" constituye una excelente propuesta para 6º de Primaria porque combina contenidos matemáticos con un reto cercano y significativo.
<br>
A través de la comparación de presupuestos, el análisis de datos y la toma de decisiones, el alumnado desarrolla competencias fundamentales para su vida cotidiana. El aprendizaje deja de centrarse en ejercicios aislados para convertirse en una experiencia práctica, motivadora y plenamente conectada con la realidad.
`
},
{
  slug: "situacion-aprendizaje-lengua-4-primaria-periodico-escolar",
  title: "Situación de Aprendizaje de Lengua para 4º de Primaria: Creamos un Periódico Escolar",
  metaDescription:
    "Ejemplo completo de situación de aprendizaje de Lengua para 4º de Primaria basado en la creación de un periódico escolar siguiendo la LOMLOE.",
  category: "situaciones-aprendizaje",
  subject: "lengua-y-literatura",
  subcategory: "cuarto-de-primaria",
  date: "2026-09-22",
  author: "Marco Pérez",
  readingTime: 15,
  popular: true,
  excerpt:
    "Situación de aprendizaje de Lengua para 4º de Primaria en la que el alumnado crea un periódico escolar desarrollando la expresión escrita, comprensión lectora y comunicación oral.",
  content: `
# Situación de Aprendizaje de Lengua para 4º de Primaria: Creamos un Periódico Escolar

## Introducción
<br>
La competencia comunicativa es uno de los pilares fundamentales de la Educación Primaria. El alumnado necesita desarrollar habilidades relacionadas con la comprensión lectora, la expresión escrita, la comunicación oral y la capacidad de analizar e interpretar información.
<br>
Esta situación de aprendizaje plantea un reto motivador y cercano: la creación de un periódico escolar elaborado íntegramente por el alumnado.
<br>
A través de esta propuesta, los estudiantes asumirán el papel de periodistas, redactores, fotógrafos y editores, desarrollando diferentes tipos de textos mientras trabajan de forma cooperativa.
<br>
El proyecto permite integrar contenidos curriculares de Lengua Castellana y Literatura mediante una experiencia práctica, significativa y muy cercana a la realidad.
<br>
## Contextualización
<br>
- Etapa: Educación Primaria
- Curso: 4º de Primaria
- Área: Lengua Castellana y Literatura
- Temporalización: 10 sesiones
- Agrupamientos: Individual, parejas y grupos cooperativos
- Metodología: Aprendizaje Basado en Proyectos
<br>
## Situación de partida
<br>
El equipo directivo propone al alumnado la creación de un periódico escolar que recoja noticias, entrevistas y acontecimientos importantes del centro educativo.
<br>
Los estudiantes deberán investigar, redactar, corregir y publicar diferentes textos para elaborar un periódico completo destinado a toda la comunidad educativa.
<br>
## Producto final
<br>
Elaboración de un periódico escolar que incluya:
<br>
- Noticias.
- Entrevistas.
- Reportajes.
- Pasatiempos.
- Recomendaciones literarias.
- Eventos del centro.
<br>
Además, los grupos realizarán una presentación oral final para explicar su trabajo.
<br>
## Justificación
<br>
El periódico escolar constituye una herramienta muy potente para trabajar la comunicación escrita de manera funcional.
<br>
Los alumnos comprenden que escribir tiene una finalidad real y que sus textos serán leídos por otras personas.
<br>
Esta situación favorece la motivación y permite trabajar numerosos contenidos de Lengua de forma integrada.
<br>
## Competencias específicas trabajadas
<br>
A través de esta situación de aprendizaje se desarrollan competencias relacionadas con:
<br>
- Comprensión de textos escritos.
- Producción de textos escritos.
- Comunicación oral.
- Búsqueda y análisis de información.
- Trabajo cooperativo.
- Competencia digital.
<br>
## Objetivos de aprendizaje
<br>
Al finalizar el proyecto, el alumnado será capaz de:
<br>
1. Identificar las características de diferentes textos periodísticos.
2. Buscar información relevante en fuentes fiables.
3. Elaborar textos escritos adecuados a una finalidad comunicativa.
4. Revisar y corregir producciones propias.
5. Utilizar herramientas digitales básicas para presentar información.
6. Participar de manera activa en tareas cooperativas.
<br>
## Saberes básicos trabajados
<br>
### Comunicación oral
<br>
- Escucha activa.
- Presentaciones orales.
- Entrevistas.
<br>
### Comprensión lectora
<br>
- Lectura de textos informativos.
- Identificación de ideas principales.
- Análisis de noticias.
<br>
### Expresión escrita
<br>
- Producción de textos periodísticos.
- Organización de la información.
- Uso adecuado de conectores.
<br>
### Reflexión sobre la lengua
<br>
- Ortografía.
- Puntuación.
- Coherencia y cohesión textual.
<br>
## Desarrollo de las sesiones
<br>
### Sesión 1: Presentación del reto
<br>
El alumnado descubre que deberá crear un periódico escolar.
<br>
Se muestran ejemplos reales de periódicos y se identifican las principales secciones.
<br>
Los estudiantes realizan una lluvia de ideas sobre posibles noticias relacionadas con el centro educativo.
<br>
### Sesión 2: ¿Qué es una noticia?
<br>
Se analiza la estructura básica de una noticia:
<br>
- Titular.
- Entradilla.
- Cuerpo de la noticia.
<br>
Se leen ejemplos reales adaptados al nivel del alumnado.
<br>
### Sesión 3: Búsqueda de información
<br>
Cada grupo selecciona un tema de interés:
<br>
- Actividades del centro.
- Deportes.
- Biblioteca.
- Excursiones.
- Celebraciones.
<br>
Los alumnos recopilan información mediante entrevistas y observaciones.
<br>
### Sesión 4: Elaboración de noticias
<br>
Los equipos comienzan a redactar sus noticias.
<br>
Se trabaja la organización de ideas, la claridad del mensaje y la estructura textual.
<br>
### Sesión 5: Aprendemos a entrevistar
<br>
Se explican las características de una entrevista.
<br>
Los estudiantes preparan preguntas para entrevistar a docentes, personal del centro o compañeros.
<br>
### Sesión 6: Realización de entrevistas
<br>
Los grupos realizan entrevistas reales y recogen información relevante para el periódico.
<br>
### Sesión 7: Revisión y corrección
<br>
Se revisan todos los textos producidos.
<br>
El alumnado corrige:
<br>
- Ortografía.
- Signos de puntuación.
- Coherencia.
- Presentación.
<br>
### Sesión 8: Diseño del periódico
<br>
Los grupos organizan las diferentes secciones.
<br>
Se incorporan imágenes, titulares y elementos visuales.
<br>
### Sesión 9: Preparación de la presentación final
<br>
Cada equipo prepara una breve exposición oral explicando las tareas realizadas.
<br>
### Sesión 10: Publicación y difusión
<br>
Se presenta el periódico al resto del centro.
<br>
Los alumnos comparten su experiencia y reflexionan sobre los aprendizajes adquiridos.
<br>
## Atención a la diversidad
<br>
La propuesta incorpora medidas para garantizar la participación de todo el alumnado:
<br>
- Textos adaptados.
- Apoyos visuales.
- Plantillas estructuradas.
- Trabajo cooperativo.
- Agrupamientos flexibles.
<br>
Estas medidas facilitan el acceso al aprendizaje independientemente del nivel competencial de cada estudiante.
<br>
## Instrumentos de evaluación
<br>
### Rúbrica de producción escrita
<br>
Valora:
<br>
- Organización del texto.
- Corrección gramatical.
- Ortografía.
- Creatividad.
<br>
### Lista de control
<br>
Permite verificar:
<br>
- Participación.
- Cumplimiento de tareas.
- Uso adecuado de las fuentes.
<br>
### Observación directa
<br>
Se registran aspectos relacionados con:
<br>
- Colaboración.
- Implicación.
- Comunicación oral.
<br>
### Autoevaluación
<br>
Cada estudiante reflexiona sobre:
<br>
- Lo aprendido.
- Las dificultades encontradas.
- Aspectos a mejorar.
<br>
## Criterios de evaluación
<br>
Se valorará que el alumnado:
<br>
- Comprenda diferentes tipos de textos.
- Produzca escritos claros y coherentes.
- Organice adecuadamente la información.
- Utilice estrategias de revisión textual.
- Participe activamente en tareas cooperativas.
<br>
## Beneficios de esta situación de aprendizaje
<br>
Esta propuesta permite:
<br>
- Mejorar la competencia lingüística.
- Incrementar la motivación hacia la lectura y la escritura.
- Potenciar el trabajo cooperativo.
- Favorecer la autonomía.
- Desarrollar habilidades comunicativas reales.
<br>
Además, conecta el aprendizaje con situaciones muy próximas a la realidad del alumnado.
<br>
## Conclusión
<br>
La creación de un periódico escolar constituye una situación de aprendizaje muy completa para 4º de Primaria.
<br>
A través de ella, los estudiantes desarrollan competencias comunicativas esenciales mientras participan en un proyecto significativo y motivador.
<br>
La integración de lectura, escritura, comunicación oral y trabajo cooperativo convierte esta propuesta en una excelente herramienta para implementar la LOMLOE en el área de Lengua Castellana y Literatura.
`
},
  {
    slug: "situacion-aprendizaje-1-primaria-esquema-corporal",
    title: "Situación de aprendizaje: descubro mi esquema corporal (1º Primaria)",
    metaDescription:
      "Situación de aprendizaje de Educación Física para 1º de Primaria centrada en el conocimiento y control del esquema corporal.",
    category: "situaciones-aprendizaje",
    subject: "ciencias-naturales",
    subcategory: "primero-de-primaria",
    date: "2026-01-08",
    author: "Marco Pérez",
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
  slug: "situacion-aprendizaje-matematicas-mercado-escolar",
  title: "Situación de Aprendizaje de Matemáticas: El Mercado Escolar",
  metaDescription:
    "Ejemplo completo de situación de aprendizaje de Matemáticas para Educación Primaria basada en el aprendizaje práctico mediante un mercado escolar.",
  category: "situaciones-aprendizaje",
  subject: "matematicas",
  subcategory: "matematicas",
  date: "2026-09-22",
  author: "Marco Pérez",
  readingTime: 10,
  popular: true,
  excerpt:
    "Propuesta de situación de aprendizaje de Matemáticas para Primaria centrada en el uso práctico del dinero, operaciones básicas y resolución de problemas.",
  content: `
# Situación de Aprendizaje de Matemáticas: El Mercado Escolar

## Introducción

Las Matemáticas cobran más sentido cuando el alumnado comprende su utilidad en la vida cotidiana. Esta situación de aprendizaje propone la creación de un mercado escolar en el aula donde los estudiantes deberán comprar, vender, calcular precios y administrar un presupuesto.

## Contextualización

- Etapa: Educación Primaria
- Curso recomendado: 4º Primaria
- Área: Matemáticas
- Temporalización: 8 sesiones
- Agrupamientos: Individual, parejas y grupos cooperativos

## Justificación

El uso del dinero forma parte de la vida diaria del alumnado. Mediante esta propuesta se desarrollan habilidades matemáticas relacionadas con el cálculo, la resolución de problemas y la toma de decisiones en contextos reales.

## Producto Final

Creación y gestión de un mercado escolar donde los alumnos elaborarán productos, establecerán precios y realizarán operaciones de compra y venta utilizando dinero ficticio.

## Competencias Específicas

- Resolver problemas utilizando operaciones básicas.
- Aplicar estrategias de cálculo mental.
- Interpretar información numérica en contextos cotidianos.
- Comunicar procesos matemáticos de forma clara.

## Saberes Básicos

- Numeración decimal.
- Sumas y restas con cantidades monetarias.
- Multiplicación y división en situaciones reales.
- Resolución de problemas.
- Educación financiera básica.

## Objetivos

1. Utilizar operaciones matemáticas en situaciones reales.
2. Interpretar precios y cantidades.
3. Gestionar presupuestos sencillos.
4. Trabajar de forma cooperativa.
5. Desarrollar autonomía en la toma de decisiones.

## Desarrollo de las sesiones

### Sesión 1: Descubrimos el mercado

Conversación inicial sobre comercios y compras habituales.

### Sesión 2: Diseñamos los puestos

Cada grupo crea un pequeño negocio y decide qué productos vender.

### Sesión 3: Establecemos precios

Los alumnos calculan precios y elaboran etiquetas.

### Sesión 4: Calculamos presupuestos

Cada equipo recibe una cantidad inicial de dinero ficticio.

### Sesión 5: Apertura del mercado

Comienzan las compras y ventas entre los grupos.

### Sesión 6: Resolución de problemas

Se plantean situaciones relacionadas con descuentos, cambios y devoluciones.

### Sesión 7: Balance económico

Los equipos registran ingresos y gastos.

### Sesión 8: Evaluación final

Reflexión sobre los aprendizajes desarrollados.

## Atención a la diversidad

- Adaptación de cantidades y cálculos.
- Uso de apoyos visuales.
- Trabajo cooperativo.
- Material manipulativo.

## Instrumentos de evaluación

- Observación directa.
- Rúbrica de trabajo cooperativo.
- Registro de actividades.
- Resolución de problemas.
- Autoevaluación.

## Criterios de evaluación

- Resuelve operaciones de forma adecuada.
- Aplica estrategias matemáticas.
- Participa activamente en las tareas.
- Comunica razonamientos matemáticos.
- Gestiona correctamente los recursos disponibles.

## Conclusión

Esta situación de aprendizaje permite conectar las Matemáticas con experiencias reales y significativas para el alumnado. El mercado escolar favorece la motivación y facilita el desarrollo de competencias matemáticas esenciales para la vida cotidiana.
`
},
{
  slug: "situacion-aprendizaje-ciencias-naturales-5-primaria-medio-ambiente",
  title: "Situación de Aprendizaje de Ciencias Naturales para 5º de Primaria: Guardianes del Medio Ambiente",
  metaDescription:
    "Ejemplo completo de situación de aprendizaje de Ciencias Naturales para 5º de Primaria basada en la protección del medio ambiente y el desarrollo sostenible.",
  category: "situaciones-aprendizaje",
  subject: "ciencias-naturales",
  subcategory: "quinto-de-primaria",
  date: "2026-09-22",
  author: "Marco Pérez",
  readingTime: 16,
  popular: true,
  excerpt:
    "Situación de aprendizaje de Ciencias Naturales para 5º de Primaria donde el alumnado investiga problemas medioambientales y desarrolla propuestas para mejorar su entorno.",
  content: `
# Situación de Aprendizaje de Ciencias Naturales para 5º de Primaria: Guardianes del Medio Ambiente

## Introducción
<br>
La educación ambiental constituye uno de los grandes retos de la escuela actual. Los problemas relacionados con la contaminación, el cambio climático, la pérdida de biodiversidad y la generación de residuos hacen necesario que el alumnado desarrolle hábitos responsables desde edades tempranas.
<br>
Esta situación de aprendizaje pretende convertir a los estudiantes en protagonistas activos de la mejora de su entorno. A través de actividades de investigación, observación y acción, el alumnado analizará diferentes problemas medioambientales y diseñará propuestas concretas para contribuir a la conservación del planeta.
<br>
La propuesta se fundamenta en los principios de la LOMLOE y promueve el desarrollo de competencias relacionadas con la sostenibilidad, la ciudadanía responsable y el pensamiento científico.
<br>
## Contextualización
<br>
- Etapa: Educación Primaria
- Curso: 5º de Primaria
- Área: Ciencias Naturales
- Temporalización: 10 sesiones
- Agrupamientos: Individual, parejas y grupos cooperativos
- Metodología: Aprendizaje Basado en Proyectos
<br>
## Situación de partida
<br>
Durante los últimos años se ha observado un aumento de residuos en los espacios públicos cercanos al centro educativo.
<br>
El ayuntamiento solicita la colaboración de los estudiantes para investigar qué ocurre y plantear posibles soluciones.
<br>
El alumnado deberá actuar como un equipo de investigadores ambientales encargado de analizar la situación y proponer medidas de mejora.
<br>
## Producto final
<br>
Cada grupo elaborará una campaña medioambiental que incluirá:
<br>
- Investigación sobre un problema ambiental.
- Recogida y análisis de datos.
- Diseño de carteles informativos.
- Elaboración de propuestas de mejora.
- Presentación pública de los resultados.
<br>
## Justificación
<br>
Los problemas ambientales afectan directamente a la vida cotidiana del alumnado.
<br>
Trabajar este tema desde una perspectiva práctica contribuye a desarrollar conductas responsables y favorece la adquisición de hábitos sostenibles.
<br>
Además, permite conectar los contenidos curriculares con situaciones reales y cercanas.
<br>
## Competencias específicas trabajadas
<br>
A través de esta situación de aprendizaje se desarrollan competencias relacionadas con:
<br>
- Investigación científica.
- Resolución de problemas.
- Ciudadanía responsable.
- Sostenibilidad ambiental.
- Comunicación oral y escrita.
- Competencia digital.
<br>
## Objetivos de aprendizaje
<br>
Al finalizar el proyecto, el alumnado será capaz de:
<br>
1. Identificar problemas ambientales presentes en su entorno.
2. Analizar causas y consecuencias de dichos problemas.
3. Recoger e interpretar datos mediante técnicas sencillas de investigación.
4. Diseñar propuestas de mejora viables.
5. Comunicar resultados utilizando distintos formatos.
6. Adoptar hábitos de comportamiento sostenibles.
<br>
## Saberes básicos trabajados
<br>
### Medio ambiente y sostenibilidad
<br>
- Ecosistemas.
- Conservación de recursos naturales.
- Impacto de la actividad humana.
<br>
### Investigación científica
<br>
- Observación sistemática.
- Registro de datos.
- Elaboración de conclusiones.
<br>
### Salud y calidad de vida
<br>
- Entornos saludables.
- Gestión responsable de residuos.
- Consumo responsable.
<br>
## Desarrollo de las sesiones
<br>
### Sesión 1: Presentación del reto
<br>
El docente presenta el problema ambiental detectado en el entorno escolar.
<br>
Se visualizan imágenes y noticias relacionadas con la contaminación y la sostenibilidad.
<br>
Posteriormente se realiza una lluvia de ideas sobre posibles causas y soluciones.
<br>
### Sesión 2: ¿Qué problemas ambientales existen?
<br>
Los grupos investigan diferentes problemas:
<br>
- Contaminación del suelo.
- Contaminación del agua.
- Contaminación atmosférica.
- Generación de residuos.
- Pérdida de biodiversidad.
<br>
Se elaboran fichas informativas sencillas.
<br>
### Sesión 3: Trabajo de campo
<br>
El alumnado realiza observaciones en el entorno próximo al centro.
<br>
Registran:
<br>
- Tipos de residuos encontrados.
- Lugares más afectados.
- Posibles causas.
<br>
Toda la información se recoge en tablas de observación.
<br>
### Sesión 4: Análisis de datos
<br>
Los estudiantes organizan la información obtenida y elaboran gráficos sencillos para representar los resultados.
<br>
### Sesión 5: Consecuencias ambientales
<br>
Cada grupo investiga qué consecuencias tiene el problema ambiental asignado.
<br>
Posteriormente comparten los resultados con el resto de la clase.
<br>
### Sesión 6: Búsqueda de soluciones
<br>
El alumnado analiza posibles medidas de mejora.
<br>
Se estudian ejemplos reales de campañas medioambientales desarrolladas en otras ciudades y centros educativos.
<br>
### Sesión 7: Diseño de la campaña
<br>
Los grupos elaboran:
<br>
- Carteles.
- Infografías.
- Trípticos informativos.
- Presentaciones digitales.
<br>
### Sesión 8: Preparación de la exposición
<br>
Se organiza la presentación final de los proyectos.
<br>
Los estudiantes preparan sus intervenciones orales y ensayan las explicaciones.
<br>
### Sesión 9: Exposición pública
<br>
Cada grupo presenta su campaña al resto de la clase o a otras aulas del centro.
<br>
### Sesión 10: Reflexión y evaluación
<br>
El alumnado reflexiona sobre los aprendizajes adquiridos y valora el impacto de las propuestas elaboradas.
<br>
## Atención a la diversidad
<br>
La situación de aprendizaje contempla medidas de inclusión:
<br>
- Material visual de apoyo.
- Textos adaptados.
- Diferentes niveles de complejidad.
- Grupos heterogéneos.
- Roles cooperativos estructurados.
<br>
Estas adaptaciones permiten una participación activa de todo el alumnado.
<br>
## Instrumentos de evaluación
<br>
### Rúbrica de proyecto
<br>
Evalúa:
<br>
- Calidad de la investigación.
- Análisis de datos.
- Creatividad.
- Presentación final.
<br>
### Lista de control
<br>
Permite verificar:
<br>
- Participación.
- Cumplimiento de tareas.
- Uso adecuado de fuentes.
<br>
### Observación directa
<br>
Se registran aspectos relacionados con:
<br>
- Trabajo cooperativo.
- Actitud.
- Capacidad de investigación.
<br>
### Autoevaluación
<br>
Cada alumno reflexiona sobre:
<br>
- Lo aprendido.
- Su implicación.
- Aspectos de mejora.
<br>
## Criterios de evaluación
<br>
Se valorará que el alumnado:
<br>
- Identifique problemas ambientales.
- Analice sus causas y consecuencias.
- Utilice estrategias básicas de investigación.
- Proponga soluciones realistas.
- Comunique resultados de forma eficaz.
<br>
## Beneficios de esta situación de aprendizaje
<br>
Esta propuesta favorece:
<br>
- El aprendizaje significativo.
- La conciencia ambiental.
- La participación activa.
- El pensamiento crítico.
- La responsabilidad ciudadana.
- El desarrollo de competencias científicas.
<br>
Además, conecta directamente los contenidos curriculares con la realidad del alumnado.
<br>
## Conclusión
<br>
La situación de aprendizaje "Guardianes del Medio Ambiente" permite al alumnado comprender que sus acciones tienen impacto sobre el entorno.
<br>
A través de la investigación, la observación y la acción, los estudiantes desarrollan conocimientos científicos al mismo tiempo que adquieren hábitos responsables y sostenibles que podrán aplicar durante toda su vida.
`
},
{
  slug: "situacion-aprendizaje-ingles-6-primaria-travel-agency",
  title: "Situación de Aprendizaje de Inglés para 6º de Primaria: Nuestra Agencia de Viajes",
  metaDescription:
    "Situación de aprendizaje de Inglés para 6º de Primaria basada en la creación de una agencia de viajes. Propuesta completa adaptada a la LOMLOE.",
  category: "situaciones-aprendizaje",
  subcategory: "sexto-de-primaria",
  subject: "ingles",
  date: "2026-09-22",
  author: "Marco Pérez",
  readingTime: 15,
  popular: true,
  excerpt:
    "Proyecto de Inglés para 6º de Primaria donde el alumnado crea una agencia de viajes utilizando la lengua inglesa en contextos reales de comunicación.",
  content: `
# Situación de Aprendizaje de Inglés para 6º de Primaria: Nuestra Agencia de Viajes

## Introducción
<br>
La enseñanza de lenguas extranjeras debe permitir al alumnado utilizar el idioma en situaciones reales de comunicación. El objetivo principal no es memorizar vocabulario o estructuras gramaticales aisladas, sino desarrollar la capacidad de comprender, interactuar y expresarse en diferentes contextos.
<br>
Esta situación de aprendizaje propone un reto motivador: la creación de una agencia de viajes internacional. El alumnado trabajará en equipos para diseñar destinos turísticos, crear itinerarios, elaborar folletos informativos y presentar propuestas de viaje utilizando el inglés como lengua de comunicación.
<br>
Mediante esta propuesta se desarrollarán las destrezas de comprensión oral, comprensión escrita, expresión oral e interacción, así como competencias relacionadas con el trabajo cooperativo, la creatividad y el uso responsable de herramientas digitales.
<br>

## Contextualización
<br>

- Etapa: Educación Primaria
- Curso: 6º de Primaria
- Área: Lengua Extranjera Inglés
- Temporalización: 10 sesiones
- Agrupamientos: Individual, parejas y grupos cooperativos
- Metodología: Aprendizaje Basado en Proyectos
<br>

## Situación de partida
<br>

Una importante empresa de turismo busca nuevas agencias de viajes capaces de diseñar experiencias atractivas para jóvenes viajeros internacionales.
<br>

Los estudiantes recibirán el reto de crear una agencia de viajes ficticia y presentar una propuesta de viaje utilizando el inglés como lengua principal de comunicación.
<br>

Cada grupo deberá investigar países, ciudades y lugares de interés, organizar actividades y diseñar materiales promocionales para convencer a posibles clientes.
<br>

## Producto Final
<br>

Cada equipo elaborará:
<br>

- Nombre y logotipo de la agencia.
- Guía turística en inglés.
- Folleto informativo.
- Presentación digital.
- Exposición oral final.
<br>

El producto será presentado ante la clase simulando una feria internacional de turismo.
<br>

## Justificación
<br>

El turismo es una realidad cercana al alumnado y una de las situaciones donde el inglés tiene una aplicación más evidente.
<br>

Esta propuesta permite utilizar la lengua extranjera en un contexto auténtico y funcional, favoreciendo la motivación y el desarrollo de competencias comunicativas.
<br>

Además, fomenta la autonomía y la creatividad mediante la elaboración de proyectos significativos.
<br>

## Competencias Específicas Trabajadas
<br>

Durante la situación de aprendizaje se desarrollan competencias relacionadas con:
<br>

- Comprensión de mensajes orales.
- Producción de textos escritos sencillos.
- Interacción oral en situaciones comunicativas.
- Mediación lingüística.
- Competencia digital.
- Trabajo cooperativo.
<br>

## Objetivos de Aprendizaje
<br>

Al finalizar el proyecto, el alumnado será capaz de:
<br>

1. Comprender información básica relacionada con viajes y turismo.
2. Utilizar vocabulario específico de destinos, transportes y actividades.
3. Elaborar textos escritos en inglés con finalidad informativa.
4. Participar en conversaciones sencillas relacionadas con viajes.
5. Presentar oralmente información de manera clara y organizada.
6. Utilizar recursos digitales para elaborar productos comunicativos.
<br>

## Saberes Básicos Trabajados
<br>

### Comunicación oral
<br>

- Presentaciones.
- Interacciones guiadas.
- Comprensión de vídeos y audios.
<br>

### Comprensión escrita
<br>

- Folletos turísticos.
- Carteles informativos.
- Textos breves sobre ciudades y países.
<br>

### Producción escrita
<br>

- Descripciones.
- Recomendaciones.
- Itinerarios.
- Folletos turísticos.
<br>

### Léxico
<br>

- Countries and nationalities.
- Means of transport.
- Tourist attractions.
- Weather.
- Holidays and leisure activities.
<br>

### Competencia intercultural
<br>

- Respeto por otras culturas.
- Conocimiento de diferentes países.
- Valoración de la diversidad.
<br>

## Desarrollo de las Sesiones
<br>

### Sesión 1: Presentación del reto
<br>

Se presenta el proyecto y se explica el funcionamiento de una agencia de viajes.
<br>

Los estudiantes conocen ejemplos reales de agencias y analizan
  {
    slug: "situacion-aprendizaje-1-primaria-juego-simbolico",
    title: "Situación de aprendizaje: el bosque de los animales (1º Primaria)",
    metaDescription:
      "Situación de aprendizaje de Educación Física para 1º de Primaria basada en el juego simbólico y los desplazamientos naturales.",
    category: "situaciones-aprendizaje",
    subject: "educacion-fisica",
    subcategory: "primero-de-primaria",
    date: "2026-01-15",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "segundo-de-primaria",
    date: "2026-01-20",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "segundo-de-primaria",
    date: "2026-01-27",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "tercero-de-primaria",
    date: "2026-02-02",
    author: "Marco Pérez",
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
    subject: "educacion-artistica",
    subcategory: "tercero-de-primaria",
    date: "2026-02-10",
    author: "Marco Pérez",
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
    subject: "valores-civicos",
    subcategory: "cuarto-de-primaria",
    date: "2026-02-16",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "cuarto-de-primaria",
    date: "2026-02-20",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "quinto-de-primaria",
    date: "2026-02-24",
    author: "Marco Pérez",
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
    subject: "valores-civicos",
    subcategory: "sexto-de-primaria",
    date: "2026-03-01",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "rubricas",
    date: "2026-01-06",
    author: "Marco Pérez",
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
    subject: "valores-civicos",
    subcategory: "rubricas",
    date: "2026-01-14",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "listas-de-control",
    date: "2026-01-19",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "listas-de-control",
    date: "2026-01-29",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "escalas-de-observacion",
    date: "2026-02-03",
    author: "Marco Pérez",
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
    subject: "valores-civicos",
    subcategory: "escalas-de-observacion",
    date: "2026-02-11",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "instrumentos-de-evaluacion",
    date: "2026-02-17",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "instrumentos-de-evaluacion",
    date: "2026-02-22",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "instrumentos-de-evaluacion",
    date: "2026-02-27",
    author: "Marco Pérez",
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
    subject: "educacion-fisica",
    subcategory: "instrumentos-de-evaluacion",
    date: "2026-03-03",
    author: "Marco Pérez",
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
  }
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
