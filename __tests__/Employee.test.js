const Employee = require('../lib/Employee')
describe('Employee constructor', () => {
    describe('test all employee properties', () => {
        const employee = new Employee('Lilian', 12345, 'hello@email.com')
        test('name', () => {
            expect(employee.name).toEqual('Lilian')
        })
        test('id', () => {
            expect(employee.id).toEqual(12345)
        })
        test('email', () => {
            expect(employee.email).toEqual('hello@email.com')
        })
    })
    describe('Employee methods', () => {
        const employee = new Employee('Chris', 123, 'chris@email.com')
        test('getName', () => {
            
            expect(employee.getName()).toEqual('Chris')
        })
        test('getId', () => {
            expect(employee.getId()).toEqual(123)
        })
        test('getEmail', () => {
            expect(employee.getEmail()).toEqual('chris@email.com')
        })
        test('getRole', () => {
            expect(employee.getRole()).toEqual('Employee')
        })
        

    })

    
})