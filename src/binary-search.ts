function binarySearch(list: number[], item: number): number | null {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const middle = Math.floor((low + high) / 2)
    const guess = list[middle]
    if (guess === item) {
      return guess
    }
    if (guess > item) {
      high = middle - 1
    } else {
      low = middle + 1
    }
  }

  return null
}

export default binarySearch;

const strNumbers = Array.from(Array(32).keys())
binarySearch(strNumbers, 30) === 30
