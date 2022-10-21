import { determinant, invert } from './index.js'
import test from 'ava';

test('test determinant', (t) => {
    t.is(determinant([[2]]), 2);
    t.is(determinant([[1, 2], [3, 4]]), -2);
    t.is(determinant([[-2, 7, -6], [-3, 12, -11], [3, -11, 10]]), -1);
});

test('test invert', (t) => {
    t.deepEqual(invert([[2]]), [[1/2]]);
    t.deepEqual(invert([[1, 2], [3, 4]]), [[-2, 1], [3/2, -1/2]]);
    t.deepEqual(invert([[-2, 7, -6], [-3, 12, -11], [3, -11, 10]]), [[1, 4, 5], [3, 2, 4], [3, 1, 3]]);
    t.deepEqual(invert([[1, 4, 5], [3, 2, 4], [3, 1, 3]]), [[-2, 7, -6], [-3, 12, -11], [3, -11, 10]]);
});
