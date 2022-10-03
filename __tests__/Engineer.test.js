const Engineer = require('../lib/Engineer')
describe('Engineer constructor', () => {
    describe('test all engineer properties', () => {
        const engineer = new Engineer ('Kim', 54321, 'hi@email.com','awesome')
        test('name', () => { 
        expect(engineer.name).toEqual('Kim')
        })
        test('id', () => {
            expect(engineer.id).toEqual(54321)
        })
        test('email', () => {
            expect(engineer.email).toEqual('hi@email.com')
        })
        test('github', ()=> {
            expect(engineer.github).toEqual('awesome')
        })
    })
    describe('Engineer methods', () => {
        const engineer = new Engineer ('Phoebe', 2000, 'friends@email.com', 'awesome')
        test('getName', () => {
            expect(engineer.getName()).toEqual('Phoebe')
        })
        test('getId', ()=> {
            expect(engineer.getId()).toEqual(2000)
        })
        test('getEmail', () => {
            expect(engineer.getEmail()).toEqual('friends@email.com')
        })
        test('getGithub', () => {
            expect(engineer.getGithub()).toEqual('awesome')
        })
    })
})