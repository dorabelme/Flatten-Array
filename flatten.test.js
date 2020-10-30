const flatten = require('./flatten.js');

test('flatten called on empty array should return empty array', () => {
    const output = flatten([]);
    expect(output).toStrictEqual([]);
})

test('flatten called on string should return an error', () => {
    const output = () => flatten('Hello');
    expect(output).toThrow(TypeError);
})

test('flatten called on not nested array should return itself', () => {
    const output = flatten([1, 2, 3, 4]);
    expect(output).toStrictEqual([1, 2, 3, 4]);
})

test('flatten called on nested array should return a flattened array', () => {
    const output = flatten([[1, 2, [3]], 4]);
    expect(output).toStrictEqual([1, 2, 3, 4]);
})

test('flatten called on a deeply nested array should return a flattened array', () => {
    const output = flatten([[1, 2, [3], [[5, 6, 7]]], 4]);
    expect(output).toStrictEqual([1, 2, 3, 5, 6, 7, 4]);
})

