import uuid from 'uuid'

const kitchen = uuid(),
  bedroom = uuid(),
  bathroom = uuid(),
  frontRoom = uuid()

const items = [
  { type: 'box', id: kitchen, name: 'Kitchen' },
  { type: 'box', id: bedroom, name: 'Bedroom' },
  { type: 'box', id: bathroom, name: 'Bathroom' },
  { type: 'box', id: frontRoom, name: 'Front Room' },
  { type: 'content', id: uuid(), name: 'spoons', box: kitchen },
  { type: 'content', id: uuid(), name: 'plates', box: kitchen },
  { type: 'content', id: uuid(), name: 'knives', box: kitchen },
  { type: 'content', id: uuid(), name: 'forks', box: kitchen },
  { type: 'content', id: uuid(), name: 'bowls', box: kitchen },
  { type: 'content', id: uuid(), name: 'pillow', box: bedroom },
  { type: 'content', id: uuid(), name: 'blankets', box: bedroom },
  { type: 'content', id: uuid(), name: 'socks', box: bedroom },
  { type: 'content', id: uuid(), name: 'shirts', box: bedroom },
  { type: 'content', id: uuid(), name: 'jeans', box: bedroom },
  { type: 'content', id: uuid(), name: 'lamp', box: bedroom },
  { type: 'content', id: uuid(), name: 'toothbrush', box: bathroom },
  { type: 'content', id: uuid(), name: 'toothpaste', box: bathroom },
  { type: 'content', id: uuid(), name: 'towel', box: bathroom },
  { type: 'content', id: uuid(), name: 'flannel', box: bathroom },
  { type: 'content', id: uuid(), name: 'soap', box: bathroom },
  { type: 'content', id: uuid(), name: 'mouthwash', box: bathroom },
  { type: 'content', id: uuid(), name: 'hair brush', box: bathroom },
  { type: 'content', id: uuid(), name: 'remote', box: frontRoom },
  { type: 'content', id: uuid(), name: 'magazine', box: frontRoom },
  { type: 'content', id: uuid(), name: 'candles', box: frontRoom },
  { type: 'content', id: uuid(), name: 'singing bowl', box: frontRoom }
]

export default { items }
