import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import EvaluationAxis from './EvaluationAxis'

const mapStateToProps = ()=> {
}

const style = {
  border: '1px dashed gray',
  height: 200,
  width: '400',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  position: 'relative',
}

class Box extends Component{

	render(){
			return (
				<div style={{...style }}>
				<p>prease sort your evaluation axis</p>
				{this.props.children}
				</div>
			);

	}
}

export default connect()(Box)
