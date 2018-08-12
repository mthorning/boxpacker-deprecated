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
    }
  }

  render() {
    const { boxes } = this.state

    return (
      <div className={styles.container}>
        <Input />
        <BoxList boxes={boxes} />
      </div>
    )
  }
}
