let knightPosition = [0, 0];
let rookPosition = [0, 1];
let observer = null;

function emitChange() {
  observer(knightPosition, rookPosition)
}

export function observe(o) {
  if (observer) {
    throw new Error ('Multiple observers not implemented')
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY]
  emitChange();
}

export function moveRook (toX, toY) {
  rookPosition = [toX, toY];
  emitChange();
}

export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2) 
  )
}

export function canMoveRook(toX, toY) {
  const [x, y] = rookPosition;
  // console.log('X:', x, 'Y:', y, 'toX:', toX, 'toY:', toY)
  console.log((x !== toX && y === toY))

  // can move if on the same column or same row
  return (
    (x === toX || y === toY) &&
    !(x === toX && y === toY)
  )
}