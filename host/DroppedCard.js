import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ItemTypes from './ItemTypes'
import { DragSource } from 'react-dnd'



const mapStateToProps = ()=> {
}

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  cursor: 'move',
}



class DroppedCard extends Component{
	render(){
		const { text } = this.props;
		return (
		            	<div style={{ ...style}}>
							{text}
	            		</div>
		);
	}
}


export default connect()(DroppedCard)


