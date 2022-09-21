import { assertEquals } from "https://deno.land/std@0.145.0/testing/asserts.ts"
import { selectionSort } from './selection-sort.ts'

Deno.test({
  name: "Selection sort",
  fn() {
    const sorted = selectionSort([3, 5, 1, 2])
    assertEquals(sorted, [1, 2, 3, 5])
  },
})
