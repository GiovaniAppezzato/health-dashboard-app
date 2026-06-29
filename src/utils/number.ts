export function parseFormNumber(value?: string) {
  return Number(String(value).replace(',', '.'));
}

export function parseNumber(value: string) {
  return Number(value.replace(',', '.'));
}

export function parseInteger(value: string) {
  return Number.parseInt(value.replace(',', '.'), 10);
}
