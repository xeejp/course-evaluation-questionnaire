import React, { Component } from 'react'
import { connect } from 'react-redux'

import { submitAnswer , teacherSubmitAnswer} from './actions'
import DnD from './DnD'
import EndQuestion from './EndQuestion'
import EvaluationAxis from 'util/EvaluationAxis'
import Subjects from 'util/Subjects'

const mapStateToProps = ({}) => ({
})

let DnDResult = new Array()
let Num = 0

class Question extends Component {
	constructor(props, context) {
		super(props, context)
		this.dataBarn = this.dataBarn.bind(this)
		this.state = {}
	}

	componentDidMount() {
	}

	dataBarn(array) {
		const {dispatch, isTeacher} = this.props
		let result    = new Object()
		DnDResult[Num] = new Array()
		DnDResult[Num] = JSON.parse(JSON.stringify(array)) 
		if(isTeacher){
			for(let i=0; i<EvaluationAxis.length; i++){
				result[i] = DnDResult[0][i][1]
			}
			dispatch(teacherSubmitAnswer(JSON.parse(JSON.stringify(result))))
			console.log("dispatch!!!")

		}
		if(Num < EvaluationAxis.length + 1 ){
			this.setState(DnDResult)
		}
		if(Num == EvaluationAxis.length){
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
			//console.log("result in:%s",JSON.stringify(result,null,'\t'))
			dispatch(submitAnswer(JSON.parse(JSON.stringify(result))))
		}
		Num++
		console.log("DnDResult : %s",JSON.stringify(DnDResult))
	}


	render() {
		const { isTeacher } = this.props
		if(isTeacher){
			if(Num == 0){
				return(
					<DnD
					Num={Num}
					dataBarn={this.dataBarn}
					isTeacher={isTeacher}
					/>
				)
			}
			else{
				return(
					<EndQuestion />
				)
			}
		}
		else{
		if(Num <  EvaluationAxis.length + 1){
			return <div>
			<DnD 
			Num = {Num}
			dataBarn= {this.dataBarn}
			isTeacher={isTeacher}
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
}

export default connect(mapStateToProps)(Question)
