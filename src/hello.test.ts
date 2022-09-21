import { assert, assertEquals } from "https://deno.land/std@0.145.0/testing/asserts.ts"
import { sum } from './hello.ts'

Deno.test({
  name: "Hello World",
  async fn(t) {
    await t.step('Simple', () => {
      assert(true)
    })
    await t.step('Sum', () => {
      assertEquals(sum(2, 3), 5)
    })
  }
})
