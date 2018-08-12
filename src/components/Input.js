import React, { Component } from 'react'
import { inputBox } from '/assets/css/components/input'

export default class Input extends Component {
  onKeyPress(e) {
    const { inputHandler } = this.props
    if (e.which === 13 && e.target.value) {
    }
  }
  render() {
    return (
      <input className={inputBox} type="text" onKeyPress={this.onKeyPress} />
    )
  }
}
