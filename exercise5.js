//Range
//Aim: Write a function that returns an array containing all the numbers inclusive to that range given the start and end values. 

function reversibleInclusiveList(a, b) {
    let newArr = []
    if (a < b) {
        for (let i = a; i <= b; i++) {
            newArr.push(i);
        }
    } else {
        for (let i = a; i >= b; i--) {
            newArr.push(i);
        }
    }

    return newArr;
}
reversibleInclusiveList(2, 8) 

