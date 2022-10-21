
function isValidMatrix(matrix) {
    if (!Array.isArray(matrix)) {
        return false;
    }
    if (matrix.length < 1) {
        return false;
    }
    let len = matrix.length;
    for (let i = 0; i < len; i++) {
        if (!Array.isArray(matrix[i])) {
            return false;
        }
        if (matrix[i].length !== len) {
            return false;
        }
        for (let j = 0; j < len; j++) {
            if (typeof matrix[i][j] !== 'number') {
                return false;
            }
        }
    }
    return true;
}

/**
 *
 * @param {number} n
 * @param {number[][]} m
 * @param {number[]} x
 * @param {number[]} y
 * @param {{string: number}} k
 * @returns {number}
 */
function optimizedNDet(n, m, x, y, k) {
    let mk = x.join('') + y.join('');
    if (!k[mk]) {
        if (n > 2) {
            let d = 0;
            let plus = 1;
            for (let i = 0; i < n; i++) {
                let ix = x[i];
                let iy = y[0];
                let xf = x.filter(e => e !== ix);
                let yf = y.filter(e => e !== iy);
                let der = optimizedNDet(n - 1, m, xf, yf, k);
                d += m[iy][ix] * plus * der;
                plus *= -1;
            }
            k[mk] = d;
        } else if (n == 2) {
            let a = m[y[0]][x[0]];
            let b = m[y[0]][x[1]];
            let c = m[y[1]][x[0]];
            let d = m[y[1]][x[1]];
            k[mk] = a * d - b * c;
        } else if (n == 1) {
            k[mk] = m[y[0]][x[0]];
        } else {
            k[mk] = 1;
        }
    }
    return k[mk];
}

/**
 * Return determinant of given matrix
 * @param {number[][]} matrix
 * @returns {number}
 */
export function determinant(matrix) {
    if (!isValidMatrix(matrix)) {
        return 0;
    }
    let n = matrix.length;
    let x = [...Array(n).keys()];
    let y = [...Array(n).keys()];
    let k = {};
    return optimizedNDet(n, matrix, x, y, k);
}

/**
 * Return inverted of given matrix
 * @param {number[][]} matrix
 * @returns {number[][]}
 */
export function invert(matrix) {
    if (!isValidMatrix(matrix)) {
        throw new Error('Invalid matrix');
    }

    let n = matrix.length;
    let x = [...Array(n).keys()];
    let y = [...Array(n).keys()];
    let k = {}
    let r = [];
    let det = optimizedNDet(n, matrix, x, y, k);
    if (det === 0) {
        throw new Error('Matrix is not invertible');
    }
    det = 1 / det;
    for (let iy = 0; iy < n; iy++) {
        r.push([...Array(n)]);
        for (let ix = 0; ix < n; ix++) {
            let plus = (ix + iy) % 2 === 0 ? 1 : -1;
            let xf = x.filter(e => e !== ix);
            let yf = y.filter(e => e !== iy);
            let der = optimizedNDet(n - 1, matrix, yf, xf, k);
            r[iy][ix] = det * plus * der;
        }
    }
    return r;
}