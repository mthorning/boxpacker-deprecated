import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem, selectItem } from '../actions'
import UnorderedList from './UnorderedList'
import Input from './Input'

class ItemList extends Component {
  render() {
    const { items, selectedItem, selectedBox, addItem, selectItem } = this.props
    const boxItems = items.filter(item => item.box === selectedBox)
    return (
      <div>
        <Input
          inputHandler={addItem}
          placeholder="Enter item name."
          boxId={selectedBox}
        />
        <UnorderedList
          backgroundColor={'#41b5f4'}
          entities={boxItems}
          clickHandler={selectItem}
          selected={selectedItem}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    selectedItem: state.selectedItem,
    selectedBox: state.selectedBox,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item)),
    selectItem: id => dispatch(selectItem(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList)
