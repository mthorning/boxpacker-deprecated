import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Drawer } from 'antd'
import Items from './Items'

class Page extends Component {
  state = {
    visible: false,
    selectedBox: null
  }

  showDrawer = selectedBox => {
    this.setState({
      selectedBox,
      visible: true
    })
  }

  onClose = () => {
    this.setState({
      selectedBox: null,
      visible: false
    })
  }

  getDrawerWidth() {
    const VpWidth = window.innerWidth
    if (VpWidth > 1000) {
      return VpWidth / 2
    } else if (VpWidth > 300) {
      return (VpWidth / 4) * 3
    } else {
      return VpWidth
    }
  }

  render() {
    const { items } = this.props
    const boxes = items.filter(item => item.type === 'box')
    const contents = items.filter(
      content =>
        content.type === 'content' && content.box === this.state.selectedBox
    )
    const selectedBox = items.find(item => item.id === this.state.selectedBox)
    const selectedBoxName = selectedBox && selectedBox.name
    const width = this.getDrawerWidth()
    return (
      <div>
        <Items width={width} singleClick={this.showDrawer} items={boxes} />
        <Drawer
          cloasable
          title={selectedBoxName}
          placement="right"
          closable={false}
          width={width}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Items items={contents} />
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Page)
