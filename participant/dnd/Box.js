import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import EvaluationAxis from './EvaluationAxis'

const mapStateToProps = ()=> {
}

const style = {
  border: '1px dashed gray',
  height: 400,
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
		const { Num, Len } = this.props;
		if(Num < Len){
			return (
				<div style={{...style }}>
				<p>Question{Num+1} {EvaluationAxis[Num]}</p>
				{this.props.children}
				</div>
			);
		}
		if(Num == Len){
			return (
				<div style={{...style }}>
				<p>sort Evaluation Axis</p>
				{this.props.children}
				</div>
			);
		}
		else{
			return (
			<p>dnd is finished </p>
			)
		}

	}
}

export default connect()(Box)
