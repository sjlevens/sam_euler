export const factorial = (num: number): number => {
  if (num < 0) return -1

  if (num === 0) return 1

  return num * factorial(num - 1)
}

export const getBinomialCoefficient = ([a, b]: [number, number]) => (factorial(a+b))/(factorial(a)*factorial(b))