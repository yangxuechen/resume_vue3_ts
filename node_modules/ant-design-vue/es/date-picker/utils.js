export function formatDate(value, format) {
  if (!value) {
    return '';
  }

  if (Array.isArray(format)) {
    format = format[0];
  }

  if (typeof format === 'function') {
    return format(value);
  }

  return value.format(format);
}