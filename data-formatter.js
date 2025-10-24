
export function formatDate(date = new Date()) {
  const d = new Date(date);
  const pad = (n) => String(n).padStart(2, "0");

  const day = pad(d.getDate());
  const month = pad(d.getMonth() + 1);
  const year = d.getFullYear();
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Exemplo de uso:
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("Data formatada:", formatDate());
}
