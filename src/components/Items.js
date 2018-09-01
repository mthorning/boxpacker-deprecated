import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editItem } from '../actions'
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
  renderItem = (item, i) => {
    const { editItem } = this.props
    const { changeEdit } = this.state
    return (
      <li key={i}>
        <Item
          changeEdit={changeEdit}
          editItem={editItem}
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
        <ul>{items.map(this.renderItem)}</ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editItem: item => dispatch(editItem(item))
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.filter(item => item.type === 'content')
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)
