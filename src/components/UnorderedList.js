import React, { Component } from 'react'
import {
  list,
  listItem,
  listContents,
  nameContainer,
} from '../../assets/css/components/list'

export default class UnorderedList extends Component {
  renderItem = entity => {
    const { NestedItem, clickHandler, selected, backgroundColor } = this.props
    const textAlign = selected === entity.id ? 'center' : 'left'

    return (
      <li
        className={listItem}
        style={{ backgroundColor, textAlign }}
        key={entity.id}
        onClick={() => clickHandler(entity.id)}
      >
        <div className={listContents}>
          <div className={nameContainer}>{entity.name}</div>
          {NestedItem && entity.id === selected && <NestedItem />}
        </div>
      </li>
    )
  }
  render() {
    const { entities } = this.props
    return <ul className={list}>{entities.map(this.renderItem)}</ul>
  }
}
