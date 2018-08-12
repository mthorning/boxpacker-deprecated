import React, { Component } from 'react'
import { inputBox } from '/assets/css/components/input'

export default class Input extends Component {
  onUpdate(e) {
    const { value } = this.textInput
    if (e.which === 13 && value) {
      const { inputHandler } = this.props
      inputHandler(value)
      this.textInput.value = ''
    }
  }
  render() {
    return (
      <input
        placeholder="Enter box name."
        ref={input => (this.textInput = input)}
        className={inputBox}
        type="text"
        onKeyPress={e => this.onUpdate(e)}
        autoFocus="autoFocus"
      />
    )
  }
}
