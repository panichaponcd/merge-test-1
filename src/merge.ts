// src/merge.ts
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];
  let p1 = 0;
  let p2 = 0;
  let p3 = collection_3.length - 1; // Read backwards: smallest to largest

  const len1 = collection_1.length;
  const len2 = collection_2.length;

  while (p1 < len1 || p2 < len2 || p3 >= 0) {
    const val1 = p1 < len1 ? collection_1[p1] : Infinity;
    const val2 = p2 < len2 ? collection_2[p2] : Infinity;
    const val3 = p3 >= 0 ? collection_3[p3] : Infinity;

    // Pick the smallest among the current items across all three collections
    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      p1++;
    } else if (val2 <= val1 && val2 <= val3) {
      result.push(val2);
      p2++;
    } else {
      result.push(val3);
      p3--;
    }
  }

  return result;
}