import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card'
import CircularProgress from 'material-ui/CircularProgress'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { joinTeacher } from './actions'

const mapStateToProps = ({joined, teachers, answered, join_teacher }) => ({
	joined,
	teachers,
	answered,
	join_teacher
})

const style = {
	padding: '0.5rem 1rem',
	marginBottom: '.2rem',
	textAlign:'left',
}

class Waiting extends Component {
	constructor(props, context) {
		super(props, context)
		const { expanded } = this.props
		this.state = {
			value:'',
			miss: true,
			expanded: expanded 
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleExpandChange(expanded) {
		this.setState({ expanded: expanded })
	}

  componentDidMount() {
  }

		handleChange(event) {
		const value = event.target.value
		this.setState({ value })
  	}

	handleClick(){
		const { dispatch ,teachers , answered, join_teacher, teacherForm } = this.props
		const { value } = this.state
		switch(value){
			case "aaa":
				dispatch(joinTeacher("math"))
				teacherForm()
				break
			case "bbb":
				dispatch(joinTeacher("english"))
				teacherForm()
				break
			case "ccc":
				dispatch(joinTeacher("music"))
				teacherForm()
				break
		}
		console.log(join_teacher)
		this.setState({
			value: '',
		})
	}

	render() {
		const { joined, join_teacher, teachers } = this.props
		const { value } = this.state
		const dt = JSON.stringify(teachers, null, '\t')
		return (
			<div>
			<p>join_teacher:{join_teacher}</p>
			<p>{dt}</p>
			<Card>
			<CardTitle
				title="授業評価アンケート"
				subtitle="待機画面"
			/>
			<CardText>
			<p>参加者の登録を待っています。</p>
			<p>この画面のまましばらくお待ちください。</p>
			<p>現在{joined}人が参加しています。</p>
			</CardText>
			<div style={{ ...style}}>
			<Card
			expanded={this.state.expanded}
			onExpandChange={this.handleExpandChange.bind(this)}
			>
			<CardHeader
			title={"教師の方はこちら"}
			actAsExpander={true}
			showExpandableButton={true}
			/>
			<CardText expandable={true}>
			<TextField
			hintText=""
			value={value}
			onChange={this.handleChange.bind(this)}
			floatingLabelText="Experiment ID"
			/><br /><br /><br />
			<RaisedButton
			label="送信" 
			style={{marginLeft: '3%'}}
			primary={true} 
			onClick={this.handleClick.bind(this)} 
			/>
			</CardText>
			</Card>
			</div>
			<div style={{textAlign: "center"}}>
			<CircularProgress />
			</div>
			</Card>
			</div>
		)

	}
}

export default connect(mapStateToProps)(Waiting)
