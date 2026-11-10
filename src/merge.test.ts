// tests/merge.test.ts
import { merge } from "./merge";

describe("merge function", () => {
  it("merges three sorted collections into a single ascending array", () => {
    const col1 = [1, 4, 7];
    const col2 = [2, 5, 8];
    const col3 = [9, 6, 3, 0]; // Max to min

    expect(merge(col1, col2, col3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("handles duplicate numbers across arrays", () => {
    const col1 = [1, 3, 5];
    const col2 = [3, 4, 6];
    const col3 = [7, 5, 2];

    expect(merge(col1, col2, col3)).toEqual([1, 2, 3, 3, 4, 5, 5, 6, 7]);
  });

  it("handles empty arrays gracefully", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [5, 3])).toEqual([1, 2, 3, 5]);
  });

  it("handles negative numbers", () => {
    const col1 = [-10, -5, 0];
    const col2 = [-8, 2];
    const col3 = [4, -1, -12];

    expect(merge(col1, col2, col3)).toEqual([-12, -10, -8, -5, -1, 0, 2, 4]);
  });
});