import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import ItemTypes from './ItemTypes'
import { DropTarget } from 'react-dnd'

const mapStateToProps = ()=> {
}

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
  opacity : 0.2
}



class MiniBox extends Component{

	render(){
		const {index} = this.props;

		return (
			<div style={{...style }}>
				<div>No.{index}</div>
	        </div>
		);
	}
}


export default connect()(MiniBox)

