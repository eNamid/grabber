
function Sort(arr) {

    if (arr.length <= 2) {
        return arr;
    };

    let pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return Sort(left).concat(pivot, Sort(right));

}

const array = [53, 40, 14, 97, 28, 95, 41, 58, 24, 91];
const sorted = Sort(array);

console.log(sorted);