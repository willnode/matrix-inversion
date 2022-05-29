# matrix-inversion

General-Purpose Matrix Inversion Library in Javascript. Inverses 2x2, 3x3, 4x4... any NxN matrices quickly.

See [the main repo](https://github.com/willnode/matrix-inversion) for more details.

### Install

```
npm i matrix-inversion
```

Currently support in ESM imports only.

### Usage

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

### Release Notes

##### 0.2.1

+ First release

