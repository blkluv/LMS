export const formatPrice = (p: number): string => {
  if (typeof p !== 'number' || Number.isNaN(p) || !Number.isFinite(p)) {
    throw new Error(`Cannot format price: ${p}`);
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(p);
}