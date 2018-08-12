import React, { Component } from 'react'
import Input from './Input'
import BoxList from './BoxList'
import styles from '../../assets/css/components/app.css'
import uuid from 'uuid'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      boxes: [
        { id: uuid(), name: 'Kitchen' },
        { id: uuid(), name: 'Bedroom' },
        { id: uuid(), name: 'Bathroom' },
        { id: uuid(), name: 'Kitchen' },
      ],
      selectedBox: null,
    }
  }

  inputHandler(value) {
    const { boxes } = this.state
    const newBox = { name: value, id: uuid() }
    this.setState({ boxes: [newBox, ...boxes] })
  }

  boxClickHandler(id) {
    if (id === this.state.selectedBox) {
      this.setState({ selectedBox: null })
    } else {
      this.setState({ selectedBox: id })
    }
  }

  render() {
    const { boxes, selectedBox } = this.state
    console.log(boxes)
    return (
      <div className={styles.container}>
        <Input inputHandler={this.inputHandler.bind(this)} />
        <BoxList
          selected={selectedBox}
          clickHandler={this.boxClickHandler}
          boxes={boxes}
        />
      </div>
    )
  }
}
