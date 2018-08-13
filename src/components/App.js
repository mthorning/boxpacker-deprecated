import React, { Component } from 'react'
import BoxList from './BoxList'
import styles from '../../assets/css/components/app.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <BoxList />
      </div>
    )
  }
}
