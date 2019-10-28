describe('CHECKOUT', function(){
    it('should return 50 when A entered', function(){
        let string = 'A'
        let result = checkout(string)
        expect(result).toEqual(50)
    })
    it('should return 30 when B entered', function(){
        let string = 'B'
        let result = checkout(string)
        expect(result).toEqual(30)
    })
    it('should return 20 when C entered', function(){
        let string = 'C'
        let result = checkout(string)
        expect(result).toEqual(20)
    })
    it('should return 15 when D entered', function(){
        let string = 'D'
        let result = checkout(string)
        expect(result).toEqual(15)
    })
    it('should return 100 when AA entered', function(){
        let string = 'AA'
        let result = checkout(string)
        expect(result).toEqual(100)
    })
    it('should return 45 when BB entered', function(){
        let string = 'BB'
        let result = checkout(string)
        expect(result).toEqual(45)
    })
    it('should return 40 when CC entered', function(){
        let string = 'CC'
        let result = checkout(string)
        expect(result).toEqual(40)
    })
    it('should return 30 when DD entered', function(){
        let string = 'DD'
        let result = checkout(string)
        expect(result).toEqual(30)
    })
    it('should return 130 when AAB entered', function(){
        let string = 'AAB'
        let result = checkout(string)
        expect(result).toEqual(130)
    })
    it('should return 130 when AAA entered', function(){
        let string = 'AAA'  
        let result = checkout(string)
        expect(result).toEqual(130)
    })
})