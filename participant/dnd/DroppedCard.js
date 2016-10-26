import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import {Card, CardHeader} from 'material-ui/Card';
import ItemTypes from './ItemTypes'
import MiniBox from './MiniBox'
import { DragSource } from 'react-dnd'
import { DropTarget } from 'react-dnd'

const mapStateToProps = ()=> {
}

const cardStyle = {
	padding: '0.5rem 1rem',
	marginBottom: '.2rem',
	textAlign:'left',
}
const style = {
	border: '1px dashed gray',
	padding: '1rem 2rem',
	marginBottom: '.5rem',
}

const cardSource = {
	beginDrag(props) {
		return {
			id: props.id,
			index: props.index
		}
	}
}

const cardTarget = {
	hover(props, monitor, component) {
		const dragIndex = monitor.getItem().index;//dragÇ≥ÇÍÇƒÇÈóvëfÇÃindexÇéÊìæ
		const hoverIndex = props.index;

		if (dragIndex === hoverIndex) {
			return;
		}

		const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;//çÇÇ≥äÑÇQ

		const clientOffset = monitor.getClientOffset();//dropÇµÇƒÇ¢ÇΩç≈å„ÇÃç¿ïW

		const hoverClientY = clientOffset.y - hoverBoundingRect.top;

		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return;
		}

		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return;
		}

		props.dragDropCard(dragIndex, hoverIndex);

		monitor.getItem().index = hoverIndex;
	}
}

function dragCollect(connect, monitor){
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}

function dropCollect(connect, monitor){
	return {
		connectDropTarget: connect.dropTarget(),
	}
}

class DroppedCard extends Component{
	constructor(props, context) {
		super(props, context)
		this.state = {}
	}

	render(){
		const { flag, text, index, isDragging, connectDragSource, connectDropTarget } = this.props;
		const opacity = isDragging ? 0 : 1;
		const no = index+1;
		const title="No."+no+" "+text;

		if( flag == false ){
			return connectDragSource(connectDropTarget(
				<div style={{ ...style ,opacity}}>
				<div>No.{index+1} {text}</div>
				</div>
			));
		}
		else{
			return connectDragSource(connectDropTarget(
				<div style={{ ...cardStyle ,opacity}}>
				<Card>
				<CardHeader
				title={title}
				/>
				</Card>
				</div>
			));
		}

	}
}

	DroppedCard.propTypes = {
		connectDragSource: PropTypes.func.isRequired,
		connectDropTarget: PropTypes.func.isRequired,
		index: PropTypes.number.isRequired,
		isDragging: PropTypes.bool.isRequired,
		id: PropTypes.any.isRequired,
		text: PropTypes.string.isRequired,
		dragDropCard: PropTypes.func.isRequired
	}
	const x = DropTarget(ItemTypes.DRAGGED, cardTarget, dropCollect)(DroppedCard) 
	export default DragSource(ItemTypes.DRAGGED, cardSource, dragCollect)(x)



