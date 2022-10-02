const {default: test } = require('node:test')
const Manager = require ('../lib/Manager')
describe('Manager constructor', ()=> {
describe('test all manager properties', () => {
    test('name', ()=> {
        const manager = new Manager('Antman', 2468, 'wasp@email.com',100)
        expect(manager.name).toEqual('Antman')
    })
})
describe('Manager methods', () => {
    test('')
})
})