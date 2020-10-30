import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';

import { ItemTypes } from './Constants';

export default function Rook() {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { 
      type: ItemTypes.ROOK
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const rookStyle = {
    opacity: isDragging ? 0.5 : 1,
    fontSize: 50,
    fontWeight: 'bold',
    cursor: 'move'
  }

  return (
    <div
      ref={drag}
      style={{
        ...rookStyle,
        opacity: isDragging ? 0.5 : 1
      }}
    >
      ♖
    </div>
  )
}
