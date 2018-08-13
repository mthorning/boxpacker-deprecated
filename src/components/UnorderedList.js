import React, { Component } from 'react'
import { list, listItem, nameContainer } from '../../assets/css/components/list'

export default class UnorderedList extends Component {
  renderItem = entity => {
    const { NestedItem, clickHandler, selected } = this.props
    return (
      <li
        className={listItem}
        key={entity.id}
        onClick={() => clickHandler(entity.id)}
      >
        <div className={nameContainer}>{entity.name}</div>
        {NestedItem && entity.key === selected && <NestedItem />}
      </li>
    )
  }
  render() {
    const { entities } = this.props
    return <ul className={list}>{entities.map(this.renderItem)}</ul>
  }
}
