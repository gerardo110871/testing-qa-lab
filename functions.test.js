const functions = require('./functions.js')

test('returnTwo function test', () =>{
    expect(functions.returnTwo()).toEqual(2)
})

test('greeting function test', () =>{
    expect(functions.greeting('John')).toEqual('Hello, John.')
})

test('add function test', () =>{
    expect(functions.add(2,2)).toEqual(4)
})



describe('Math functions', () =>{
    test('add function', () =>{
        expect(functions.add(2,2)).toEqual(4)
    })
    test('multiplication', () =>{
        expect(functions.multiplication(2, 2)).toEqual(4)
    })
    test('division', () =>{
        expect(functions.division(2,2)).toEqual(1)
    })
})