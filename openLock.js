/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = function(deadends, target) {
    if (target === '0000') return 0;
    if (target in deadends || '0000' in deadends) return - 1;

    const deadendsMap = {};
    deadends.forEach(value => deadendsMap[value] = true)

    let step = 0;

    const queue = ['0000'];
    while(queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();

            if (currentNode === target) {
                return step;
            }

            if (currentNode !== target && !(currentNode in deadendsMap)) {
                for (let j = 0; j < 4; j++) {
                    const digitUp = (+currentNode[j] + 1) % 10;
                    const digitDown = (+currentNode[j] + 9) % 10;

                    queue.push(
                        generateNode(currentNode, j, digitUp),
                        generateNode(currentNode, j, digitDown),
                    );
                }
                deadendsMap[currentNode] = true;
            }
        }
        step++;
    }
    return -1;
};

/**
 * 
 * @param {string} baseNumberString 
 * @param {*} indexOfReplacement 
 * @param {*} value 
 * @returns 
 */
function generateNode(baseNumberString, indexOfReplacement, value) {
     return baseNumberString.substring(0, indexOfReplacement) + value.toString() + baseNumberString.substring(indexOfReplacement + 1, baseNumberString.length)
}

const inputDeadends =  ["8887","8889","8878","8898","8788","8988","7888","9888"], inputTarget =  "8888"
console.log(openLock(inputDeadends, inputTarget))