import React, { Component } from 'react'
import { Input, Icon } from 'antd'
import styles from '../assets/css/components/items.css'

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleteVisible: false,
      edit: false,
      prevEditProp: null,
      name: props.name
    }
  }

  enterEdit = () => {
    this.setState({ edit: true })
  }

  exitEdit = () => {
    this.setState({ edit: false, deleteVisible: false })
  }

  changeValue = event => {
    const { editItem, id } = this.props
    const name = event.target.value
    this.setState({ name })
    editItem({ name, id })
  }

  showDelete = () => {
    this.setState({ deleteVisible: true })
  }

  hideDelete = () => {
    this.setState({ deleteVisible: false })
  }

  delete = () => {
    const { deleteItem, id } = this.props
    deleteItem(id)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.changeEdit !== prevState.prevEditProp) {
      return {
        ...prevState,
        prevEditProp: nextProps.changeEdit,
        edit: false,
        deleteVisible: false
      }
    }
    return null
  }

  render() {
    const { deleteVisible, edit, name } = this.state
    return (
      <div onBlur={this.exitEdit}>
        {edit && (
          <Input
            value={name}
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
            {name}
            {deleteVisible && (
              <Icon
                onClick={this.delete}
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
