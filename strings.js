export function capitalize(string) {
  if (!string) return;
  if (string.charAt(0) === string.charAt(0).toUpperCase())
    return "That string is already capitalized :D";
  return string.charAt(0).toUpperCase() + string.slice(1);
}
