import React, { Component } from 'react'
import { Row, Col, Input, Icon } from 'antd'
import styles from '../assets/css/components/item.css'

export default class Item extends Component {
  state = {
    deleteVisible: false,
    edit: false,
    value: 'test'
  }
  enterEdit = () => {
    this.setState({ edit: true })
  }
  exitEdit = () => {
    this.setState({ edit: false })
  }
  changeValue = event => {
    this.setState({ value: event.target.value })
  }
  showDelete = () => {
    this.setState({ deleteVisible: true })
  }
  hideDelete = () => {
    this.setState({ deleteVisible: false })
  }
  render() {
    const { edit, value, deleteVisible } = this.state
    return (
      <div>
        {edit && (
          <Input
            value={value}
            onBlur={this.exitEdit}
            onPressEnter={this.exitEdit}
            onChange={this.changeValue}
          />
        )}
        {!edit && (
          <p
            onDoubleClick={this.enterEdit}
            onMouseEnter={this.showDelete}
            onMouseLeave={this.hideDelete}
            className={styles.itemName}
          >
            {value}
            {deleteVisible && (
              <Icon
                className={styles.icon}
                type="delete"
                onDoubleClick={this.doubleClick}
              />
            )}
          </p>
        )}
      </div>
    )
  }
}
