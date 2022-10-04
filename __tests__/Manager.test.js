const Manager = require ('../lib/Manager')
describe('Manager constructor', ()=> {
describe('test all manager properties', () => {
        const manager = new Manager('Antman', '2468', 'wasp@email.com','100')
        test('name', ()=> {
        expect(manager.name).toEqual('Antman')
    })
    test('id',() => {
        expect(manager.id).toEqual('2468')
    })
    test('email', () => {
        expect(manager.email).toEqual('wasp@email.com')
    })
   
})
describe('Manager methods', () => {
    const manager = new Manager('SailorMoon', '5000', 'luna@email.com', '5')
    test('getName', () => {
        expect(manager.getName()).toEqual('SailorMoon')
    })
    test('getId', () => {
        expect(manager.getId()).toEqual('5000')
    })
    test('getEmail', () => {
        expect(manager.getEmail()).toEqual('luna@email.com')
    })
   
})
})