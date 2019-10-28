function checkout(string){
    let newArray = string.split("")
    let letters = {A:50, B:30, C:20, D:15}
    let answer = []
    let finalAnswer;
    countA = 0;
    countB =0;
        newArray.forEach(function(item){
            answer.push(letters[item])
            if(item === 'A'){
                console.log(countA)
                countA++
            } else if (item ==='B'){
                countB++
                console.log(countB)
            }
        })
        finalAnswer = answer.reduce(function(sum,num){
            sum = sum + num
            let discountA = 

            return sum - ((Math.floor(countB/2) * 15)) - ((Math.floor(countA/3) * 20))
        })  
        return finalAnswer
    }
    
