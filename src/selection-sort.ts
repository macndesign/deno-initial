function searchLowest<T>(arr: T[], idx: number): number {
  let lowest = idx
  for (let i = idx + 1; i < arr.length; i++) {
    if (arr[i] < arr[lowest]) {
      lowest = i
    }
  }
  return lowest
}

export function selectionSort<T>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    const lowest = searchLowest(arr, i)
    if (lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr
}
