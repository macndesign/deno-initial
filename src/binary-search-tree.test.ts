import { assertEquals } from "https://deno.land/std@0.145.0/testing/asserts.ts"
import { BinarySearchTree, comparator, height, BinarySearchTreeNode } from './binary-search-tree.ts'

Deno.test({
  name: "Binary Search Tree",
  fn() {
    const bst = new BinarySearchTree(comparator);

    bst.insert(5);

    // left branch
    bst.insert(2);
    bst.insert(3);
    bst.insert(1);

    // right branch
    bst.insert(7);
    bst.insert(6);
    bst.insert(8);

    assertEquals(bst.search(6)?.data, 6)
    assertEquals(bst.search(2)?.leftNode, new BinarySearchTreeNode(1))
    assertEquals(height(bst.root), 3);
  },
})
