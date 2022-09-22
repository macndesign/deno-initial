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

export function sum<T>(arr: number[]): number {
  if (arr.length === 0) {
    return 0
  }
  const num = arr.pop() as number
  return num + sum(arr)
}

export function length<T>(arr: T[]): number {
  if (arr.length === 0) {
    return 0
  }
  arr.pop()
  return 1 + length(arr)
}

export function higher<T>(arr: T[]): T {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1]
  }
  const newArr = arr.slice(1)
  const subMax = higher(newArr)
  return arr[0] > subMax ? arr[0] : subMax
}
