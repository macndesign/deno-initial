import { assertEquals } from "https://deno.land/std@0.145.0/testing/asserts.ts"
import { factorial, countdown, sum, length, higher, squares } from './recursive.ts'

Deno.test({
  name: "Recursive",
  async fn(t) {
    await t.step('Factorial', () => {
      const fact5 = factorial(5)
      assertEquals(fact5, 120)
    })

    await t.step('Countdown', () => {
      const arr: number[] = []
      countdown(10, arr)
      assertEquals(arr, [
        10, 9, 8, 7, 6,
        5, 4, 3, 2, 1
      ])
    })

    await t.step('Sum', () => {
      const arr1: number[] = [1, 2, 3, 4, 5]
      const arr2: number[] = [7, 3, 5, 2, 4]
      assertEquals(sum(arr1), 15)
      assertEquals(sum(arr2), 21)
    })

    await t.step('Length', () => {
      const arr1: number[] = [7, 3, 5, 2, 4]
      const arr2: string[] = ['a', 'b', 'c', 'd']
      assertEquals(length(arr1), 5)
      assertEquals(length(arr2), 4)
    })

    await t.step('Higher', () => {
      const arr1: number[] = [3, 12, 5, 28, 9]
      const arr2: number[] = [3, 55, 5, 28, 9]
      const arr3: number[] = [3, 55, 5, 88, 99]
      const arr4: string[] = ['f', 't', 'g', 'z', 'a']
      assertEquals(higher(arr1), 28)
      assertEquals(higher(arr2), 55)
      assertEquals(higher(arr3), 99)
      assertEquals(higher(arr4), 'z')
    })

    await t.step('Squares', () => {
      const arr: number[] = [1680, 640]
      assertEquals(squares(arr), [80, 80])
    })
  }
})
