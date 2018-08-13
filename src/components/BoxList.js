import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBox, selectBox } from '../actions'
import UnorderedList from './UnorderedList'
import ItemList from './ItemList'
import Input from './Input'

class BoxList extends Component {
  render() {
    const { boxes, selectedBox, addBox, selectBox } = this.props
    return (
      <div>
        <Input inputHandler={addBox} />
        <UnorderedList
          entities={boxes}
          clickHandler={selectBox}
          selected={selectedBox}
          NestedItem={ItemList}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    boxes: state.boxes,
    selectedBox: state.selectedBox,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBox: box => dispatch(addBox(box)),
    selectBox: id => dispatch(selectBox(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxList)
