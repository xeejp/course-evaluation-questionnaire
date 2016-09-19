import React, { Component } from 'react'
import { connect } from 'react-redux'


import DnD from './DnD'
import EvaluationAxis from './dnd/EvaluationAxis'
import EndQuestion from './EndQuestion'
import Subjects from './dnd/Subjects'
import { submitAnswer } from './actions'


const mapStateToProps = ({}) => ({
})

const Len = EvaluationAxis.length
let DnDResult = new Array()
let Num = 0
const ddt = {aa: "aa"}

class Question extends Component {
	constructor(props, context) {
		super(props, context)
		this.dataBarn = this.dataBarn.bind(this)
		this.state = {}
	}

	componentDidMount() {
	}

	dataBarn(array) {
		DnDResult[Num] = new Array()
		DnDResult[Num] = array
		if(Num < EvaluationAxis.length + 1 ){
			this.setState(ddt)
		}
		if(Num == EvaluationAxis.length){
			let result    = new Object()

			for(let i=0; i<=EvaluationAxis.length; i++){
				result[i] = new Object()
	            if(i < EvaluationAxis.length){
					for(let d=0; d<Subjects.length; d++){
						result[i][d] = DnDResult[i][d][1]
					}
				}
				if(i == EvaluationAxis.length){
					for(let l=0; l<EvaluationAxis.length; l++){
						result[i][l] = DnDResult[i][l][1]
					}
				}
			

			}

			console.log("result in:%s",JSON.stringify(result,null,'\t'))
			const { dispatch } = this.props
			dispatch(submitAnswer(JSON.parse(JSON.stringify(result))))
		}
		Num++
		console.log("DnDResult : %s",JSON.stringify(DnDResult,null,'\t'))
	}


	render() {
		const { } = this.props
		if(Num <  EvaluationAxis.length + 1){
			return <div>
			<DnD 
			EvaluationAxis = {EvaluationAxis}
			Len = {Len}
			Num = {Num}
			dataBarn= {this.dataBarn}
			/>
			</div>
		}
		else {
			return (
				<EndQuestion />
			)
		}
	}
}

export default connect(mapStateToProps)(Question)

