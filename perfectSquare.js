/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function(n) {
    if (n === 1) {
        return 1;
    }

    const validSquares = [];
    const queue = [];

    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (Math.sqrt(i)) {
            validSquares.push(i * i);
            queue.push([n, i * i]);
        }
        
    }

    let step = 1;

    while(queue.length > 0) {
        const size = queue.length;
        for (let j = 0; j < size; j++) {
            const [previousResult, nextNode] = queue.shift();
            const result = previousResult - nextNode;
            
            if (result === 0) {
                return step;
            }
            if (result > 0) {
                validSquares.forEach(square => {
                    queue.push([result, square]);
                });
            }
        }
        
        step ++;
    }

    return -1;
};

console.log(numSquares(999))