import uuid from 'uuid'

const kitchen = uuid(),
  bedroom = uuid(),
  bathroom = uuid(),
  frontRoom = uuid()

export default {
  boxes: [
    { id: kitchen, name: 'Kitchen' },
    { id: bedroom, name: 'Bedroom' },
    { id: bathroom, name: 'Bathroom' },
    { id: frontRoom, name: 'Front Room' },
  ],
  items: [
    { id: uuid(), name: 'spoons', box: kitchen },
    { id: uuid(), name: 'plates', box: kitchen },
    { id: uuid(), name: 'knives', box: kitchen },
    { id: uuid(), name: 'forks', box: kitchen },
    { id: uuid(), name: 'bowls', box: kitchen },
    { id: uuid(), name: 'pillow', box: bedroom },
    { id: uuid(), name: 'blankets', box: bedroom },
    { id: uuid(), name: 'socks', box: bedroom },
    { id: uuid(), name: 'shirts', box: bedroom },
    { id: uuid(), name: 'jeans', box: bedroom },
    { id: uuid(), name: 'lamp', box: bedroom },
    { id: uuid(), name: 'toothbrush', box: bathroom },
    { id: uuid(), name: 'toothpaste', box: bathroom },
    { id: uuid(), name: 'towel', box: bathroom },
    { id: uuid(), name: 'flannel', box: bathroom },
    { id: uuid(), name: 'soap', box: bathroom },
    { id: uuid(), name: 'mouthwash', box: bathroom },
    { id: uuid(), name: 'hair brush', box: bathroom },
    { id: uuid(), name: 'remote', box: frontRoom },
    { id: uuid(), name: 'magazine', box: frontRoom },
    { id: uuid(), name: 'candles', box: frontRoom },
    { id: uuid(), name: 'singing bowl', box: frontRoom },
  ],
}
