function calculateMarks(name, ...makes){
    console.log(makes)
    var total = 0;
    for(var i in makes){
        total = total + makes[i]
    }
    console.log(name, total)
    console.log('***********')

}

calculateMarks('surbhi', 90)

calculateMarks('Ashish', 10,20, 30)

calculateMarks('Soumya', 90,20,19)