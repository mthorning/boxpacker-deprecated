import React, { Component } from 'react'
import { list, listItem, padding } from '../../assets/css/components/list'

export default class BoxList extends Component {
  render() {
    const { boxes } = this.props
    const boxList = boxes.map(box => (
      <li className={listItem} key={box.id}>
        <div className={padding}>{box.name}</div>
      </li>
    ))
    return <ul className={list}>{boxList}</ul>
  }
}
