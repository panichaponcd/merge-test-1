# 3-Way Sorted Array Merge (TypeScript)

A TypeScript implementation that merges three pre-sorted arrays into a single ascending array in linear time O(n1 + n2 + n3) without using any built-in sort functions.

---

## Problem Statement & Conditions

Implement a function matching the interface:
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]

- collection_1: Pre-sorted ascending (min to max)
- collection_2: Pre-sorted ascending (min to max)
- collection_3: Pre-sorted descending (max to min)
- Constraint: Do not use any built-in sorting functions (Array.prototype.sort).

---

## Algorithm Approach

- Pointers p1 and p2 start at index 0 and traverse forward because collection_1 and collection_2 are already sorted from minimum to maximum.
- Pointer p3 starts at the final index (collection_3.length - 1) and traverses backward (p3--), reading elements in ascending order without requiring an in-place reverse or extra memory allocation.
- At each iteration, the minimum available value across all three pointers is appended to result.
- Complexity:
  - Time: O(n1 + n2 + n3) — each element is inspected and placed once.
  - Auxiliary Space: O(1) (excluding output array).

---

## Project Setup & Execution

### 1. Prerequisites
- Node.js: v18+ (tested on Node v22.x)
- npm: v9+

### 2. Installation
Clone the repository and install the development dependencies:
```shell
git clone https://github.com/panichaponcd/merge-test-1.git
cd merge-sort-test
npm install
```

### 3. Run Unit Tests
Execute the test suite using Jest:
```shell
npm test
```

### 4. Build Project
Compile TypeScript into JavaScript (dist/ folder):
```shell
npm run build
```