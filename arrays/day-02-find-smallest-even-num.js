let arr = [2, 4, 5, 6, 3, 4, 5, 6]

const smallestEven = (arr) => {
    let smallestEven = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0 && arr[i] < smallestEven){
            smallestEven = arr[i]
        }
    }
    return smallestEven
};

console.log(smallestEven(arr));