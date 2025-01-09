export default function PercentageCalculator(a: number, b: number): number {
  if (a === 0) {
    return 0; // Avoid division by zero
  }

  const percentageChange = ((b - a) / a) * 100;
  return percentageChange;
}
