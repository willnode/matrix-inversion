# matrix-inversion

General-Purpose Matrix Inversion Library. Inverses 2x2, 3x3, 4x4... any NxN matrices quickly.

Currently available in [Javascript](./javascript/).

This is a continued effort of [N-Matrix-Programmer](https://github.com/willnode/N-Matrix-Programmer), the difference is that this is a ready to use library. The basic calculation is [described here](https://www.mathsisfun.com/algebra/matrix-inverse-minors-cofactors-adjugate.html).

### Javascript Usage

```js
import { invert } from 'matrix-inversion';
console.log(invert([[1, 4, 5], [3, 2, 4], [3, 1, 3]]))
// returns: [[-2, 7, -6], [-3, 12, -11], [3, -11, 10]]
```

```js
import { determinant } from 'matrix-inversion';
console.log(determinant([[1, 2], [3, 4]]))
// returns: -2
```
