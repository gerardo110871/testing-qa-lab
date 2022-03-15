const functions = require('./functions.js')

test('returnTwo function should return number 2', () =>{
    expect(functions.returnTwo()).toEqual(2)
})

test('greeting function should return Hello with the name given', () =>{
    expect(functions.greeting('John')).toEqual('Hello, John.')
})

test('add function should add num1 and num2', () =>{
    expect(functions.add(2,2)).toEqual(4)
})