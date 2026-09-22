export type Heading = { id: string; text: string; level: 2 | 3 };

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function inline(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

/**
 * Convierte el markdown simplificado usado en lib/articles.ts (##, ###, listas,
 * negritas) en HTML, generando anclas (id) en cada encabezado para el índice
 * automático de artículos del blog.
 */
export function renderArticleContent(markdown: string): { html: string; headings: Heading[] } {
  const lines = markdown.trim().split("\n");
  const headings: Heading[] = [];
  const html: string[] = [];
  let inList = false;
  let listType: "ul" | "ol" | null = null;

  const closeList = () => {
    if (inList && listType) {
      html.push(listType === "ul" ? "</ul>" : "</ol>");
      inList = false;
      listType = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      closeList();
      continue;
    }

    if (line.startsWith("### ")) {
      closeList();
      const text = line.slice(4);
      const id = slugify(text);
      headings.push({ id, text, level: 3 });
      html.push(`<h3 id="${id}">${inline(text)}</h3>`);
      continue;
    }

    if (line.startsWith("## ")) {
      closeList();
      const text = line.slice(3);
      const id = slugify(text);
      headings.push({ id, text, level: 2 });
      html.push(`<h2 id="${id}">${inline(text)}</h2>`);
      continue;
    }

    const orderedMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (orderedMatch) {
      if (!inList || listType !== "ol") {
        closeList();
        html.push("<ol>");
        inList = true;
        listType = "ol";
      }
      html.push(`<li>${inline(orderedMatch[2])}</li>`);
      continue;
    }

    if (line.startsWith("- ")) {
      if (!inList || listType !== "ul") {
        closeList();
        html.push("<ul>");
        inList = true;
        listType = "ul";
      }
      html.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }

    closeList();
    html.push(`<p>${inline(line)}</p>`);
  }
  closeList();

  return { html: html.join("\n"), headings };
}
