import React, { Component } from 'react'
import { inputBox } from '/assets/css/components/input'
import uuid from 'uuid'
import { proper } from '../utils'

export default class Input extends Component {
  clickHandler = e => {
    e.stopPropagation()
    this.textInput.focus()
  }
  onUpdate(e) {
    const { afterInput } = this.props
    const name = proper(this.textInput.value)

    if (e.which === 13 && name) {
      const { inputHandler, boxId } = this.props
      const entity = { id: uuid(), name }

      if (boxId) {
        entity.box = boxId
      }

      inputHandler(entity)
      this.textInput.value = ''

      if (afterInput) {
        afterInput(entity.id)
      }
    }
  }

  render() {
    const { placeholder } = this.props
    return (
      <input
        placeholder={placeholder}
        ref={input => (this.textInput = input)}
        onClick={this.clickHandler}
        className={inputBox}
        type="text"
        onKeyPress={e => this.onUpdate(e)}
      />
    )
  }
}
