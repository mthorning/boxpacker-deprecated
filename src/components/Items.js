import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editItem, deleteItem } from '../actions'
import Item from './Item'
import styles from '../assets/css/components/items.css'

class Items extends Component {
  state = {
    changeEdit: false
  }

  //detecting clicks outside of component
  componentDidMount() {
    document.addEventListener('click', e => {
      if (e.target.nodeName !== 'INPUT') {
        this.setState({ changeEdit: !this.state.changeEdit })
      }
    })
  }

  componentWillUnmount() {
    document.removeEventListener('click')
  }

  renderItem = item => {
    const { editItem, deleteItem } = this.props
    const { changeEdit } = this.state
    return (
      <li className={styles.itemContainer} key={item.id}>
        <Item
          changeEdit={changeEdit}
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

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)
