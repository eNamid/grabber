const queue = [53, 40, 14, 97, 28, 95, 41, 58, 24, 91];
const n = 0;

while (n < 10) {
    const random = Math.floor(Math.random() * 100);
    queue.push(random);
    if (queue.length = 11) {
        queue.shift();
    }
    console.log(queue); 
    if (queue[0] == 91) {
        break;
    }
}

