import React, { Component } from 'react'
import {Card, CardHeader} from 'material-ui/Card'
import EvaluationAxis from 'util/EvaluationAxis'

const mapStateToProps = ()=> {
}

const style = {
	padding: '0.5rem 1rem',
	marginBottom: '.5rem',
	textAlign: 'center',
}

class Box extends Component{
	render(){
		const { Num } = this.props
		if(Num < EvaluationAxis.length){
			return (
				<div style={{...style }}>
				<Card style={{backgroundColor: '#B2EBF2'}}>
				<CardHeader
				title={EvaluationAxis[Num]}
				/>
				</Card>
				{this.props.children}
				</div>
			);
		}
		if(Num == EvaluationAxis.length){
			return (
				<div style={{...style }}>
				<Card style={{backgroundColor: '#B2EBF2'}}>
				<CardHeader
				title="Sort Evaluation Axis"
				/>
				</Card>
				{this.props.children}
				</div>
			);
		}
		else{
			return (
				<p>dnd is finished (printed by Box.js)</p>
			)
		}
	}
}

export default Box
