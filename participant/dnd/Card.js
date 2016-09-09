import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ItemTypes from './ItemTypes'
import { DragSource } from 'react-dnd'


const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
  width: 400

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
  },
  endDrag(props, monitor) {
  }
}

function dragCollect(connect, monitor){
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}




class Card extends Component{
	render(){
	const { isDragging, connectDragSource } = this.props;
    const { text } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return (
      connectDragSource(
        <div style={{ ...style, opacity }}>
          {text}
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

export default connect()(Card)
export default DragSource(ItemTypes.CARD, cardSource, dragCollect)(Card)

