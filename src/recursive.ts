export function factorial(num: number): number {
  if (num === 1) {
    return 1
  }
  return num * factorial(num - 1)
}

export function countdown(num: number, arr: number[]): null {
  arr.push(num)
  if (num <= 1) {
    return null
  }
  return countdown(num - 1, arr)
}
