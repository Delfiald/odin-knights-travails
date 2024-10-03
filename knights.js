function knightMoves(start, target){
  const direction = [
    [2, 1], [2, -1], [1, 2], [-1, 2],
    [-2, 1], [-2, -1], [-1, -2], [1, -2]
  ]

  if(target[0] < 0 || target[0] > 7 || target[1] < 0 || target[1] > 7){
    console.error('Invalid Target Position')
    return;
  }

  const queue = [[start]];

  const visited = new Set([start.toString()]);
  
  while(queue.length > 0){
    const path = queue.shift();

    const [x, y] = path[path.length - 1];

    if(x === target[0] && y === target[1]) {
      console.log(`Start position: ${start}`)
      console.log(`Target position: ${target}`)
      console.log(`You made it in ${path.length - 1} moves!  Here's your path`)
      path.forEach(p => console.log(p))
      return path;
    }

    for(const [dx, dy] of direction){
      const newX = x + dx;
      const newY = y + dy;

      if((newX >= 0 && newY >= 0 && newX < 8 && newY < 8) && !visited.has([newX, newY].toString())){
        queue.push([...path, [newX, newY]])
        visited.add([newX, newY].toString())
      }
    }
  }
}

knightMoves([0, 0], [1, 0]);
knightMoves([0, 0], [3, 4]);
knightMoves([0, 0], [7, 0]);
knightMoves([0, 0], [4, 2]);
knightMoves([0, 0], [2, 4]);
knightMoves([0, 0], [-1, 7]);
knightMoves([0, 0], [7, 7]);
