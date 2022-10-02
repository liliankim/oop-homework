const { default: test } = require('node:test')
const Engineer = require('../lib/Engineer')
describe('Engineer constructor', () => {
    describe('test all engineer properties', () => {
        test('name', () => {
            const engineer = new Engineer ('Kim', 54321, 'hi@email.com')
            expect(employee.name).toEqual('Kim')
        })
        
    })
    describe('Engineer methods', () => {
        test('')
    })
})