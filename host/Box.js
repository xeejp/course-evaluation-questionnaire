import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ()=> {
}

const style = {
  border: '1px dashed gray',
  height: 400,
  width: 300,
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  position: 'relative'
}

class Box extends Component{

	render(){
		const { } = this.props;

		return (
			<div style={{...style }}>
				<p>Drag a box here</p>
				{this.props.children}
	        </div>
		);
	}
}

export default connect()(Box)
