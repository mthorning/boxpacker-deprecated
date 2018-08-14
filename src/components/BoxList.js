import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBox, selectBox } from '../actions'
import UnorderedList from './UnorderedList'
import ItemList from './ItemList'
import Input from './Input'

class BoxList extends Component {
  boxAddCallback(id) {
    this.props.selectBox(id)
  }

  clickHandler(id) {
    const { selectBox, selectedBox } = this.props
    if (id === selectedBox) {
      selectBox(null)
    } else {
      selectBox(id)
    }
  }

  render() {
    const { boxes, selectedBox, addBox } = this.props
    return (
      <div>
        <Input
          inputHandler={addBox}
          afterInput={this.boxAddCallback.bind(this)}
          placeholder="Enter box name."
        />
        <UnorderedList
          backgroundColor={'#f48f42'}
          entities={boxes}
          clickHandler={this.clickHandler.bind(this)}
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
