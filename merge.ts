export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];
  let i = 0;
  let j = collection_2.length - 1;
  let k = 0;

  while (i < collection_1.length || j >= 0 || k < collection_3.length) {
    const val1 = i < collection_1.length ? collection_1[i] : Infinity;
    const val2 = j >= 0 ? collection_2[j] : Infinity;
    const val3 = k < collection_3.length ? collection_3[k] : Infinity;

    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      i++;
    } else if (val2 <= val1 && val2 <= val3) {
      result.push(val2);
      j--;
    } else {
      result.push(val3);
      k++;
    }
  }

  return result;
}

const a = [0, 5, 8, 9, 13, 15, 19];
const b = [2, 1, 0];
const c = [4, 6, 8, 11];

console.log(merge( a, b, c ));