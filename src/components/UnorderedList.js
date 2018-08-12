import React, { Component } from 'react'
import { list, listItem, nameContainer } from '../../assets/css/components/list'

export default class UnorderedList extends Component {
  renderItem = entity => {
    console.log(entity, this)
    const { NestedItem, clickHandler, selected } = this.props
    return (
      <li className={listItem} key={entity.id} onClick={clickHandler}>
        <div className={nameContainer}>{entity.name}</div>
        {NestedItem && entity.key === selected && <NestedItem />}
      </li>
    )
  }
  render() {
    const { entities } = this.props
    console.log(entities)
    return <ul className={list}>{entities.map(this.renderItem)}</ul>
  }
}
