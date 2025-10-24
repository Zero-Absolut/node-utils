export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(isValidEmail("teste@exemplo.com"));
}
