const { default: test } = require('node:test')
const Intern = require('../lib.Intern')
describe('Intern constructor', () => {
    describe ('test all intern properties', () => {
        test('name', () => {
            const intern = new Intern('Captainamerica', 007, 'super@email.com', multiverse)
            expect(intern.name).toEqual('Captainamerica')
        })
    })
    describe('Intern methods', () => {
        test('')
    })
})