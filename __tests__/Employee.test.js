const Employee = require('../lib/Employee')
describe('Employee constructor', () => {
    describe('test all employee properties', () => {
        test('name', () => {
            const employee = new Employee('Lilian', 12345, 'hello@email.com')
            expect(employee.name).toEqual('Lilianlili')
        })
    })
    describe('Employee methods', () => {

    })
})