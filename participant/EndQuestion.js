import React, { Component } from 'react'
import { connect } from 'react-redux'

import CircularProgress from 'material-ui/CircularProgress'


const mapStateToProps = ({joined, student_answered, teacher_answered, answered, res }) => ({
		joined,
		answered,
		teacher_answered,
		student_answered,
		res,
})

class EndQuestion extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {}
	}

	componentDidMount() {

	}

	render() {
		const { joined, student_answered, teacher_answered, answered, t_res, res } = this.props
		const result = JSON.stringify(res,null,'\t')
		const tresult = JSON.stringify(t_res,null,'\t')
		return (
			<div>
			<p>実験が終了しました。(回答中:残り{joined-answered}人)</p>
			<p>全員が回答し終わるまで、この画面のまましばらくお待ちください。</p>
			<p>joined {joined}</p>
			<p>answered {answered}</p>
			<p>teacher_answered {teacher_answered}</p>
			<p>student_answered {student_answered}</p>
			<p>teacher's result</p>
			<div>{tresult}</div><br />
			<p>student's result</p>
			<div>{result}</div>
			<div style={{textAlign: "center"}}>
			<CircularProgress />
			</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(EndQuestion)

