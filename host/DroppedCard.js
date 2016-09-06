import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import ItemTypes from './ItemTypes'
import { DragSource } from 'react-dnd'
import { DropTarget } from 'react-dnd'


const mapStateToProps = ()=> {
}

const style = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
	marginBottom: '.5rem',
	backgroundColor: 'white',
	cursor: 'move'
}

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    }
  }
}

function dragCollect(connect, monitor){
	return {
		 connectDragSource: connect.dragSource(),
  		 isDragging: monitor.isDragging()
	}
}

class DroppedCard extends Component{
	render(){
		const { connectDragSource, text } = this.props;

		return connectDragSource(
			<div style={{ ...style }}>
			{text}
			</div>
		);
	}
}

DroppedCard.propTypes = {
	connectDragSource: PropTypes.func.isRequired,
	isDragging: PropTypes.bool.isRequired,
	id: PropTypes.any.isRequired,
	text: PropTypes.string.isRequired
}
export default DragSource(ItemTypes.DRAGGED, cardSource, dragCollect)(DroppedCard)



