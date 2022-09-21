import { assertEquals } from "https://deno.land/std@0.145.0/testing/asserts.ts"
import { factorial, countdown } from './recursive.ts'

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
  }
})
