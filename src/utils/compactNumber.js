export const compactNumber = (value) => {
  const locale = 'en';
  const formatter = new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: 1,
  });

  return formatter.format(value);
}