const graph = [
  [1, 1, 1, 0, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0]
];

function generatePair(x, y) {
  return `${x}-${y}`
}

function isSafe(row, col, baseGraph, visited) {
  return row >= 0 && col >=0 && baseGraph[row][col] && !visited[generatePair(row, col)];
}

function getConnectedNodes(row, col) {
  return [
    [row + 1, col],
    [row, col + 1],
    [row + 1, col + 1],
    [row - 1, col - 1],
    [row + 1, col - 1],
    [row - 1, col + 1],
    [row, col - 1],
    [row - 1, col],
  ];
}

function traverseRelativeIsLands(row, col, baseGraph, visitedMap) {
  if (baseGraph[row][col] !== 1) {
    return;
  }

  visitedMap[generatePair(row, col)] = true;
  const queue = [[row, col]];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    if (!isSafe(x, y, baseGraph, visitedMap)) {
      visitedMap[generatePair(x, y)] = true;
      queue.push(...getConnectedNodes(row, col));
    }
  }
}

function numbersIsland(input) {
  const visited = {};
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    const nodeLength = input[i].length;
    for (let j = i; j < nodeLength; j++) {
      if (input[i][j] === 1 && !visited[generatePair(i, j)]) {
        traverseRelativeIsLands(i, j, input, visited);
        count++;
      }
    }
  }
  return count;
}


console.log(numbersIsland(graph))
