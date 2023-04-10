import { describe, it, expect } from 'vitest';
import solution from './index';

describe('Roman decoder', () => {
  it('Return correct values', () => {
    expect(solution('XXI')).toEqual(21);
    expect(solution('I')).toEqual(1);
    expect(solution('IV')).toEqual(4);
    expect(solution('MMVIII')).toEqual(2008);
    expect(solution('MDCLXVI')).toEqual(1666);
  });
});
