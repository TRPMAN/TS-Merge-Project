import { merge } from './merge';

describe('merge()', () => {
  it('First, merge three non-empty arrays', () => {
    const a = [0, 2, 5, 9];
    const b = [10, 7, 3, 1]; 
    const c = [4, 6, 8, 11];
    expect( merge(a, b, c) ).toEqual([0,1,2,3,4,5,6,7,8,9,10,11]);
  });

  it('Second, handle empty arrays', () => {
    expect( merge([], [], []) ).toEqual([]);
    expect( merge([1,2], [], []) ).toEqual([1,2]);
    expect( merge([], [5,4,3], []) ).toEqual([3,4,5]);
    expect( merge([], [], [7,8]) ).toEqual([7,8]);
    expect( merge([], [5, 3, 1], [1, 3, 6]) ).toEqual([1,1,3,3,5,6]);        
    expect( merge([0, 2, 4], [], [1, 3, 6]) ).toEqual([0,1,2,3,4,6]);       
    expect( merge([0, 2, 4], [5, 3, 1], []) ).toEqual([0,1,2,3,4,5]);       
  });

  it('Third, handle arrays of different lengths', () => {
    const a = [1,4];
    const b = [6,5,3,2];
    const c = [7];
    expect( merge(a, b, c) ).toEqual([1,2,3,4,5,6,7]);
  });

  it('Fourth, handle values overlap', () => {
    const a = [1,2,3];
    const b = [5,3,1];
    const c = [2,4,5];
    expect( merge(a, b, c) ).toEqual([1,1,2,2,3,3,4,5,5]);
  });
});
