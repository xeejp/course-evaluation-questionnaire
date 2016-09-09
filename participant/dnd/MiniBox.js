import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import ItemTypes from './ItemTypes'
import { DropTarget } from 'react-dnd'

const mapStateToProps = ()=> {
}

const style = {
  border: '1px dashed gray',
  cursor: 'move',
  textAlign: 'left'
}

const boxTarget = {
  drop(props, monitor, component) {
	const dragId    = monitor.getItem().id;
	const dragText  = monitor.getItem().text;
	const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    props.dragCard(dragIndex, dragId, dragText, hoverIndex);

  }
}

function dropCollect(connect, monitor){
	return {
   	  connectDropTarget: connect.dropTarget(),
	  isOver: monitor.isOver()
	}
}

class MiniBox extends Component{

	render(){
		const {flag, isOver, connectDropTarget } = this.props;
		const color = isOver ? 1 : 0;

		if(flag == -1 && color == 0){
			return connectDropTarget(
			<div style={{opacity:0.5}}>
			{this.props.children}
	        </div>
		);}

		else if(flag == -1 && color == 1){
			return connectDropTarget(
			<div style={{opacity:0.5, backgroundColor: 'yellow'}}>
			{this.props.children}
	        </div>
		);}

		else{
			return (
			<div style={{textAlign:'left'}}>
			{this.props.children}
	        </div>
		);}

	}
}

MiniBox.propTypes = {
    connectDropTarget: PropTypes.func.isRequired
};

export default connect()(MiniBox)
export default DropTarget(ItemTypes.CARD, boxTarget, dropCollect)(MiniBox)

