export default function sanitize(text: string): string {
  return text.replace(
    /[&<>]/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
      })[char] || char
  );
}
