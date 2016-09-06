import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import ItemTypes from './ItemTypes'
import { DropTarget } from 'react-dnd'

const mapStateToProps = ()=> {
}

const style = {
  height: 300,
  width: 300,
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  backgroundColor : '#222',
  position: 'relative'
}

const boxTarget = {
  drop(props, monitor, component) {
	const dragId    = monitor.getItem().id;
	const dragText  = monitor.getItem().text;
	const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    props.moveCard(dragIndex, hoverIndex);
    props.dragCard(dragIndex, dragId, dragText);

  }
}

function dropCollect(connect, monitor){
	return {
   	  connectDropTarget: connect.dropTarget(),
	}
}

class Box extends Component{

	render(){
		const { connectDropTarget } = this.props;

		return connectDropTarget(
			<div style={{...style }}>
				<p>Drag a box here</p>
				{this.props.children}
	        </div>
		);
	}
}

Box.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
	moveCard: PropTypes.func.isRequired
};

export default connect()(Box)
export default DropTarget(ItemTypes.CARD, boxTarget, dropCollect)(Box)