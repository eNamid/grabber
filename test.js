const peoples = [
    {name: 'Mark', age: '31', sex: 'man'},
    {name: 'John', age: '50', sex: 'man'},
    {name: 'Ira', age: '16', sex: 'woman'},
    {name: 'Tom', age: '25', sex: 'man'},
    {name: 'Mary', age: '72', sex: 'woman'},
    {name: 'James', age: '42', sex: 'man'},
    {name: 'Asya', age: '2', sex: 'woman'},
];

for (let i = 0; swap, i < peoples.length; i++) {
    for (let j = 0; j < peoples.length -1; j++) {
        if (peoples[j].age > peoples[j + 1].age) {
            let swap = {...peoples[j]};
            peoples[j] = peoples[j + 1];
            peoples[j + 1] = swap;
        }
    }
}

console.log(peoples);

// const arr = [53, 40, 14, 97, 28, 95, 41, 58, 24, 91];

// for (let i = 0, swap; i < arr.length; i++) {
//     for (let j = 0; j < arr.length -1; j++) {
//         if ( arr[j] > arr[j+1] ) {
//             swap = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = swap;
//         }
//     }
// }

// console.log(arr);

    

// for (let i = 0; i < 10; i++ ) {
//     const random = Math.floor(Math.random() * 100);
//     arr.push(random);
// }