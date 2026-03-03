let arr = [2, 4, 5, 6, 3, 4, 5, 6];

const secondLargest = (arr) => {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > firstLargest){
            secondLargest = firstLargest
            firstLargest = arr[i]
        }else if(arr[i] > secondLargest && arr[i] !== firstLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(secondLargest(arr))