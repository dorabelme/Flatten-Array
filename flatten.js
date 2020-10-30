// Recursive solution

const flatten = (arr, result = []) => {
    if (!Array.isArray(arr)) throw new TypeError('Must input an array!');

    for (const el of arr) {
        if (Array.isArray(el)) flatten(el, result);
        else result.push(el);
    }
    return result;
}

module.exports = flatten;