import React, { Component } from 'react'
import UnorderedList from './UnorderedList'
import ItemList from './ItemList'

export default class BoxList extends Component {
  render() {
    const { boxes, selectedBox, boxClickHandler } = this.props
    console.log(boxes)
    return (
      <UnorderedList
        entities={boxes}
        clickHandler={boxClickHandler}
        selected={selectedBox}
        NestedItem={ItemList}
      />
    )
  }
}
