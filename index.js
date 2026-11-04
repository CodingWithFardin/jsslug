export function slugify(text, { separator = "-", maxLength = 0 } = {}) {
  const ascii = String(text)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/ø/g, "o")
    .replace(/[^a-z0-9]+/g, separator)
    .replace(new RegExp("^" + separator + "+|" + separator + "+$", "g"), "");
  if (maxLength > 0 && ascii.length > maxLength) {
    return ascii.slice(0, maxLength).replace(new RegExp(separator + "+$"), "");
  }
  return ascii;
}
