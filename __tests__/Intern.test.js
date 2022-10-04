const Intern = require('../lib/Intern')
describe('Intern constructor', () => {
    describe ('test all intern properties', () => {
        const intern = new Intern('Alice', 101, 'wonderland@email.com', 'disneyland')
        test('name', () => {
            expect(intern.name).toEqual('Alice')
        })
        test('id', ()=> {
            expect(intern.id).toEqual(101)
        })
        test('email', ()=>{
            expect(intern.email).toEqual('wonderland@email.com')
        })
        test('school', () =>{
            expect(intern.school).toEqual('disneyland')
        })
    })

    describe('Intern methods', () =>{
        const intern = new Intern('Captainamerica', '007', 'super@email.com', 'multiverse')
        test('getName', ()=>{
            expect(intern.getName()).toEqual('Captainamerica')
        })
        test('getId', ()=>{
            expect(intern.getId()).toEqual('007')
        })
        test('getEmail', () =>{
            expect(intern.getEmail()).toEqual('super@email.com')
        })
        test('getSchool', () =>{
            expect(intern.getSchool()).toEqual('multiverse')
        })
  
    })
})