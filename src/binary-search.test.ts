import { assert } from "https://deno.land/std@0.145.0/testing/asserts.ts"
import binarySearch from "./binary-search.ts"

Deno.test({
  name: "Binary Search",
  fn() {
    const strNumbers = Array.from(Array(32).keys())
    const someCondition = binarySearch(strNumbers, 30) === 30
    assert(someCondition)
  },
});
