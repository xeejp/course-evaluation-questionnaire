import React, { Component, PropTypes } from 'react'
import {Card, CardHeader} from 'material-ui/Card';
import ItemTypes from './ItemTypes'
import { DragSource } from 'react-dnd'

const style = {
	padding: '0.5rem 1rem',
	marginBottom: '.5rem',
}

const mapStateToProps = ()=> {
}

const cardSource= {
	beginDrag(props) {
		return {
			index: props.index,
			id : props.id,
			text: props.text

		};
	}
}

function dragCollect(connect, monitor){
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}




class FirstCard extends Component{
	render(){
		const { isDragging, connectDragSource } = this.props;
		const { text } = this.props;
		const opacity = isDragging ? 0.4 : 1;

		return (
			connectDragSource(
				<div style={{ ...style, opacity }}>
				<Card>
				<CardHeader
					title={text}
				/>
				</Card>
				</div>
			)
		);
	}
}

Card.propTypes = {
	connectDragSource: PropTypes.func.isRequired,
	isDragging: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default DragSource(ItemTypes.CARD, cardSource, dragCollect)(FirstCard)

