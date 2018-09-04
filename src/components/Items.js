import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editItem, deleteItem } from '../actions'
import Item from './Item'
import styles from '../assets/css/components/items.css'

class Items extends Component {
  state = {
    editMode: null,
    deleteMode: null
  }
  //detecting clicks outside of component
  componentDidMount() {
    document.addEventListener('click', e => {
      if (this.state.editMode && e.target.nodeName !== 'INPUT') {
        this.exitMode('edit')
        this.exitMode('delete')
      }
    })
  }

  componentWillUnmount() {
    document.removeEventListener('click')
  }

  enterMode = (mode, id) => {
    this.setState({ [`${mode}Mode`]: id })
  }

  exitMode = mode => {
    this.setState({ [`${mode}Mode`]: null })
  }

  renderItem = item => {
    const { editItem, deleteItem, singleClick } = this.props
    const { editMode, deleteMode } = this.state
    const toEdit = item.id === editMode
    const toDelete = item.id === deleteMode && !editMode
    const width = this.props.width + 'px'
    return (
      <li style={{ width }} className={styles.itemContainer} key={item.id}>
        <Item
          singleClick={singleClick}
          editMode={toEdit}
          deleteMode={toDelete}
          enterMode={this.enterMode}
          exitMode={this.exitMode}
          editItem={editItem}
          deleteItem={deleteItem}
          id={item.id}
          name={item.name}
        />
      </li>
    )
  }

  render() {
    const { items } = this.props
    return (
      <div className={styles.container}>
        <ul className={styles.list}>{items.map(this.renderItem)}</ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editItem: item => dispatch(editItem(item)),
    deleteItem: item => dispatch(deleteItem(item))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Items)
