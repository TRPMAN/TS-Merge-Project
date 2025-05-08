import { merge } from './merge';

describe('merge()', () => {
  it('should merge three non-empty arrays correctly', () => {
    const a = [0, 2, 5, 9];
    const b = [10, 7, 3, 1]; // descending
    const c = [4, 6, 8, 11];
    expect( merge(a, b, c) ).toEqual([0,1,2,3,4,5,6,7,8,9,10,11]);
  });

  it('should handle empty arrays', () => {
    expect( merge([], [], []) ).toEqual([]);
    expect( merge([1,2], [], []) ).toEqual([1,2]);
    expect( merge([], [5,4,3], []) ).toEqual([3,4,5]);
    expect( merge([], [], [7,8]) ).toEqual([7,8]);
  });

  it('should handle arrays of different lengths', () => {
    const a = [1,4];
    const b = [6,5,3,2];   // descending
    const c = [7];
    expect( merge(a, b, c) ).toEqual([1,2,3,4,5,6,7]);
  });

  it('should work when values overlap', () => {
    const a = [1,2,3];
    const b = [5,3,1];
    const c = [2,4,5];
    expect( merge(a, b, c) ).toEqual([1,1,2,2,3,3,4,5,5]);
  });

  it('should handle negative and duplicate values', () => {
    const a = [-2, 0, 0];
    const b = [3, 0, -1];
    const c = [-3, -1, 1];
    expect( merge(a, b, c) ).toEqual([-3,-2,-1,-1,0,0,0,1,3]);
  });
});
