import React, { Component } from 'react'
import { Input, Icon } from 'antd'
import styles from '../assets/css/components/items.css'

export default class Item extends Component {
  changeValue = event => {
    const { editItem, id } = this.props
    const name = event.target.value
    editItem({ name, id })
  }

  delete = () => {
    const { deleteItem, id } = this.props
    deleteItem(id)
  }

  render() {
    const { editMode, deleteMode, enterMode, exitMode, id, name } = this.props
    return (
      <div onBlur={() => exitMode('edit')}>
        {editMode && (
          <Input
            value={name}
            onPressEnter={() => exitMode('edit')}
            onChange={this.changeValue}
          />
        )}
        {!editMode && (
          <p
            onDoubleClick={() => enterMode('edit', id)}
            onMouseEnter={() => enterMode('delete', id)}
            onMouseLeave={() => exitMode('delete')}
            className={styles.itemName}
          >
            {name}
            {deleteMode && (
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
