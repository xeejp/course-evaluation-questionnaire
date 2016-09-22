import React, { Component } from 'react'
import { connect } from 'react-redux'

import CircularProgress from 'material-ui/CircularProgress'


const mapStateToProps = ({joined, answered, res, teacher_res }) => ({
	joined,
		answered,
		res,
		teacher_res,
})

class EndQuestion extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {}
	}

	componentDidMount() {

	}

	render() {
		const { joined, answered, res, teacher_res} = this.props
		const resst = JSON.stringify(res,null,'\t')
		const tResult = JSON.stringify(teacher_res,null,'\t')
		return (
			<div>
			<p>実験が終了しました。(回答中:残り{joined-answered}人)</p>
			<p>全員が回答し終わるまで、この画面のまましばらくお待ちください。</p>
			<p>joined {joined}</p>
			<p>answered {answered}</p>
			<div>students:{resst}</div>
			<div>teachers:{tResult}</div>
			<div style={{textAlign: "center"}}>
			<CircularProgress />
			</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(EndQuestion)

