const { default: test } = require('node:test')
const Employee = require('../lib/Employee')
describe('Employee constructor', () => {
    describe('test all employee properties', () => {
        test('name', () => {
            const employee = new Employee('Lilian', 12345, 'hello@email.com')
            expect(employee.name).toEqual('Lilian')
        })
    })
    describe('Employee methods', () => {
        test('')

    })
})