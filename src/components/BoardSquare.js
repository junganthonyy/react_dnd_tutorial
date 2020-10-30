import React from 'react';
import { canMoveKnight, canMoveRook } from '../API/Game';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';
import { moveKnight, moveRook } from '../API/Game';
import Square from './Square';
import Overlay from './Overlay';

export default function BoardSquare({ x, y, children }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [ItemTypes.KNIGHT, ItemTypes.ROOK],
    drop: (item) => {
      ItemTypes.KNIGHT === item.type ? moveKnight(x, y) : moveRook(x, y)
    },
    canDrop: (item) => {
      return ItemTypes.KNIGHT === item.type ? canMoveKnight(x, y) : canMoveRook(x, y)
    },
    collect: (monitor) => {
      return {
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop()
      }
    }
  });

  const black = (x + y) % 2 === 1
  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  )
}
