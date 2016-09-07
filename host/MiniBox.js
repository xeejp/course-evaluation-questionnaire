import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import ItemTypes from './ItemTypes'
import { DropTarget } from 'react-dnd'

const mapStateToProps = ()=> {
}

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
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
	}
}

class MiniBox extends Component{

	render(){
		const {index, flag, connectDropTarget } = this.props;
		if(flag == -1){
			return connectDropTarget(
			<div style={{...style ,opacity:0.5}}>
			{this.props.children}
	        </div>
		);}
		else{
			return (
			<div>
			{this.props.children}
	        </div>
		);}

	}
}

MiniBox.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
	dragCard: PropTypes.func.isRequired
};

export default connect()(MiniBox)
export default DropTarget(ItemTypes.CARD, boxTarget, dropCollect)(MiniBox)

