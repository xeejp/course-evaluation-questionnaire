import React, { Component } from 'react'
import { connect } from 'react-redux'

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'

import { nextQuestion } from './actions'
import DnD from './DnD'
import Subjects from './dnd/Subjects'
import EvaluationAxis from './dnd/EvaluationAxis'

const mapStateToProps = ({ sequence, qswap, question_text }) => ({
  sequence, qswap, question_text
})

const axisLength = EvaluationAxis.length

class Experiment extends Component {
  constructor(props) {
    super(props)
  }

  next(value) {
    //const{ dispatch } = this.props
    //dispatch(nextQuestion(value))
	console.log("lets next")
  }
  
  render() {
    const { sequence, qswap, question_text } = this.props
    const Question = question_text["question"]
    const Text = question_text[sequence]
	  return(
		 <DnD
		  Len={1}
		  next={this.next}
		 /> 
	  )
    
  }
}

export default connect(mapStateToProps)(Experiment)
