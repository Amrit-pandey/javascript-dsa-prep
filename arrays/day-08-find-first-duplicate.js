let arr = [3, 5, 2, 5, 7, 2];

function firstDuplicate(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j]) {
                return arr[i];
            }

        }

    }

    return -1;
}

console.log(firstDuplicate(arr));